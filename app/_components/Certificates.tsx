// 'use client';
// import SectionTitle from '@/components/SectionTitle';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { useRef } from 'react';

// gsap.registerPlugin(useGSAP, ScrollTrigger);

// const MY_CERTIFICATES = [
//     {
//         title: 'Master Generative AI',
//         issuer: 'Udemy',
//         date: 'Aug 2025',
//     },
//     {
//         title: 'Java Maestro',
//         issuer: 'LPU',
//         date: 'Jul 2025',
//     },
//     {
//         title: 'Completion of Cloud Computing',
//         issuer: 'NPTEL',
//         date: 'Apr 2025',
//     },
//     {
//         title: 'Completion of Java + DSA',
//         issuer: 'NeoColab',
//         date: 'Dec 2024',
//     },
// ];

// const Certificates = () => {
//     const containerRef = useRef<HTMLDivElement>(null);

//     useGSAP(
//         () => {
//             const items =
//                 containerRef.current?.querySelectorAll('.certificate-item');

//             items?.forEach((item) => {
//                 const title = item.querySelector('.cert-title');
//                 const detail = item.querySelectorAll('.cert-detail');
//                 const line = item.querySelector('.cert-line');

//                 gsap.set(title, { y: 40, opacity: 0 });
//                 gsap.set(detail, { y: 25, opacity: 0 });
//                 gsap.set(line, { scaleX: 0, transformOrigin: 'left' });

//                 const tl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: item,
//                         start: 'top 88%',
//                         end: 'top 55%',
//                         scrub: 1,
//                     },
//                 });

//                 tl.to(detail, { y: 0, opacity: 1, duration: 1 });
//                 tl.to(title, { y: 0, opacity: 1, duration: 1 }, '<0.3');
//                 tl.to(
//                     line,
//                     { scaleX: 1, duration: 1.5, ease: 'power2.out' },
//                     '<0.2',
//                 );
//             });
//         },
//         { scope: containerRef },
//     );

//     useGSAP(
//         () => {
//             gsap.timeline({
//                 scrollTrigger: {
//                     trigger: containerRef.current,
//                     start: 'bottom 50%',
//                     end: 'bottom 20%',
//                     scrub: 1,
//                 },
//             }).to(containerRef.current, { y: -150, opacity: 0 });
//         },
//         { scope: containerRef },
//     );

//     return (
//         <section className="py-section" id="my-certificates">
//             <div className="container" ref={containerRef}>
//                 {/* Large Section Name */}
//                 <div className="overflow-hidden mb-4">
//                     <h2 className="text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
//                         CERTIFICATES
//                     </h2>
//                 </div>

//                 <SectionTitle title="Certificates" />

//                 <div className="group/certificates flex flex-col mt-4">
//                     {MY_CERTIFICATES.map((item, index) => (
//                         <div
//                             key={item.title}
//                             className="certificate-item group relative py-7 md:group-hover/certificates:opacity-40 md:hover:!opacity-100 transition-opacity duration-300"
//                         >
//                             {/* Animated bottom border line */}
//                             <div className="cert-line absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/60 via-border to-transparent" />

//                             <div className="flex gap-4 md:gap-8 items-center">
//                                 {/* Index */}
//                                 <div className="cert-detail font-anton text-primary/40 text-2xl shrink-0 w-10 text-right">
//                                     {(index + 1).toString().padStart(2, '0')}
//                                 </div>

//                                 {/* Vertical divider */}
//                                 <div className="cert-detail w-[1px] h-12 bg-border shrink-0" />

//                                 {/* Title + Issuer */}
//                                 <div className="flex-1 min-w-0">
//                                     <p className="cert-detail text-xs text-primary uppercase tracking-[3px] mb-2 font-medium">
//                                         {item.issuer}
//                                     </p>
//                                     <h3 className="cert-title text-3xl md:text-4xl font-anton leading-none bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left transition-all duration-700">
//                                         {item.title}
//                                     </h3>
//                                 </div>

//                                 {/* Date badge — desktop */}
//                                 <div className="cert-detail shrink-0 hidden md:flex flex-col items-end gap-1">
//                                     <span className="text-xs text-muted-foreground uppercase tracking-widest">
//                                         Issued
//                                     </span>
//                                     <span className="font-anton text-xl text-primary">
//                                         {item.date}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Mobile date */}
//                             <div className="cert-detail mt-3 md:hidden flex items-center gap-3 pl-[4.5rem]">
//                                 <span className="text-xs text-muted-foreground uppercase tracking-widest">
//                                     Issued
//                                 </span>
//                                 <span className="font-anton text-base text-primary">
//                                     {item.date}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Certificates;

'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_CERTIFICATES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useRef, useState, MouseEvent } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certificates = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [selectedCert, setSelectedCert] = useState<string | null>(
        MY_CERTIFICATES[0].title,
    );

    // Floating image follows mouse — same as ProjectList
    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedCert(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current || !imageContainerRef.current) return;

                const containerRect =
                    containerRef.current.getBoundingClientRect();
                const imageRect =
                    imageContainerRef.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainerRef.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainerRef.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);
            return () =>
                window.removeEventListener('mousemove', handleMouseMove);
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    // Each item animates in individually
    useGSAP(
        () => {
            const items =
                containerRef.current?.querySelectorAll('.certificate-item');
            items?.forEach((item) => {
                gsap.set(item, { y: 50, opacity: 0 });
                gsap.to(item, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 88%',
                        end: 'top 60%',
                        scrub: 1,
                    },
                });
            });
        },
        { scope: containerRef },
    );

    // Section fade out
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

    const handleMouseEnter = (title: string) => {
        if (window.innerWidth < 768) {
            setSelectedCert(null);
            return;
        }
        setSelectedCert(title);
    };

    return (
        <section className="py-section" id="my-certificates">
            <div className="container">
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
                        CERTIFICATES
                    </h2>
                </div>

                <SectionTitle title="Certificates" />

                <div className="group/certificates relative" ref={containerRef}>
                    {/* Floating preview image */}
                    {selectedCert !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[220px] xl:w-[380px] aspect-[3/2] overflow-hidden opacity-0"
                            ref={imageContainerRef}
                        >
                            {MY_CERTIFICATES.map((cert) => (
                                <Image
                                    key={cert.title}
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    width={400}
                                    height={280}
                                    className={`absolute inset-0 transition-all duration-500 w-full h-full object-cover object-top ${
                                        cert.title !== selectedCert
                                            ? 'opacity-0'
                                            : 'opacity-100'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Certificate rows */}
                    <div className="flex flex-col">
                        {MY_CERTIFICATES.map((item, index) => (
                            <div
                                key={item.title}
                                className="certificate-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/certificates:opacity-30 md:hover:!opacity-100 transition-all duration-300"
                                onMouseEnter={() =>
                                    handleMouseEnter(item.title)
                                }
                            >
                                {/* Mobile thumbnail */}
                                {selectedCert === null && (
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={400}
                                        height={280}
                                        className="w-full object-cover mb-4 aspect-[3/2] object-top"
                                        loading="lazy"
                                    />
                                )}

                                <div className="flex gap-2 md:gap-5 items-center">
                                    {/* Index */}
                                    <div className="font-anton text-muted-foreground shrink-0">
                                        _
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, '0')}
                                        .
                                    </div>

                                    {/* Title + Issuer */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs text-primary uppercase tracking-[3px] mb-1 font-medium">
                                            {item.issuer}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left leading-none">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Date — desktop */}
                                    <div className="shrink-0 hidden md:flex flex-col items-end gap-1">
                                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                                            Issued
                                        </span>
                                        <span className="font-anton text-xl text-primary">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile date */}
                                <div className="mt-2 md:hidden flex items-center gap-3 ml-9">
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
            </div>
        </section>
    );
};

export default Certificates;
