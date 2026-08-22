import { process } from '../data/process';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28 lg:py-32 bg-sb-navy overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute top-0 left-1/4 h-72 w-72 rounded-full bg-sb-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-sb-cyan/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="eyebrow text-sb-cyan">Our Process</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.1] text-white max-w-xl">
            From idea to execution.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-white/60 max-w-xl">
           Every project follows a clear process designed to 
           transform ideas into practical and meaningful results.
          </p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block mt-20 relative">
          <div className="absolute top-5 left-0 right-0 h-px bg-white/10" />
          <div className="grid grid-cols-6 gap-6">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={(i % 6) + 1}>
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-sb-navy-2 border border-sb-blue/40 flex items-center justify-center text-xs font-bold text-sb-cyan relative z-10">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="lg:hidden mt-14 relative pl-6">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-9">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={(i % 6) + 1} className="relative pl-8">
                <div className="absolute -left-[7px] top-0 h-9 w-9 rounded-full bg-sb-navy-2 border border-sb-blue/40 flex items-center justify-center text-xs font-bold text-sb-cyan">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
