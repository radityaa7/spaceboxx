import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-sb-blue text-white hover:bg-sb-blue-dark shadow-[0_10px_24px_-8px_rgba(30,127,214,0.55)] hover:shadow-[0_14px_28px_-8px_rgba(30,127,214,0.65)]',
  secondary:
    'bg-white text-sb-ink border border-sb-border hover:border-sb-blue hover:text-sb-blue',
  dark:
    'bg-white text-sb-navy hover:bg-sb-cyan/90',
  outlineLight:
    'bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5',
};

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon = true,
  className = '',
  as,
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
