import {
  ArrowRight,
  Palette,
  PenTool,
  Globe,
  Code2,
  Cpu,
  Boxes,
  Sparkles,
  LifeBuoy,
} from 'lucide-react';
import Reveal from './Reveal';

const iconMap = { Palette, PenTool, Globe, Code2, Cpu, Boxes, Sparkles, LifeBuoy };

export default function ServiceCard({ service, delay = 1 }) {
  const Icon = iconMap[service.icon] || Boxes;

  return (
    <Reveal delay={delay}>
      <div className="group h-full flex flex-col bg-white border border-sb-border rounded-2xl p-6 sm:p-7 shadow-sb-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sb-blue/50 hover:shadow-sb-card-hover">
        <div className="flex items-start justify-between">
          <div className="h-12 w-12 rounded-xl bg-sb-blue/8 flex items-center justify-center text-sb-blue transition-colors duration-300 group-hover:bg-sb-blue group-hover:text-white">
            <Icon size={22} />
          </div>
          <span className="text-xs font-bold text-sb-ink/20 font-display">{service.number}</span>
        </div>

        <h3 className="mt-5 text-lg font-bold text-sb-ink leading-snug">{service.title}</h3>
        <p className="mt-2.5 text-sm text-sb-ink-soft leading-relaxed flex-1">{service.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-sb-ink-soft bg-sb-bg-2 border border-sb-border rounded-full px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sb-blue"
        >
          Learn More
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </Reveal>
  );
}
