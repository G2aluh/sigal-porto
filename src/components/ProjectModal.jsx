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
                    className="relative w-full max-w-3xl pixel-card overflow-hidden flex flex-col max-h-[90vh]"
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                >
                    {/* Header - Retro Title Bar */}
                    <div className="flex items-center justify-between p-3 border-b-4 border-dark-900 bg-yellow-400 shrink-0 z-10">
                        <h3 className="font-pixel text-xs sm:text-sm text-dark-900 truncate pr-4">
                            {project.title}
                        </h3>
                        <button
                            onClick={onClose}
                            className="text-dark-900 hover:text-white hover:bg-dark-900 transition-colors p-1"
                        >
                            <HiX size={20} />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto p-0 bg-dark-800">
                        {/* Full Image */}
                        {project.image && (
                            <div className="w-full bg-dark-900 border-b-4 border-dark-900 p-2">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-contain max-h-[500px] mx-auto pixel-border-sm"
                                />
                            </div>
                        )}

                        {/* Details Body */}
                        <div className="p-6 space-y-6">
                            <div className="space-y-4">
                                <h4 className="font-pixel text-xs text-yellow-400 tracking-wider border-b-2 border-dark-600 pb-2 inline-block">
                                    ABOUT THE PROJECT
                                </h4>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-mono">
                                    {project.details}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="font-pixel text-xs text-yellow-400 tracking-wider mb-4 border-b-2 border-dark-600 pb-2 inline-block">
                                    TECH STACK
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-pixel text-dark-900 bg-gray-400 px-2 py-1"
                                            style={{
                                                boxShadow: '2px 2px 0px 0px #000'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t-4 border-dark-900 bg-dark-700 shrink-0 flex flex-wrap gap-3 justify-end items-center">
                        {project.image && (
                            <a
                                href={project.image}
                                download
                                className="mr-auto text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2 text-xs font-pixel group pixel-btn pixel-btn-dark"
                                title="Download Image"
                            >
                                <HiDownload size={16} />
                                <span className="hidden sm:inline">SAVE IMAGE</span>
                            </a>
                        )}

                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pixel-btn pixel-btn-yellow text-dark-900"
                            >
                                LIVE DEMO
                            </a>
                        )}
                        <button
                            onClick={onClose}
                            className="pixel-btn pixel-btn-dark"
                        >
                            CLOSE
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
