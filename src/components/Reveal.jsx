import useReveal from '../hooks/useReveal';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, isVisible] = useReveal();
  const delayClass = delay ? `reveal-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
