'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MY_CERTIFICATES = [
    {
        title: 'Master Generative AI',
        issuer: 'Udemy',
        date: 'Aug 2025',
    },
    {
        title: 'Java Maestro',
        issuer: 'LPU',
        date: 'Jul 2025',
    },
    {
        title: 'Completion of Cloud Computing',
        issuer: 'NPTEL',
        date: 'Apr 2025',
    },
    {
        title: 'Completion of Java + DSA',
        issuer: 'NeoColab',
        date: 'Dec 2024',
    },
];

const Certificates = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const items =
                containerRef.current?.querySelectorAll('.certificate-item');

            items?.forEach((item) => {
                const title = item.querySelector('.cert-title');
                const detail = item.querySelectorAll('.cert-detail');
                const line = item.querySelector('.cert-line');

                gsap.set(title, { y: 40, opacity: 0 });
                gsap.set(detail, { y: 25, opacity: 0 });
                gsap.set(line, { scaleX: 0, transformOrigin: 'left' });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 88%',
                        end: 'top 55%',
                        scrub: 1,
                    },
                });

                tl.to(detail, { y: 0, opacity: 1, duration: 1 });
                tl.to(title, { y: 0, opacity: 1, duration: 1 }, '<0.3');
                tl.to(
                    line,
                    { scaleX: 1, duration: 1.5, ease: 'power2.out' },
                    '<0.2',
                );
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            }).to(containerRef.current, { y: -150, opacity: 0 });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-certificates">
            <div className="container" ref={containerRef}>
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
                        CERTIFICATES
                    </h2>
                </div>

                <SectionTitle title="Certificates" />

                <div className="group/certificates flex flex-col mt-4">
                    {MY_CERTIFICATES.map((item, index) => (
                        <div
                            key={item.title}
                            className="certificate-item group relative py-7 md:group-hover/certificates:opacity-40 md:hover:!opacity-100 transition-opacity duration-300"
                        >
                            {/* Animated bottom border line */}
                            <div className="cert-line absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/60 via-border to-transparent" />

                            <div className="flex gap-4 md:gap-8 items-center">
                                {/* Index */}
                                <div className="cert-detail font-anton text-primary/40 text-2xl shrink-0 w-10 text-right">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Vertical divider */}
                                <div className="cert-detail w-[1px] h-12 bg-border shrink-0" />

                                {/* Title + Issuer */}
                                <div className="flex-1 min-w-0">
                                    <p className="cert-detail text-xs text-primary uppercase tracking-[3px] mb-2 font-medium">
                                        {item.issuer}
                                    </p>
                                    <h3 className="cert-title text-3xl md:text-4xl font-anton leading-none bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left transition-all duration-700">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Date badge — desktop */}
                                <div className="cert-detail shrink-0 hidden md:flex flex-col items-end gap-1">
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                                        Issued
                                    </span>
                                    <span className="font-anton text-xl text-primary">
                                        {item.date}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile date */}
                            <div className="cert-detail mt-3 md:hidden flex items-center gap-3 pl-[4.5rem]">
                                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                                    Issued
                                </span>
                                <span className="font-anton text-base text-primary">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
