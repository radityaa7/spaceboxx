import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${dark ? 'text-sb-cyan' : 'text-sb-blue'}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`text-[28px] sm:text-[34px] lg:text-[44px] font-extrabold leading-[1.1] ${
            dark ? 'text-white' : 'text-sb-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className={`text-[15px] sm:text-base leading-relaxed ${dark ? 'text-white/65' : 'text-sb-ink-soft'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
