import { Palette, Cpu, PenTool } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[150px] pb-20 sm:pt-[170px] sm:pb-28 lg:pt-[190px] lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-sb-blue/20 blur-[110px] animate-pulse-glow" />
        <div className="absolute top-10 right-[-8%] h-[380px] w-[380px] rounded-full bg-sb-cyan/25 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[-10%] left-1/3 h-[300px] w-[300px] rounded-full bg-sb-orange/10 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left column */}
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-sb-blue-dark bg-sb-blue/8 border border-sb-blue/15 rounded-full px-4 py-2">
              Creative &bull; Electronics &bull; Design
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold leading-[1.06] tracking-tight text-sb-ink">
              Software designed and engineered.
              <br />
              with <span className="text-sb-blue">High Security System.</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-6 text-[15px] sm:text-lg leading-relaxed text-sb-ink-soft max-w-lg">
              We design and build custom software, websites, and digital products for ambitious companies 
              from first wireframe to production deployment with High Security System
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact" variant="primary">Start a Project</Button>
              <Button href="#services" variant="secondary" icon={false}>Explore Services</Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-12 flex items-center gap-8 sm:gap-10">
              {[
                ['1+', 'Year Company Starting'],
                ['5+', 'Project Done'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-sb-ink font-display">{num}</div>
                  <div className="text-xs text-sb-ink-soft mt-1 leading-snug max-w-[90px]">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — abstract isometric visual echoing the SPACEBOX cube mark */}
        <Reveal delay={2} className="relative h-[380px] sm:h-[440px] lg:h-[500px]">
          <div className="relative h-full w-full flex items-center justify-center">
            {/* Isometric cube outline (mirrors the logo's exploded cube) */}
            <svg
              viewBox="0 0 400 400"
              className="absolute w-[280px] sm:w-[340px] lg:w-[380px] h-auto animate-float-slow"
              aria-hidden="true"
            >
              <g fill="none" strokeLinejoin="round" strokeLinecap="round">
                <polygon points="200,40 340,115 200,190 60,115" fill="#1E7FD6" fillOpacity="0.12" stroke="#1E7FD6" strokeWidth="2.5" />
                <polygon points="60,115 200,190 200,340 60,265" fill="#0F5CA8" fillOpacity="0.14" stroke="#0F5CA8" strokeWidth="2.5" />
                <polygon points="340,115 200,190 200,340 340,265" fill="#6FD6E8" fillOpacity="0.16" stroke="#1E7FD6" strokeWidth="2.5" />
              </g>
            </svg>

            {/* Floating UI card — Creative */}
            <div className="absolute top-2 left-0 sm:left-4 bg-white/90 backdrop-blur-md border border-sb-border rounded-2xl shadow-sb-card px-4 py-3 flex items-center gap-3 animate-float-slower">
              <div className="h-9 w-9 rounded-lg bg-sb-orange/15 flex items-center justify-center text-sb-orange">
                <Palette size={18} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-sb-ink">Creative</div>
                <div className="text-[11px] text-sb-ink-soft">Design Studio</div>
              </div>
            </div>

            {/* Floating UI card — Electronics */}
            <div
              className="absolute bottom-6 left-2 sm:left-8 bg-white/90 backdrop-blur-md border border-sb-border rounded-2xl shadow-sb-card px-4 py-3 flex items-center gap-3 animate-float-slow"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="h-9 w-9 rounded-lg bg-sb-blue/12 flex items-center justify-center text-sb-blue">
                <Cpu size={18} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-sb-ink">Digital</div>
                <div className="text-[11px] text-sb-ink-soft">Software</div>
              </div>
            </div>

            {/* Floating UI card — Design */}
            <div
              className="absolute top-10 right-0 sm:right-6 bg-white/90 backdrop-blur-md border border-sb-border rounded-2xl shadow-sb-card px-4 py-3 flex items-center gap-3 animate-float-slower"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="h-9 w-9 rounded-lg bg-sb-cyan/20 flex items-center justify-center text-sb-blue-dark">
                <PenTool size={18} />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-sb-ink">Design</div>
                <div className="text-[11px] text-sb-ink-soft">UI/UX System</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
