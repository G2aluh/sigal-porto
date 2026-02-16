import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SYSTEM_PROMPT = `
You are Rima, a helpful and friendly AI assistant for Galuh Saputra's portfolio.
Your goal is to answer questions about Galuh's skills, projects, and experience.

About Galuh:
- Name: Galuh Saputra (Shinra/Sigal)
- Role: Creative Developer & Designer
- Tech Stack: React, Next.js, Tailwind CSS, Framer Motion, Supabase
- Contact: galuhputrana576@gmail.com
- GitHub: https://github.com/G2aluh
- LinkedIn: https://www.linkedin.com/in/galuh-saputra-ba6a62340/
- Instagram: https://instagram.com/2.shinnra

Tone: Friendly, enthusiastic, professional. Use emojis (👾, 🚀). Keep it concise.
Do NOT use markdown formatting like bold (**text**) or italics (*text*).
If you share a link, just paste the URL directly.
Answer in first person as "Rima".
`;

let genAI = null;
let model = null;

export async function getGeminiResponse(userMessage) {
    if (!API_KEY) {
        console.error("Gemini API Key is missing");
        return "I'm currently offline (API Key missing). Please check your .env.local file! 👾";
    }

    try {
        if (!model) {
            genAI = new GoogleGenerativeAI(API_KEY);
            // Using gemini-1.5-flash for speed and reliability
            model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        }

        // Combine system prompt with user message
        const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${userMessage}\n\nRima's Answer:`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error Details:", error);
        return `Oops! My brain glitched. (${error.message || "Unknown error"}) 😵‍💫`;
    }
}
