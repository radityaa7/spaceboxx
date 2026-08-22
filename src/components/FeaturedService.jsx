import { Check } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';

const bullets = [
  'Creative Strategy',
  'Product Design',
  'Software Development',
  'System Security',
  'Modern Websites',
  'Technical Support',
];

export default function FeaturedService() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative order-2 lg:order-1 h-[320px] sm:h-[380px] lg:h-[440px] rounded-3xl bg-sb-navy overflow-hidden">
          <div className="absolute inset-0 grid-pattern-dark opacity-70" />
          <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-sb-blue/30 blur-[90px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-sb-cyan/20 blur-[100px]" />

          {/* Abstract interface panels */}
          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-sm space-y-3">
              <div className="h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center px-4 gap-2">
                <span className="h-2 w-2 rounded-full bg-sb-orange" />
                <span className="h-2 w-2 rounded-full bg-sb-cyan" />
                <span className="h-2 w-2 rounded-full bg-sb-blue-light" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 h-24 rounded-lg bg-white/[0.06] border border-white/10 p-3">
                  <div className="h-2 w-2/3 rounded bg-sb-blue-light/50 mb-2" />
                  <div className="h-2 w-1/2 rounded bg-white/15 mb-2" />
                  <div className="h-2 w-3/4 rounded bg-white/15" />
                </div>
                <div className="h-24 rounded-lg bg-gradient-to-br from-sb-blue to-sb-cyan/70 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full border-2 border-white/60" />
                </div>
              </div>
              <div className="h-16 rounded-lg bg-white/[0.06] border border-white/10 p-3 flex items-end gap-1.5">
                {[40, 65, 30, 80, 55, 90, 45].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-sb-blue-light/60" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow text-sb-blue">Featured Capability</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.14] text-sb-ink">
              Technology designed around your goals.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-sb-ink-soft max-w-lg">
              From websites and WordPress to software development, we combine creative thinking, 
              modern technology, and a strong focus on system security.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <ul className="mt-7 grid grid-cols-2 gap-3.5 max-w-md">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-sb-ink">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sb-blue/10 text-sb-blue">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-9">
              <Button href="#contact" variant="primary">Start your project</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
