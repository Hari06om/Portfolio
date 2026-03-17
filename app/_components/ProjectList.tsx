'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                // Clamp so image never overflows top or bottom of container
                const minY = 0;
                const maxY = containerRect.height - imageRect.height;
                const clampedY = Math.min(
                    Math.max(offsetTop - imageRect.height / 2, minY),
                    maxY,
                );

                gsap.to(imageContainer.current, {
                    y: clampedY,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                {/* Large Section Name */}
                <div className="overflow-hidden mb-4">
                    <h2 className="text-[clamp(3rem,10vw,7rem)] font-anton uppercase text-foreground/10 tracking-widest leading-none">
                        PROJECTS
                    </h2>
                </div>

                <SectionTitle title="SELECTED PROJECTS" />

                <div
                    className="group/projects relative overflow-hidden"
                    ref={containerRef}
                >
                    {selectedProject !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] overflow-hidden opacity-0 bg-background-light"
                            ref={imageContainer}
                        >
                            {PROJECTS.map((project) => (
                                <div
                                    key={project.slug}
                                    className={cn(
                                        'transition-opacity duration-500',
                                        {
                                            'opacity-0 absolute inset-0':
                                                project.slug !==
                                                selectedProject,
                                            'opacity-100':
                                                project.slug ===
                                                selectedProject,
                                        },
                                    )}
                                >
                                    <Image
                                        src={project.thumbnail}
                                        alt={project.title}
                                        width={400}
                                        height={300}
                                        sizes="350px"
                                        className="w-full h-auto"
                                        ref={imageRef}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectList;
