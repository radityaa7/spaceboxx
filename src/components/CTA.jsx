import Reveal from './Reveal';
import Button from './Button';

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 bg-sb-navy overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-sb-blue/25 blur-[130px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-sb-cyan/20 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sb-orange/10 blur-[110px]" />

      {/* Floating abstract shapes */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute top-16 left-[12%] h-14 w-14 rounded-2xl border border-white/10 bg-white/5 animate-float-slow" />
        <div className="absolute bottom-20 right-[14%] h-10 w-10 rounded-full border border-white/10 bg-white/5 animate-float-slower" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-[30px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.1] text-white">
            Let's Build Something 
            <br />
            Worth Remembering.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-6 text-[15px] sm:text-lg leading-relaxed text-white/65 max-w-xl mx-auto">
            Share your ideas, projects, or challenges. Let's explore what SPACEBOX can create together.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#contact" variant="primary">Start Project</Button>
            <Button href="#contact" variant="outlineLight" icon={false}>Contact Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
