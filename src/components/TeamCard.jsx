import { useState } from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';
import Reveal from './Reveal';

const accents = [
  'from-sb-blue to-sb-cyan',
  'from-sb-blue-dark to-sb-blue',
  'from-sb-navy to-sb-blue',
];

export default function TeamCard({ member, delay = 1, accentIndex = 0 }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = member.photo && !imgError;

  return (
    <Reveal delay={delay}>
      <div className="group h-full flex flex-col bg-white border border-sb-border rounded-2xl overflow-hidden shadow-sb-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sb-blue/40 hover:shadow-sb-card-hover">
        <div className={`relative h-48 sm:h-56 flex items-center justify-center overflow-hidden bg-gradient-to-br ${accents[accentIndex % accents.length]}`}>
          {showPhoto ? (
            <img
              src={member.photo}
              alt={member.name}
              onError={() => setImgError(true)}
              className="h-full w-fit justify-center object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 grid-pattern-dark opacity-40 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-extrabold text-white/90 font-display tracking-tight">
                  {member.initials}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-lg font-bold text-sb-ink">{member.name}</h3>
          <p className="mt-1 text-sm font-semibold text-sb-blue">{member.role}</p>
          <p className="mt-3 text-sm text-sb-ink-soft leading-relaxed flex-1">{member.bio}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {member.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-sb-ink-soft bg-sb-bg-2 border border-sb-border rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2.5 pt-4 border-t border-sb-border">
            <a
              href="#contact"
              aria-label={`Hubungi ${member.name} via email`}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-sb-border text-sb-ink-soft transition-all duration-300 hover:border-sb-blue hover:text-sb-blue hover:bg-sb-blue/8"
            >
              <Mail size={15} />
            </a>
            <a
              href="#"
              aria-label={`LinkedIn ${member.name}`}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-sb-border text-sb-ink-soft transition-all duration-300 hover:border-sb-blue hover:text-sb-blue hover:bg-sb-blue/8"
            >
              <LinkedinIcon width={15} height={15} />
            </a>
            <a
              href="#"
              aria-label={`Instagram ${member.name}`}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-sb-border text-sb-ink-soft transition-all duration-300 hover:border-sb-blue hover:text-sb-blue hover:bg-sb-blue/8"
            >
              <InstagramIcon width={15} height={15} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
