import React from 'react';
export function IconCircle({ children, size = 56, color = 'var(--nexos-blue)' }) {
  return <div style={{ width: size, height: size, borderRadius: '50%', border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color, fontSize: size * 0.4, fontFamily: 'var(--font-primary)', fontWeight: 700 }}>{children}</div>;
}
