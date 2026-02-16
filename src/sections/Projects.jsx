import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/content';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <SectionWrapper id="projects">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                </div>
                <h2 className="font-pixel text-lg sm:text-xl text-yellow-400">PROJECTS</h2>
                <div className="flex-1 h-px bg-dark-600" />
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        data-cursor-hover
                        className="group border border-dark-600 hover:border-yellow-400/40 bg-dark-800/50 overflow-hidden transition-colors"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Card header */}
                        <div className="p-5 sm:p-6">
                            {/* Title row */}
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-400 shrink-0" />
                                    <h3 className="font-pixel text-xs sm:text-sm text-white">{project.title}</h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[11px] text-gray-500 bg-dark-700 px-2 py-1 border border-dark-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="flex-1 bg-yellow-400 text-dark-900 py-2.5 text-center font-bold hover:bg-yellow-500 transition-colors"
                                >
                                    <span className="font-pixel text-[9px]">PREVIEW FULL</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </SectionWrapper>
    );
}
