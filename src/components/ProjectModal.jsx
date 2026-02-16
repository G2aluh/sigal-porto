import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload } from 'react-icons/hi';

export default function ProjectModal({ project, onClose }) {
    // Ensure the modal is removed from DOM when not active
    // But AnimatePresence handles the exit animation, so we conditionally render inside it in parent
    // However, the pattern here seems to be parent renders <ProjectModal /> always?
    // No, the parent usually does {selectedProject && <ProjectModal ... />}
    // Let's assume standard pattern.

    if (!project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    className="relative w-full max-w-3xl bg-dark-800 border border-dark-600 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-dark-600 bg-dark-800 shrink-0 z-10">
                        <h3 className="font-pixel text-lg sm:text-xl text-yellow-400 truncate pr-4">
                            {project.title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-dark-700/50 rounded"
                        >
                            <HiX size={24} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto p-0">
                        {/* Full Image */}
                        {project.image && (
                            <div className="w-full bg-dark-900 border-b border-dark-600">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-contain max-h-[500px] mx-auto"
                                />
                            </div>
                        )}

                        {/* Details Body */}
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <h4 className="font-pixel text-xs text-yellow-400 tracking-wider">ABOUT THE PROJECT</h4>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {project.details}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="font-pixel text-xs text-yellow-400 tracking-wider mb-3">TECH STACK</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono bg-dark-700 text-yellow-400/80 px-3 py-1.5 border border-dark-600 rounded-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-dark-600 bg-dark-800 shrink-0 flex gap-3 justify-end items-center">
                        {project.image && (
                            <a
                                href={project.image}
                                download
                                className="mr-auto text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 text-xs font-pixel group"
                                title="Download Image"
                            >
                                <HiDownload size={16} className="group-hover:animate-bounce" />
                                <span className="hidden sm:inline">DOWNLOAD IMG</span>
                            </a>
                        )}

                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-400 text-dark-900 px-6 py-2 font-pixel text-xs hover:bg-yellow-500 transition-colors flex items-center"
                            >
                                LIVE DEMO
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="border border-dark-600 text-gray-300 px-6 py-2 font-pixel text-xs hover:bg-dark-700 transition-colors"
                        >
                            CLOSE
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
