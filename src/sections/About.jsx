import SectionWrapper from '../components/SectionWrapper';

export default function About() {
    return (
        <SectionWrapper id="about">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                    <div className="w-2 h-2 bg-yellow-400" />
                </div>
                <h2 className="font-pixel text-lg sm:text-xl text-yellow-400">ABOUT</h2>
                <div className="flex-1 h-px bg-dark-600" />
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Main bio */}
                <div className="md:col-span-3 space-y-6">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        Hey, I&apos;m <span className="text-yellow-400 font-semibold">Galuh Saputra</span> — a developer and designer
                        who thrives at the intersection of code and creativity. I build digital products
                        that are not only functional but feel alive and intentional.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        I believe great software starts with empathy — understanding the people who
                        use it and the problems it solves. Whether it&apos;s crafting responsive interfaces,
                        architecting scalable backends, or obsessing over micro-interactions, I bring
                        attention to detail and a creative mindset to everything I ship.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                        My approach combines modern engineering practices with bold design thinking.
                        I&apos;m always learning, always building, and always pushing for that extra
                        pixel of perfection.
                    </p>
                </div>

                {/* Stats / highlights */}
                <div className="md:col-span-2 space-y-4">
                    <div className="border border-dark-600 p-5 hover:border-yellow-400/30 transition-colors">
                        <div className="font-pixel text-yellow-400 text-sm mb-2">01</div>
                        <h3 className="text-white font-semibold mb-1">Problem Solver</h3>
                        <p className="text-gray-400 text-sm">Breaking complex challenges into elegant, scalable solutions.</p>
                    </div>
                    <div className="border border-dark-600 p-5 hover:border-yellow-400/30 transition-colors">
                        <div className="font-pixel text-yellow-400 text-sm mb-2">02</div>
                        <h3 className="text-white font-semibold mb-1">Design-Driven</h3>
                        <p className="text-gray-400 text-sm">Merging aesthetics with usability for impactful user experiences.</p>
                    </div>
                    <div className="border border-dark-600 p-5 hover:border-yellow-400/30 transition-colors">
                        <div className="font-pixel text-yellow-400 text-sm mb-2">03</div>
                        <h3 className="text-white font-semibold mb-1">Always Shipping</h3>
                        <p className="text-gray-400 text-sm">From idea to deployment — I build fast and iterate constantly.</p>
                    </div>
                </div>
            </div>

            {/* Pixel divider */}
            <div className="flex gap-1 mt-16 justify-center">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-dark-600" />
                ))}
            </div>
        </SectionWrapper>
    );
}
