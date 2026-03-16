'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MY_EDUCATION = [
    {
        degree: 'Bachelor of Technology - Computer Science and Engineering',
        institution: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        duration: 'Since Aug 2023',
        grade: 'CGPA: 8.45',
        description:
            'Pursuing core computer science fundamentals including data structures, algorithms, web technologies, and software engineering principles.',
    },
    {
        degree: 'Intermediate (12th)',
        institution: 'Sarla International Academy',
        location: 'Basti, Uttar Pradesh',
        duration: 'Apr 2021 – Mar 2022',
        grade: 'Percentage: 75%',
        description:
            'Studied Science stream with Mathematics and Computer Science as major subjects.',
    },
    {
        degree: 'Matriculation (10th)',
        institution: 'Sarla International Academy',
        location: 'Basti, Uttar Pradesh',
        duration: 'Apr 2019 – Mar 2020',
        grade: 'Percentage: 70%',
        description:
            'Completed foundational education with distinction in Mathematics and Sciences.',
    },
];

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Animate in on scroll
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

            tl.from('.education-item', {
                y: 60,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    // Animate out on scroll
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
        <section className="py-section" id="my-education">
            <div className="container" ref={containerRef}>
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="education-item text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground tracking-widest leading-none">
                        EDUCATION
                    </h2>
                </div>

                <SectionTitle title="Education" />

                <div className="grid gap-0">
                    {MY_EDUCATION.map((item, index) => (
                        <div
                            key={item.degree}
                            className="education-item group grid md:grid-cols-12 py-10 border-b border-border last:border-none items-start gap-4"
                        >
                            {/* Year / Index */}
                            <div className="md:col-span-1">
                                <span className="font-anton text-muted-foreground text-xl">
                                    _{(index + 1).toString().padStart(2, '0')}.
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="md:col-span-7">
                                <p className="text-lg text-muted-foreground mb-1">
                                    {item.institution} · {item.location}
                                </p>
                                <h3 className="text-4xl md:text-5xl font-anton leading-none mb-2 transition-colors duration-300 group-hover:text-primary">
                                    {item.degree}
                                </h3>
                                <p className="text-muted-foreground mt-3 max-w-[480px]">
                                    {item.description}
                                </p>
                            </div>

                            {/* Duration & Grade */}
                            <div className="md:col-span-4 md:text-right flex md:flex-col gap-4 md:gap-2">
                                <p className="text-lg text-muted-foreground">
                                    {item.duration}
                                </p>
                                <span className="inline-flex md:self-end items-center gap-2 text-sm text-primary border border-primary/30 px-3 py-1 w-fit">
                                    <span className="size-1.5 rounded-full bg-primary inline-block"></span>
                                    {item.grade}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
