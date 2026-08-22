import { Lightbulb, Cpu, PenTool, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const cards = [
  {
    icon: Lightbulb,
    title: 'CREATIVE',
    description: 'Transforming ideas into meaningful visual experiences.',
    accent: 'text-sb-orange bg-sb-orange/12',
  },
  {
    icon: Cpu,
    title: 'TECHNOLOGY',
    description: 'Building practical and scalable digital solutions .',
    accent: 'text-sb-blue bg-sb-blue/10',
  },
  {
    icon: PenTool,
    title: 'DESIGN',
    description: 'Creating products and interfaces that are intuitive and comfortable to use.',
    accent: 'text-sb-blue-dark bg-sb-cyan/20',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal>
            <span className="eyebrow text-sb-blue">About SPACEBOX</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.12] text-sb-ink">
              A studio built for teams who care about the details.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-sb-ink-soft">
              SpaceBox is a creative technology studio that combines design, technology, 
              system security, and digital development to help businesses
              build better products and experiences.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-sb-ink-soft">
              We work across the entire journeyfrom idea exploration and design to development and 
              implementation ensuring that every solution strikes the right balance between 
              functionality, aesthetics, modern technology, and system security.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <a
              href="#services"
              className="link-underline mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sb-blue"
            >
              Discover our approach
              <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={(i % 4) + 1}
              className={i === 0 ? 'sm:col-span-2' : ''}
            >
              <div className="group h-full bg-white border border-sb-border rounded-2xl p-6 shadow-sb-card transition-all duration-300 hover:-translate-y-1 hover:border-sb-blue/40 hover:shadow-sb-card-hover">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${card.accent} transition-transform duration-300 group-hover:scale-105`}>
                  <card.icon size={20} />
                </div>
                <h3 className="mt-5 text-xs font-bold tracking-wider text-sb-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-sb-ink-soft leading-relaxed">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
