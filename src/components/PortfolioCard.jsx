import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export default function PortfolioCard({ project, delay = 1 }) {
  const hasImage = Boolean(project.image);

  return (
    <Reveal delay={delay}>
      <a href="#contact" className="group block">
        <div className={`relative h-56 sm:h-64 rounded-2xl overflow-hidden ${hasImage ? 'bg-sb-navy' : `bg-gradient-to-br ${project.accent}`}`}>
          {hasImage ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sb-navy/50 via-sb-navy/0 to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 opacity-90 grid-pattern-dark mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-3/5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-transform duration-500 group-hover:scale-[1.04] flex flex-col p-4 gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/50" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                  </div>
                  <div className="mt-2 h-2 w-2/3 rounded bg-white/40" />
                  <div className="h-2 w-1/2 rounded bg-white/25" />
                  <div className="mt-auto h-8 w-1/3 rounded-md bg-white/25" />
                </div>
              </div>
            </>
          )}

          <div className="absolute inset-0 bg-sb-navy/0 group-hover:bg-sb-navy/10 transition-colors duration-300" />
          <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 flex items-center justify-center text-sb-ink transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-4">
          <span className="eyebrow text-sb-blue">{project.category}</span>
          <h3 className="mt-1.5 text-lg font-bold text-sb-ink">{project.title}</h3>
          <p className="mt-1.5 text-sm text-sb-ink-soft leading-relaxed">{project.description}</p>
        </div>
      </a>
    </Reveal>
  );
}