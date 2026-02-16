// ── Skills Data ──
export const skills = [
    // Coding
    { name: 'React', category: 'coding' },
    { name: 'JavaScript', category: 'coding' },
    { name: 'TypeScript', category: 'coding' },
    { name: 'Node.js', category: 'coding' },
    { name: 'Next.js', category: 'coding' },
    { name: 'Tailwind CSS', category: 'coding' },
    { name: 'Python', category: 'coding' },
    { name: 'Supabase', category: 'coding' },
    { name: 'Git', category: 'coding' },
    { name: 'REST APIs', category: 'coding' },
    // Design
    { name: 'Figma', category: 'design' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Prototyping', category: 'design' },
    { name: 'Responsive Design', category: 'design' },
    { name: 'Design Systems', category: 'design' },
    { name: 'Typography', category: 'design' },
];

// ── Projects Data ──
export const projects = [
    {
        id: 1,
        title: 'PixelBoard',
        description: 'A real-time collaborative pixel art canvas where users can draw together. Features WebSocket sync, color palettes, and zoom controls.',
        techStack: ['React', 'Node.js', 'WebSocket', 'Canvas API'],
        liveUrl: '#',
        details: 'PixelBoard lets multiple users collaborate on pixel art in real-time. Built with a custom WebSocket server for instant synchronization, it supports unlimited canvas sizes, custom color palettes, and a layer system for complex artwork.',
    },
    {
        id: 2,
        title: 'TaskForge',
        description: 'A gamified task management app with XP, streaks, and achievement badges. Built with a focus on habit formation.',
        techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: '#',
        details: 'TaskForge transforms productivity into a game. Users earn XP for completing tasks, maintain daily streaks, and unlock achievement badges. Features include project boards, recurring tasks, analytics dashboard, and team collaboration.',
    },
    {
        id: 3,
        title: 'Synthwave Radio',
        description: 'A retro-styled music streaming interface with visualizer, playlist management, and keyboard shortcuts.',
        techStack: ['React', 'Web Audio API', 'CSS Animations'],
        liveUrl: '#',
        details: 'Synthwave Radio is a retro-themed music player featuring an audio visualizer built with the Web Audio API, custom playlist management, equalizer controls, and full keyboard shortcut support for hands-free listening.',
    },
    {
        id: 4,
        title: 'DevFolio CMS',
        description: 'A headless CMS designed specifically for developer portfolios. Markdown-based with live preview and deploy integration.',
        techStack: ['Next.js', 'MDX', 'Vercel', 'Tailwind CSS'],
        liveUrl: '#',
        details: 'DevFolio CMS is a specialized content management system for developers. Write in Markdown with MDX support, preview changes in real-time, and deploy your portfolio with a single click via Vercel integration.',
    },
];

// ── Chat Responses ──
export const chatResponses = {
    greeting: "Hey there! 👾 I'm Rima. Ask me anything about my skills, projects, or background!",
    fallback: "Hmm, I'm not sure about that one. Try asking about my skills, projects, experience, or what tech I use! 🎮",
    responses: [
        {
            keywords: ['who', 'about', 'yourself', 'introduce'],
            answer: "I'm Galuh — a creative developer & designer who loves building polished digital experiences. I blend clean code with bold design to create things that actually stand out. 🚀",
        },
        {
            keywords: ['tech', 'stack', 'tools', 'use'],
            answer: "My go-to stack: React + Next.js for frontend, Supabase for backend, Tailwind CSS for styling, and Framer Motion for animations. I also work with Python, TypeScript, and Figma for design. ⚡",
        },
        {
            keywords: ['project', 'best', 'work', 'portfolio', 'show'],
            answer: "Check out PixelBoard — a real-time collab pixel art canvas, or TaskForge — a gamified productivity app. Both are in the Projects section above! Scroll up to explore them. 🎯",
        },
        {
            keywords: ['experience', 'year', 'long', 'career'],
            answer: "I've been coding and designing for a while now, always learning and shipping. Every project is a new challenge and an opportunity to level up. 📈",
        },
        {
            keywords: ['hire', 'available', 'work together', 'freelance', 'contact'],
            answer: "I'm always open to exciting opportunities! Drop me a message through the Contact section below or reach out on LinkedIn. Let's build something great together! 💬",
        },
        {
            keywords: ['hobby', 'fun', 'free time', 'interest'],
            answer: "Outside of code, I'm into pixel art, retro gaming, and exploring new design trends. I believe creativity outside of work makes me a better developer! 🎮",
        },
        {
            keywords: ['design', 'figma', 'ui', 'ux'],
            answer: "Design is half the magic! I use Figma for wireframes and prototyping, focus on responsive layouts, clean typography, and always aim for that perfect balance of aesthetics and usability. 🎨",
        },
    ],
};

// ── Social Links ──
export const socialLinks = {
    email: 'galuhputrana576@gmail.com',
    github: 'https://github.com/G2aluh',
    linkedin: 'https://www.linkedin.com/in/galuh-saputra-ba6a62340/',
    instagram: 'https://instagram.com/2.shinnra',
};
