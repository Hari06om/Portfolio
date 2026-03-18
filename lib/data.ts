import { IProject, ICertificate, IAchievement } from '@/types';

export const GENERAL_INFO = {
    email: 'hariohmverma96@gmail.com',
    phone: '+91 9369403005',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Hariom, I am reaching out to you because...',

    oldPortfolio: 'hariom.netfile.com',
    upworkProfile: 'https://www.linkedin.com/in/hari-om-verma20/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Hari06om' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/hari-om-verma20/' },
    { name: 'leetcode', url: 'https://leetcode.com/Hariom06/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Sass', icon: '/logo/sass.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'TalentIQ',
        slug: 'talent-iq',
        liveUrl: 'https://talentiq.com/',
        sourceCode: 'https://github.com/Hari06om/talent-IQ.git',
        year: 2026,
        description: `
A full-stack technical interview platform with 15+ features including a VSCode-powered code editor, JWT authentication, real-time chat, and 1-on-1 video rooms with screen sharing and recording.<br/><br/>
<ul>
  <li>Architected a VSCode-powered in-browser code editor with multi-language support and isolated code execution engine with automated test-case evaluation.</li>
  <li>Engineered instant visual feedback (confetti on success, toast on failure) and a dedicated solo practice problems module.</li>
  <li>Optimized server-state management using TanStack Query, reducing redundant API calls by ~40%, and maintained codebase quality across 3+ branches via Git/GitHub integrated with CodeRabbit AI for automated PR reviews.</li>
</ul>`,
        role: `Full-Stack Developer — owned the entire development lifecycle including backend REST API, JWT auth, frontend UI, WebRTC video rooms, and deployment on Sevalla.`,
        techStack: [
            'React',
            'Node.js',
            'Express.js',
            'MongoDB',
            'JWT',
            'WebRTC',
            'Stream SDK',
            'TanStack Query',
            'DaisyUI',
            'Tailwind CSS',
            'CodeRabbit',
        ],
        thumbnail: '/projects/thumbnail/talent-iq.png',
        longThumbnail: '/projects/long/talent-iq.png',
        images: [
            '/projects/images/talent1.png',
            '/projects/images/talent2.png',
        ],
    },
    {
        title: 'Nutrition Tracker',
        slug: 'nutrition-tracker',
        sourceCode: 'https://github.com/Hari06om',
        year: 2025,
        description: `
A comprehensive Android nutrition tracking app with customizable calorie/protein goals, real-time progress visualization, and quick-add functionality supporting seamless daily intake logging.<br/><br/>
<ul>
  <li>Implemented Shared Preferences for persistent data storage, custom progress bars with Material CardViews, long-press gesture support, and robust input validation across API levels 24–36.</li>
  <li>Built a clean UI with View Binding, Activity lifecycle management, and Constraint Layout, reducing boilerplate code and improving rendering performance across 10+ Android device configurations.</li>
</ul>`,
        role: `Sole developer — designed and built the entire Android app from scratch using Kotlin and Android SDK.`,
        techStack: [
            'Kotlin',
            'Android SDK',
            'Material Components',
            'Constraint Layout',
            'View Binding',
            'Shared Preferences',
        ],
        thumbnail: '/projects/images/nutrition.jpeg',
        longThumbnail: '/projects/images/nutrition.jpeg',
        images: [
            '/projects/images/nutrition1.jpeg',
            '/projects/images/nutrition2.jpeg',
            '/projects/images/nutrition3.jpeg',
        ],
    },
    {
        title: 'Fruit Selling Website',
        slug: 'fruit-selling',
        sourceCode: 'https://github.com/Hari06om/FruitSelling.git',
        liveUrl: 'https://fruits00main.netlify.app/',
        year: 2024,
        description: `
A multi-page fruit and vegetable e-commerce website covering homepage, shop, product detail, cart, checkout, login, and contact modules.<br/><br/>
<ul>
  <li>Designed clean and interactive UI components including carousels, search modal, category filters, and product grids, enhancing visual structure and improving overall user navigation experience.</li>
  <li>Integrated Owl Carousel, Lightbox, and Font Awesome for a polished, production-ready interface with structured product layouts, testimonials, and cart summaries.</li>
</ul>`,
        role: `Sole developer — built all pages and UI components from scratch.`,
        techStack: [
            'HTML5',
            'CSS3',
            'Bootstrap 5',
            'JavaScript',
            'Font Awesome',
            'Lightbox',
            'Owl Carousel',
        ],
        thumbnail: '/projects/thumbnail/Fruit.png',
        longThumbnail: '/projects/long/Fruit.png',
        images: [
            '/projects/images/fruits1.png',
            '/projects/images/fruits2.png',
            '/projects/images/fruits3.png',
        ],
    },
    {
        title: 'Personal Finance Manager',
        slug: 'personal-finance',
        sourceCode: 'https://github.com/Hari06om/Personal-Finance-Manager.git',
        year: 2024,
        description: `
A Java Swing-based desktop finance application with 3 core modules — Transactions, Budgets, and Reports — integrating 6 real-time financial indicators.<br/><br/>
<ul>
  <li>Configured a real-time dashboard tracking 6 key financial metrics with dynamic updates triggered after every transaction, enabling instant financial visibility.</li>
  <li>Mastered robust transaction management handling 100+ entries with full CRUD operations and localized Indian Rupee (₹) currency formatting, improving financial data organization by 60%.</li>
</ul>`,
        role: `Sole developer — designed and built the desktop app using Java Swing and OOP design patterns.`,
        techStack: [
            'Java',
            'Java Swing',
            'AWT',
            'OOP Design Patterns',
            'File Handling',
        ],
        thumbnail: '/projects/thumbnail/dashboard.png',
        longThumbnail: '/projects/long/dashboard.png',
        images: [
            '/projects/images/dashboard.png',
            '/projects/images/budget.png',
            '/projects/images/reports.png',
            '/projects/images/transactions.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Frontend)',
        company: 'Campuss Buzz',
        duration: 'Jan 2026 - Present',
    },
    {
        title: 'Fullstack Developer',
        company: 'Vernatalab',
        duration: 'Oct 2025 - Present',
    },
];

export const MY_CERTIFICATES: ICertificate[] = [
    {
        title: 'Completion of Cloud Computing',
        issuer: 'NPTEL',
        date: 'Apr 2025',
        thumbnail: '/projects/certificates/nptel.jpg',
    },
    {
        title: 'Java Maestro',
        issuer: 'LPU',
        date: 'Jul 2025',
        thumbnail: '/projects/certificates/java_maestro.jpg',
    },
    {
        title: 'Completion of Java + DSA',
        issuer: 'NeoColab',
        date: 'Dec 2024',
        thumbnail: '/projects/certificates/dsa.jpg',
    },
    {
        title: 'Master Generative AI',
        issuer: 'Udemy',
        date: 'Aug 2025',
        thumbnail: '/projects/certificates/generative_ai.jpg',
    },
];

export const MY_ACHIEVEMENTS: IAchievement[] = [
    {
        title: '250+ LeetCode Problems Solved',
        platform: 'LeetCode',
        description:
            'Solved 250+ LeetCode problems, earning 5 badges and demonstrating strong algorithmic problem-solving skills.',
        date: 'Mar 2026',
        link: 'https://leetcode.com/u/Hariom06/',
    },
    {
        title: '7 Badges on LeetCode',
        platform: 'LeetCode',
        description:
            'Achieved 7 badges on LeetCode across multiple domains and competitive programming challenges.',
        date: 'Mar 2026',
        link: 'https://leetcode.com/u/Hariom06/',
    },
    {
        title: '4 Badges on HackerRank',
        platform: 'HackerRank',
        description:
            'Achieved 4 badges on HackerRank across multiple domains and competitive programming challenges.',
        date: 'Jan 2026',
        link: 'https://www.hackerrank.com/',
    },
    {
        title: '3 Badges on Github',
        platform: 'GitHub',
        description:
            'Earned three GitHub badges through active contributions across various domains and successful participation in competitive programming challenges.',
        date: 'Dec 2025',
        link: 'https://github.com/Hari06om',
    },
];
