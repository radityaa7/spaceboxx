import { Quote, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="What our Client says." align="center" className="max-w-2xl" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 6) + 1}>
              <div className="h-full flex flex-col bg-white border border-sb-border rounded-2xl p-7 shadow-sb-card transition-all duration-300 hover:-translate-y-1 hover:shadow-sb-card-hover">
                <Quote size={26} className="text-sb-blue/25" />
                <div className="mt-4 flex gap-0.5 text-sb-orange">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-sb-ink flex-1">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sb-blue/10 text-sb-blue-dark flex items-center justify-center text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-sb-ink">{t.name}</div>
                    <div className="text-xs text-sb-ink-soft">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
