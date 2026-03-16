'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MY_ACHIEVEMENTS = [
    {
        title: '250+ LeetCode Problems Solved',
        description:
            'Solved 250+ LeetCode problems, earning 5 badges and demonstrating strong algorithmic problem-solving skills.',
        date: 'Mar 2026',
        link: 'https://leetcode.com/u/Hariom06/',
    },
    {
        title: '7 Badges on LeetCode',
        description:
            'Achieved 7 badges on LeetCode across multiple domains and competitive programming challenges.',
        date: 'Mar 2026',
        link: 'https://leetcode.com/u/Hariom06/',
    },
    {
        title: '4 Badges on HackerRank',
        description:
            'Achieved 4 badges on HackerRank across multiple domains and competitive programming challenges.',
        date: 'Jan 2026',
        link: 'https://www.hackerrank.com/',
    },
    {
        title: '3 Badges on Github',
        description:
            'Earned three GitHub badges through active contributions across various domains and successful participation in competitive programming challenges.',
        date: 'Dec 2025',
        link: 'https://github.com/Hari06om',
    },
];

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Each item gets its OWN ScrollTrigger — no stagger conflict
    useGSAP(
        () => {
            const items =
                containerRef.current?.querySelectorAll('.achievement-item');

            items?.forEach((item) => {
                gsap.set(item, { y: 50, opacity: 0 });

                gsap.to(item, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
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

    return (
        <section className="py-section" id="my-achievements">
            <div className="container" ref={containerRef}>
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
                        ACHIEVEMENTS
                    </h2>
                </div>

                <SectionTitle title="Achievements" />

                <div className="group/achievements flex flex-col mt-4">
                    {MY_ACHIEVEMENTS.map((item, index) => (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="achievement-item group relative py-7 md:group-hover/achievements:opacity-40 md:hover:!opacity-100 transition-opacity duration-300"
                        >
                            {/* Gradient bottom border */}
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary/60 via-border to-transparent" />

                            <div className="flex gap-4 md:gap-8 items-center">
                                {/* Index */}
                                <div className="font-anton text-primary/40 text-2xl shrink-0 w-10 text-right">
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* Vertical divider */}
                                <div className="w-[1px] h-12 bg-border shrink-0" />

                                {/* Title + Description */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-3xl md:text-4xl font-anton leading-none bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left transition-all duration-700 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-[500px]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Date — desktop */}
                                <div className="shrink-0 hidden md:flex flex-col items-end gap-1">
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                                        Earned
                                    </span>
                                    <span className="font-anton text-xl text-primary">
                                        {item.date}
                                    </span>
                                </div>
                            </div>

                            {/* Mobile date */}
                            <div className="mt-3 md:hidden flex items-center gap-3 pl-[4.5rem]">
                                <span className="text-xs text-muted-foreground uppercase tracking-widest">
                                    Earned
                                </span>
                                <span className="font-anton text-base text-primary">
                                    {item.date}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
