const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function GithubBrandIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.45.53-2.97-1.05-2.97-1.05-.4-1.02-1-1.29-1-1.29-.8-.56.06-.55.06-.55.9.06 1.37.93 1.37.93.8 1.36 2.1.97 2.6.74.08-.58.31-.97.57-1.19-1.96-.22-4.02-.98-4.02-4.36 0-.96.35-1.75.92-2.37-.1-.22-.4-1.13.09-2.36 0 0 .75-.24 2.45.9a8.5 8.5 0 0 1 4.46 0c1.7-1.14 2.45-.9 2.45-.9.49 1.23.19 2.14.09 2.36.57.62.92 1.41.92 2.37 0 3.39-2.07 4.13-4.04 4.35.32.28.6.82.6 1.65v2.45c0 .23.15.51.61.43A9 9 0 0 0 12 3z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 8.5h2V5.6c-.35-.05-1.55-.15-2.4-.15-2.37 0-4 1.45-4 4.11V12H7v3h2.6v6h3V15H15l.45-3h-2.85v-2.1c0-.87.23-1.4 1.4-1.4z" />
    </svg>
  );
}
