'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MY_INTERNSHIPS = [
    {
        role: 'Java Development Intern',
        company: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        duration: 'Jun 2025 – Jul 2025',
        description:
            'Completed the Java Maestro summer internship program — a hands-on training on developing GUI applications using Java Swing and AWT. Focused on building desktop applications with OOP design patterns and real-time UI components.',
    },
];

const Internships = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.internship-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-internships">
            <div className="container" ref={containerRef}>
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="internship-item text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
                        INTERNSHIPS
                    </h2>
                </div>

                <SectionTitle title="Internships" />

                <div className="group/internships flex flex-col">
                    {MY_INTERNSHIPS.map((item, index) => (
                        <div
                            key={item.role + item.company}
                            className="internship-item group leading-none py-8 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/internships:opacity-30 md:hover:!opacity-100 transition-all duration-300"
                        >
                            <div className="flex gap-2 md:gap-5 items-start">
                                {/* Index */}
                                <div className="font-anton text-muted-foreground pt-1 shrink-0">
                                    _{(index + 1).toString().padStart(2, '0')}.
                                </div>

                                {/* Main Content */}
                                <div className="flex-1">
                                    <p className="text-lg text-muted-foreground mb-1">
                                        {item.company}
                                        <span className="mx-2 opacity-40">
                                            ·
                                        </span>
                                        {item.location}
                                    </p>
                                    <h3 className="text-4xl xs:text-5xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left leading-none mb-3">
                                        {item.role}
                                    </h3>
                                    <p className="text-muted-foreground text-lg max-w-[560px]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Duration */}
                                <div className="shrink-0 text-right hidden md:block">
                                    <span className="inline-flex items-center gap-2 text-sm text-primary border border-primary/30 px-3 py-1">
                                        <span className="size-1.5 rounded-full bg-primary inline-block"></span>
                                        {item.duration}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile duration */}
                            <div className="mt-3 md:hidden ml-9">
                                <span className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/30 px-2 py-0.5">
                                    <span className="size-1 rounded-full bg-primary inline-block"></span>
                                    {item.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
