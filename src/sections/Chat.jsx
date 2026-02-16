import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import { getGeminiResponse } from '../services/gemini';

export default function Chat() {
    const [messages, setMessages] = useState([
        { role: 'ai', text: "Hey there! 👾 I'm Rima. Ask me anything about Galuh, his projects, or tech stack!" },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        const userMsg = { role: 'user', text: trimmed };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const responseText = await getGeminiResponse(trimmed);
            const aiMsg = { role: 'ai', text: responseText };
            setMessages((prev) => [...prev, aiMsg]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: 'ai', text: "Connection error... 🔌 Try again?" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const suggestedQuestions = [
        'Who is Galuh?',
        'What is Rima?',
        'What tech stack does he use?',
    ];

    return (
        <SectionWrapper id="chat">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                </div>
                <h2 className="font-pixel text-lg sm:text-xl text-yellow-400">AI CHAT</h2>
                <div className="flex-1 h-px bg-dark-600" />
            </div>

            <p className="text-gray-400 text-sm mb-6">
                Chat with Rima (my AI persona) to learn more about my work. She's powered by Google Gemini! 💎
            </p>

            {/* Chat container */}
            <div className="border border-dark-600 bg-dark-800/50 overflow-hidden w-full md:max-w-2xl md:mx-auto">
                {/* Chat header bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-dark-600 bg-dark-800">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span className="font-pixel text-[10px] text-gray-400">RIMA.AI</span>
                    <span className="text-[10px] text-gray-600 ml-auto">powered by Gemini ✨</span>
                </div>

                {/* Messages */}
                <div
                    ref={scrollRef}
                    className="h-80 overflow-y-auto p-4 space-y-4 chat-scroll"
                >
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-yellow-400 text-dark-900 ml-4'
                                    : 'bg-dark-700 text-gray-300 border border-dark-600 mr-4'
                                    }`}
                            >
                                {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, j) =>
                                    part.match(/https?:\/\/[^\s]+/) ? (
                                        <a
                                            key={j}
                                            href={part}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-yellow-400 underline hover:text-yellow-300 break-all"
                                        >
                                            {part}
                                        </a>
                                    ) : (
                                        <span key={j}>{part.replace(/\*\*/g, '')}</span>
                                    )
                                )}
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-dark-700 border border-dark-600 px-4 py-3 mr-4">
                                <div className="flex gap-1">
                                    <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                                    <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                                    <motion.div className="w-1.5 h-1.5 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Suggested questions */}
                {messages.length <= 1 && (
                    <div className="px-4 pb-3 flex flex-wrap gap-2">
                        {suggestedQuestions.map((q) => (
                            <button
                                key={q}
                                onClick={() => {
                                    setInput(q);
                                    // Allow state to update then trigger send
                                    setTimeout(() => {
                                        // Start process manually to ensure proper state flow
                                        const userMsg = { role: 'user', text: q };
                                        setMessages((prev) => [...prev, userMsg]);
                                        setInput('');
                                        setIsLoading(true);
                                        getGeminiResponse(q).then(res => {
                                            setMessages(prev => [...prev, { role: 'ai', text: res }]);
                                            setIsLoading(false);
                                        });
                                    }, 0);
                                }}
                                className="text-[11px] text-gray-400 border border-dark-600 px-3 py-1.5 hover:border-yellow-400/50 hover:text-yellow-400 transition-colors"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input bar */}
                <div className="flex items-center gap-2 p-3 border-t border-dark-600 bg-dark-800">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask Rima anything..."
                        disabled={isLoading}
                        className="flex-1 bg-dark-700 border border-dark-600 text-white text-sm px-4 py-2.5 placeholder-gray-600 focus:outline-none focus:border-yellow-400/50 transition-colors disabled:opacity-50"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="bg-yellow-400 text-dark-900 p-2.5 hover:bg-yellow-500 transition-colors disabled:opacity-40 disabled:hover:bg-yellow-400"
                        aria-label="Send message"
                    >
                        <HiPaperAirplane size={18} className="rotate-90" />
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
}
