import {motion} from 'motion/react';
import {portfolioData} from '../data/portfolioData';

export default function AboutSection() {
  const {about} = portfolioData;

  return (
    <section
      id="about"
      className="border-b border-zinc-200 bg-white py-20 transition-colors duration-200 dark:border-white/10 dark:bg-[#08080A] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative Column */}
          <motion.div
            initial={{opacity: 0, y: 14}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <p className="font-mono text-xs text-[#2449D8] dark:text-[#315BFF]">
              About
            </p>
            <h2
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#F5F5F5] sm:text-4xl"
              style={{textWrap: 'balance'}}
            >
              {about.heading}
            </h2>

            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-zinc-600 dark:text-[#A1A1AA] sm:text-base">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Storytelling Timeline Progression */}
          <motion.div
            initial={{opacity: 0, y: 14}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6"
          >
            <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200 dark:divide-white/10 dark:border-white/10">
              {about.narrativeStages.map((stage) => (
                <div
                  key={stage.step}
                  className="group grid grid-cols-[44px_1fr] gap-4 py-5 transition-colors duration-150"
                >
                  <span className="pt-1 font-mono text-xs font-semibold text-[#3F6212] dark:font-medium dark:text-[#C6FF3A] tabular-nums">
                    {stage.step}.
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#09090B] transition-colors group-hover:text-[#2449D8] dark:text-[#F5F5F5] dark:group-hover:text-[#315BFF]">
                      {stage.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A1A1AA]">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
