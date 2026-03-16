// 'use client';

// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

// gsap.registerPlugin(useGSAP);

// export default function Template({ children }: { children: React.ReactNode }) {
//     useGSAP(() => {
//         const tl = gsap.timeline();

//         tl.to('.page-transition--inner', {
//             yPercent: 0,
//             duration: 0.2,
//         })
//             .to('.page-transition--inner', {
//                 yPercent: -100,
//                 duration: 0.2,
//             })
//             .to('.page-transition', {
//                 yPercent: -100,
//             });
//     });

//     return (
//         <div>
//             <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
//                 <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
//             </div>

//             {children}
//         </div>
//     );
// }

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        gsap.set('.page-transition--inner', {
            yPercent: 100, // initial state (same as translate-y-full)
        });

        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.3,
            ease: 'power2.out',
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.3,
                ease: 'power2.in',
            })
            .to('.page-transition', {
                yPercent: -100,
                duration: 0.3,
            });
    }, []);

    return (
        <div>
            <div className="page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]">
                <div className="page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5]"></div>
            </div>

            {children}
        </div>
    );
}
