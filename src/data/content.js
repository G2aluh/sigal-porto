// ── Skills Data ──
export const skills = [
    // Coding
    { name: 'React', category: 'coding' },
    { name: 'JavaScript', category: 'coding' },
    { name: 'TypeScript', category: 'coding' },
    { name: 'Node.js', category: 'coding' },
    { name: 'Next.js', category: 'coding' },
    { name: 'Tailwind CSS', category: 'coding' },
    { name: 'Supabase', category: 'coding' },
    { name: 'Git', category: 'coding' },
    { name: 'REST APIs', category: 'coding' },
    // Design
    { name: 'Figma', category: 'design' },
    { name: 'UI/UX Design', category: 'design' },
    { name: 'Prototyping', category: 'design' },
    { name: 'Poster Design', category: 'design' },
];

// ── Projects Data ──
export const projects = [
    {
        id: 1,
        title: 'Modern Portfolio',
        description: 'A real-time collaborative pixel art canvas where users can draw together. Features WebSocket sync, color palettes, and zoom controls.',
        techStack: ['React', 'Node.js', 'Gsap', 'Tailwind CSS'],
        liveUrl: 'https://shin2.vercel.app/',
        image: '/img/porto01.png',
        details: 'PixelBoard lets multiple users collaborate on pixel art in real-time. Built with a custom WebSocket server for instant synchronization, it supports unlimited canvas sizes, custom color palettes, and a layer system for complex artwork.',
    },
    {
        id: 2,
        title: 'Class Design XII RPL1 2026',
        description: 'A gamified task management app with XP, streaks, and achievement badges. Built with a focus on habit formation.',
        techStack: ['Affinity by Canva'],
        liveUrl: '#',
        image: '/img/AGIT-02.jpg',
        details: 'A poster design for a class event. Used warm color palettes and custom typography to evoke the holiday spirit, focusing on visual balance and thematic elements.',
    },
    {
        id: 3,
        title: 'Christmas',
        description: 'A Christmas-themed design for a poster.',
        techStack: ['Affinity by Canva'],
        liveUrl: '#',
        image: '/img/Nata-1.jpg',
        details: 'A festive and heartwarming poster design created for a Christmas event. Used warm color palettes and custom typography to evoke the holiday spirit, focusing on visual balance and thematic elements.',
    },

    {
        id: 4,
        title: 'Learn GFX poster',
        description: 'A poster design for a class event.',
        techStack: ['Affinity by Canva'],
        liveUrl: '#',
        image: '/img/Belajar-GFX-2-02.jpg',
        details: 'A promotional poster for a Graphic Design learning workshop. The layout directs attention to key information while showcasing modern design trends to inspire potential attendees.',
    },
    {
        id: 5,
        title: 'Framer Portofolio',
        description: 'A portofolio website made with framer.',
        techStack: ['Framer', 'No-Code'],
        liveUrl: 'https://breezy-staple-558700.framer.app/',
        image: '/img/framer01.png',
        details: 'A sleek and interactive portfolio built entirely in Framer. Features smooth transitions, scroll effects, and a responsive layout that showcases design work without writing a single line of code.',
    },
    {
        id: 6,
        title: 'Streakly',
        description: 'A dedicated streak tracking app to build habits.',
        techStack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
        liveUrl: 'https://streakly-todolist.vercel.app/',
        image: '/img/streakly.png',
        details: 'Streakly helps you build consistent habits by tracking daily streaks. Features include custom goal setting, progress visualization, and motivational reminders to keep you on track.',
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

// ── Profile Data ──
export const profile = {
    title: "PLAYER PROFILE",
    role: "Creative Developer",
    dob: "Desember 12, 2007", // Placeholder
    hobbies: ["Anime", "Hiking", "Gaming", "Coding", "Design"],
    laptop: "ASUS Vivobook 14 A1404 - A1404ZA",
    activeHours: "08:00 - 20:00",
    stats: [
        { label: "STR", value: 85, color: "bg-red-500" },
        { label: "INT", value: 92, color: "bg-blue-500" },
        { label: "DEX", value: 78, color: "bg-green-500" },
        { label: "LUCK", value: 60, color: "bg-yellow-500" },
    ]
};
