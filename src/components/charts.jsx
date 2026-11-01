'use client';

// Grafik SVG kecil (tanpa library tambahan).

export function ProgressRing({ value = 0, size = 140, stroke = 12, label, sub }) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${pct}%`}>
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#39ff88" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(57,255,136,.12)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset .8s ease', filter: 'drop-shadow(0 0 6px rgba(57,255,136,.55))' }}
        />
      </svg>
      <div className="ring-text">
        <strong>{label ?? `${Math.round(pct)}%`}</strong>
        {sub ? <span>{sub}</span> : null}
      </div>
    </div>
  );
}

// data: [{ key, label, count }]
export function ActivityChart({ data, height = 170, emptyText }) {
  const w = 560;
  const padL = 28;
  const padB = 26;
  const padT = 12;
  const max = Math.max(3, ...data.map((d) => d.count));
  const innerW = w - padL - 8;
  const innerH = height - padB - padT;
  const slot = innerW / data.length;
  const barW = Math.max(6, slot * 0.58);
  const total = data.reduce((s, d) => s + d.count, 0);
  const ticks = [0, Math.ceil(max / 2), max];

  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${w} ${height}`} className="chart" role="img" aria-label="Grafik modul selesai per hari">
        <defs>
          <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#39ff88" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity=".55" />
          </linearGradient>
        </defs>
        {ticks.map((tk) => {
          const y = padT + innerH - (tk / max) * innerH;
          return (
            <g key={tk}>
              <line x1={padL} x2={w - 8} y1={y} y2={y} stroke="rgba(57,255,136,.1)" strokeDasharray="3 5" />
              <text x={padL - 6} y={y + 4} textAnchor="end" fontSize="10" fill="#6f8a7c" fontFamily="monospace">
                {tk}
              </text>
            </g>
          );
        })}
        {data.map((d, i) => {
          const h = (d.count / max) * innerH;
          const x = padL + i * slot + (slot - barW) / 2;
          const y = padT + innerH - h;
          const showLabel = data.length <= 8 || i % 2 === 0 || i === data.length - 1;
          return (
            <g key={d.key}>
              <rect x={x} y={padT} width={barW} height={innerH} rx="3" fill="rgba(57,255,136,.04)" />
              {d.count > 0 ? (
                <rect x={x} y={y} width={barW} height={h} rx="3" fill="url(#bar-grad)" style={{ filter: 'drop-shadow(0 0 5px rgba(57,255,136,.5))' }}>
                  <title>{`${d.label}: ${d.count}`}</title>
                </rect>
              ) : null}
              {showLabel ? (
                <text x={x + barW / 2} y={height - 8} textAnchor="middle" fontSize="10" fill="#6f8a7c" fontFamily="monospace">
                  {d.label}
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
      {total === 0 && emptyText ? <p className="chart-empty">{emptyText}</p> : null}
    </div>
  );
}

export function ProgressBar({ value, color }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="pbar" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <span style={{ width: `${pct}%`, background: color || undefined }} />
    </div>
  );
}
