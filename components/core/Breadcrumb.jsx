import React from 'react';
export function Breadcrumb({ children }) {
  return <div style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--text-caption)', color: 'var(--nexos-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>{children}</div>;
}
