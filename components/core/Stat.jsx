import React from 'react';
export function Stat({ value, label }) {
  return <div style={{ fontFamily: 'var(--font-primary)' }}>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-stat)', fontWeight: 700, color: 'var(--nexos-blue)', lineHeight: 1.25 }}>{value}</div>
    {label && <div style={{ fontSize: 16, color: 'var(--nexos-text-primary)', marginTop: 8 }}>{label}</div>}
  </div>;
}
