import React from 'react';
export function Card({ children, fill = 'white', style, ...props }) {
  const fills = {
    white: { background: 'var(--nexos-bg-white)', color: 'var(--nexos-text-primary)', border: '1px solid var(--nexos-border)' },
    soft: { background: 'var(--nexos-blue-light)', color: 'var(--nexos-text-primary)', border: 'none' },
    blue: { background: 'var(--nexos-blue)', color: '#fff', border: 'none' },
    dark: { background: 'var(--nexos-bg-dark)', color: '#fff', border: 'none' },
    outline: { background: 'transparent', color: 'var(--nexos-blue)', border: '1px solid var(--nexos-blue)' },
    'outline-inverse': { background: 'transparent', color: '#fff', border: '1px solid #fff' },
  };
  return <div style={{ borderRadius: 'var(--radius-card)', padding: 24, ...fills[fill], ...style }} {...props}>{children}</div>;
}
