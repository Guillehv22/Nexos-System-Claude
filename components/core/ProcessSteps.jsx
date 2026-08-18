import React from 'react';
export function ProcessSteps({ steps }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-primary)' }}>
    {steps.map((s, i) => <React.Fragment key={i}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--nexos-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700 }}>{i + 1}</div>
      {i < steps.length - 1 && <span style={{ color: 'var(--nexos-blue)', fontSize: 22 }}>&#8594;</span>}
    </React.Fragment>)}
  </div>;
}
