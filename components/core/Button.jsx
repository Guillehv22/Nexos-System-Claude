import React from 'react';
export function Button({ children, variant = 'primary', size = 'md', ...props }) {
  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px';
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 17 : 15;
  const base = {
    fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize, padding: pad,
    borderRadius: 999, border: 'none', cursor: 'pointer', display: 'inline-flex',
    alignItems: 'center', gap: 8, transition: 'opacity .15s ease',
  };
  const variants = {
    primary: { background: 'var(--nexos-blue)', color: '#fff' },
    secondary: { background: 'var(--nexos-bg-light)', color: 'var(--nexos-text-primary)' },
    ghost: { background: 'transparent', color: 'var(--nexos-blue)', border: '1px solid var(--nexos-blue)' },
    dark: { background: 'var(--nexos-bg-dark)', color: '#fff' },
  };
  return <button style={{ ...base, ...variants[variant] }} onMouseOver={e => e.currentTarget.style.opacity = '0.85'} onMouseOut={e => e.currentTarget.style.opacity = '1'} {...props}>{children}</button>;
}
