// Paisaje pirenaico vertical — ilustración editorial para sección Historia
// Formato retrato: rocas calizas, nieve, prados, chopos, vacas, arroyo
export default function MountainScene({ className = '', height = 620 }) {
  const w = 340
  const h = height

  return (
    <svg
      className={className}
      width="100%"
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {/* === CIELO === */}
      <rect width={w} height={h} fill="#d8e8f4" />

      {/* Nubes sutiles */}
      <ellipse cx="80" cy="60" rx="50" ry="18" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="55" cy="58" rx="30" ry="14" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="110" cy="62" rx="35" ry="12" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="240" cy="45" rx="45" ry="16" fill="rgba(255,255,255,0.65)" />
      <ellipse cx="220" cy="43" rx="28" ry="12" fill="rgba(255,255,255,0.55)" />

      {/* === MONTAÑAS FONDO (lejos, azuladas) === */}
      <polygon
        points={`0,${h*0.48} 30,${h*0.32} 60,${h*0.38} 90,${h*0.22} 120,${h*0.30} 150,${h*0.18} 185,${h*0.26} 210,${h*0.14} 240,${h*0.22} 270,${h*0.30} 300,${h*0.20} 340,${h*0.28} 340,${h*0.48} 0,${h*0.48}`}
        fill="#8aa8c8"
      />
      {/* Nieve picos lejanos */}
      <polygon points={`150,${h*0.18} 140,${h*0.26} 160,${h*0.26}`} fill="rgba(255,255,255,0.85)" />
      <polygon points={`210,${h*0.14} 198,${h*0.24} 222,${h*0.24}`} fill="rgba(255,255,255,0.9)" />
      <polygon points={`90,${h*0.22} 82,${h*0.30} 98,${h*0.30}`} fill="rgba(255,255,255,0.7)" />

      {/* === MONTAÑAS MEDIAS (rocas calizas grises) === */}
      <polygon
        points={`0,${h*0.55} 20,${h*0.38} 55,${h*0.44} 80,${h*0.30} 115,${h*0.40} 145,${h*0.28} 170,${h*0.36} 195,${h*0.25} 225,${h*0.34} 260,${h*0.42} 290,${h*0.30} 320,${h*0.36} 340,${h*0.32} 340,${h*0.55} 0,${h*0.55}`}
        fill="#9ba8b0"
      />
      {/* Detalles rocas calizas */}
      <polygon points={`80,${h*0.30} 72,${h*0.38} 85,${h*0.35} 92,${h*0.40}`} fill="#b8c2c8" />
      <polygon points={`195,${h*0.25} 185,${h*0.33} 200,${h*0.30} 208,${h*0.35}`} fill="#b8c2c8" />
      {/* Nieve cara media */}
      <polygon points={`145,${h*0.28} 136,${h*0.36} 154,${h*0.36}`} fill="rgba(255,255,255,0.9)" />
      <polygon points={`195,${h*0.25} 186,${h*0.32} 204,${h*0.32}`} fill="rgba(255,255,255,0.85)" />
      {/* Grietas roca */}
      <line x1="85" y1={h*0.32} x2="78" y2={h*0.44} stroke="rgba(100,110,118,0.5)" strokeWidth="1"/>
      <line x1="220" y1={h*0.28} x2="215" y2={h*0.40} stroke="rgba(100,110,118,0.5)" strokeWidth="1"/>
      <line x1="112" y1={h*0.35} x2="108" y2={h*0.46} stroke="rgba(100,110,118,0.4)" strokeWidth="1"/>

      {/* Sombra laderas */}
      <polygon
        points={`80,${h*0.30} 115,${h*0.40} 100,${h*0.55} 60,${h*0.55}`}
        fill="rgba(60,70,80,0.18)"
      />
      <polygon
        points={`195,${h*0.25} 225,${h*0.34} 210,${h*0.55} 175,${h*0.55}`}
        fill="rgba(60,70,80,0.15)"
      />

      {/* === ZONA MEDIA VERDE — prados === */}
      <rect x="0" y={h*0.52} width={w} height={h*0.13} fill="#5a8c3a" />
      {/* Variaciones de verde del prado */}
      <rect x="0" y={h*0.54} width={w*0.4} height={h*0.11} fill="rgba(80,130,50,0.3)" />
      <rect x={w*0.55} y={h*0.53} width={w*0.45} height={h*0.12} fill="rgba(60,110,35,0.3)" />

      {/* === ARROYO (zona media) === */}
      <path
        d={`M ${w*0.35},${h*0.52} C ${w*0.4},${h*0.57} ${w*0.38},${h*0.60} ${w*0.42},${h*0.65} C ${w*0.46},${h*0.70} ${w*0.44},${h*0.74} ${w*0.46},${h}`}
        stroke="#7ab8e0"
        strokeWidth="5"
        fill="none"
        opacity="0.8"
      />
      <path
        d={`M ${w*0.35},${h*0.52} C ${w*0.4},${h*0.57} ${w*0.38},${h*0.60} ${w*0.42},${h*0.65} C ${w*0.46},${h*0.70} ${w*0.44},${h*0.74} ${w*0.46},${h}`}
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
        fill="none"
      />

      {/* === CHOPOS (álamos) === */}
      {/* Chopo 1 */}
      <rect x="55" y={h*0.48} width="6" height={h*0.16} fill="#4a3820" />
      <ellipse cx="58" cy={h*0.48} rx="14" ry={h*0.08} fill="#2d5e28" />
      <ellipse cx="58" cy={h*0.44} rx="10" ry={h*0.06} fill="#3a7832" />
      {/* Chopo 2 */}
      <rect x="72" y={h*0.50} width="5" height={h*0.14} fill="#4a3820" />
      <ellipse cx="74" cy={h*0.50} rx="12" ry={h*0.07} fill="#2d5e28" />
      <ellipse cx="74" cy={h*0.46} rx="9" ry={h*0.05} fill="#3a7832" />
      {/* Chopo 3 — derecha */}
      <rect x="248" y={h*0.47} width="7" height={h*0.17} fill="#4a3820" />
      <ellipse cx="251" cy={h*0.47} rx="16" ry={h*0.09} fill="#2d5e28" />
      <ellipse cx="251" cy={h*0.43} rx="12" ry={h*0.065} fill="#3a7832" />
      {/* Chopo 4 */}
      <rect x="268" y={h*0.49} width="5" height={h*0.15} fill="#4a3820" />
      <ellipse cx="270" cy={h*0.49} rx="11" ry={h*0.065} fill="#2d5e28" />
      <ellipse cx="270" cy={h*0.45} rx="8" ry={h*0.05} fill="#3a7832" />

      {/* === PRADO PRINCIPAL === */}
      <rect x="0" y={h*0.62} width={w} height={h*0.38} fill="#6ba040" />
      {/* Variaciones color prado */}
      <polygon points={`0,${h*0.62} ${w*0.3},${h*0.64} ${w*0.3},${h} 0,${h}`} fill="rgba(90,140,50,0.3)" />
      <polygon points={`${w*0.65},${h*0.63} ${w},${h*0.65} ${w},${h} ${w*0.65},${h}`} fill="rgba(70,120,35,0.35)" />
      {/* Hierba alta sutil */}
      {[20,35,50,90,110,140,170,200,230,265,295,315].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={h*0.62} x2={x-2} y2={h*0.60} stroke="rgba(80,130,40,0.6)" strokeWidth="1.5"/>
          <line x1={x+4} y1={h*0.62} x2={x+5} y2={h*0.595} stroke="rgba(80,130,40,0.5)" strokeWidth="1.5"/>
        </g>
      ))}

      {/* === VACAS HOLSTEIN (primer plano) === */}
      {/* Vaca grande 1 */}
      <g transform={`translate(80, ${h*0.72})`}>
        <ellipse cx="0" cy="0" rx="32" ry="18" fill="#f0f0f0" />
        <ellipse cx="-8" cy="-12" rx="11" ry="10" fill="#f0f0f0" />
        <circle cx="-8" cy="-12" r="11" fill="#f0f0f0" />
        {/* Morro */}
        <ellipse cx="-17" cy="-10" rx="5" ry="4" fill="#e0d0c0" />
        <circle cx="-20" cy="-11" r="1" fill="#888" />
        <circle cx="-16" cy="-11" r="1" fill="#888" />
        {/* Orejas */}
        <ellipse cx="-4" cy="-22" rx="3" ry="5" fill="#e8d8c8" transform="rotate(-15,-4,-22)"/>
        <ellipse cx="-14" cy="-22" rx="3" ry="5" fill="#e8d8c8" transform="rotate(15,-14,-22)"/>
        {/* Manchas negras Holstein */}
        <ellipse cx="10" cy="-5" rx="14" ry="10" fill="#1a1a1a" />
        <ellipse cx="-5" cy="5" rx="8" ry="6" fill="#1a1a1a" />
        <ellipse cx="-18" cy="-6" rx="5" ry="4" fill="#1a1a1a" />
        {/* Patas */}
        <rect x="-22" y="15" width="6" height="20" rx="2" fill="#e8e8e8" />
        <rect x="-10" y="16" width="6" height="20" rx="2" fill="#e8e8e8" />
        <rect x="6" y="16" width="6" height="20" rx="2" fill="#e8e8e8" />
        <rect x="18" y="15" width="6" height="20" rx="2" fill="#e8e8e8" />
        {/* Ubre */}
        <ellipse cx="5" cy="16" rx="10" ry="6" fill="#f0c0b0" />
        {/* Cola */}
        <path d="M30,0 Q42,-10 38,-22" stroke="#ccc" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="37" cy="-24" rx="4" ry="6" fill="#ccc" transform="rotate(-20,37,-24)"/>
      </g>

      {/* Vaca 2 — más lejos, algo más pequeña */}
      <g transform={`translate(210, ${h*0.70}) scale(0.72)`}>
        <ellipse cx="0" cy="0" rx="32" ry="18" fill="#f0f0f0" />
        <ellipse cx="-8" cy="-12" rx="11" ry="10" fill="#f0f0f0" />
        <ellipse cx="-17" cy="-10" rx="5" ry="4" fill="#e0d0c0" />
        <ellipse cx="8" cy="-4" rx="12" ry="9" fill="#1a1a1a" />
        <ellipse cx="-6" cy="4" rx="7" ry="5" fill="#1a1a1a" />
        <rect x="-22" y="15" width="6" height="18" rx="2" fill="#e8e8e8" />
        <rect x="-10" y="16" width="6" height="18" rx="2" fill="#e8e8e8" />
        <rect x="6" y="16" width="6" height="18" rx="2" fill="#e8e8e8" />
        <rect x="18" y="15" width="6" height="18" rx="2" fill="#e8e8e8" />
        <path d="M30,0 Q40,-8 36,-18" stroke="#ccc" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>

      {/* Vaca pequeña 3 — fondo */}
      <g transform={`translate(165, ${h*0.67}) scale(0.45)`}>
        <ellipse cx="0" cy="0" rx="32" ry="18" fill="#f5f5f5" />
        <ellipse cx="-8" cy="-12" rx="11" ry="10" fill="#f5f5f5" />
        <ellipse cx="6" cy="-3" rx="10" ry="8" fill="#2a2a2a" />
        <ellipse cx="-5" cy="5" rx="6" ry="5" fill="#2a2a2a" />
        <rect x="-20" y="15" width="5" height="16" rx="2" fill="#e8e8e8" />
        <rect x="-8" y="16" width="5" height="16" rx="2" fill="#e8e8e8" />
        <rect x="6" y="16" width="5" height="16" rx="2" fill="#e8e8e8" />
        <rect x="16" y="15" width="5" height="16" rx="2" fill="#e8e8e8" />
      </g>

      {/* === FLORES / DETALLES PRADO === */}
      {[45,68,130,158,185,225,255,290].map((x, i) => (
        <circle key={i} cx={x} cy={h*0.64 + (i%3)*4} r="2.5" fill={i%2===0 ? '#f5e030' : '#ffffff'} opacity="0.8"/>
      ))}

      {/* === PIEDRAS en primer plano === */}
      <ellipse cx="30" cy={h*0.85} rx="18" ry="10" fill="#9ba8b0" />
      <ellipse cx="300" cy={h*0.88} rx="22" ry="12" fill="#9ba8b0" />
      <ellipse cx="160" cy={h*0.95} rx="14" ry="8" fill="#9ba8b0" />
    </svg>
  )
}
