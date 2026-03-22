// Tetrabrick de leche en perspectiva 3/4 — cara frontal + lateral + tapa angulada
// Variant: 'entera' (azul), 'semi' (verde), 'desnatada' (azul claro), default=entera

const VARIANTS = {
  entera:    { front: '#1a3a6b', side: '#0d1f3c', accent: '#c4a35a', label: 'ENTERA',      top: '#2d5ea8' },
  semi:      { front: '#3d6b35', side: '#2a4d24', accent: '#c4a35a', label: 'SEMI',        top: '#5a9e4a' },
  desnatada: { front: '#2d5ea8', side: '#1a3a6b', accent: '#ffffff', label: 'DESNATADA',   top: '#4a7ec4' },
}

export default function MilkCarton({ variant = 'entera', width = 260, className = '' }) {
  const v = VARIANTS[variant] || VARIANTS.entera

  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 260 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === SOMBRA DURA === */}
      <rect x="36" y="56" width="170" height="290" fill="rgba(0,0,0,0.35)" />

      {/* === CARA LATERAL (derecha) === */}
      {/* Paralelogramo lateral */}
      <polygon
        points="206,30 236,50 236,340 206,320"
        fill={v.side}
      />
      {/* Líneas de textura lateral */}
      <line x1="213" y1="55" x2="213" y2="318" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="221" y1="58" x2="221" y2="320" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>

      {/* === CARA FRONTAL === */}
      <rect x="30" y="30" width="176" height="290" fill={v.front} />

      {/* — Banda superior de marca — */}
      <rect x="30" y="30" width="176" height="54" fill="rgba(0,0,0,0.25)" />

      {/* COPIRINEO text */}
      <text
        x="118"
        y="62"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="22"
        letterSpacing="4"
        fill="#ffffff"
      >
        COPIRINEO
      </text>

      {/* — Línea separadora — */}
      <line x1="30" y1="84" x2="206" y2="84" stroke={v.accent} strokeWidth="1.5" />

      {/* — Tagline — */}
      <text
        x="118"
        y="98"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="8"
        fontStyle="italic"
        fill="rgba(255,255,255,0.65)"
        letterSpacing="1"
      >
        La mejor leche en tu casa
      </text>

      {/* === ILUSTRACIÓN CENTRAL — montañas + vacas === */}
      {/* Cielo */}
      <rect x="30" y="104" width="176" height="100" fill="rgba(255,255,255,0.04)" />

      {/* Montañas de fondo */}
      <polygon points="30,204 70,130 110,160 150,118 190,155 206,140 206,204" fill="rgba(255,255,255,0.08)" />
      {/* Nieve picos */}
      <polygon points="70,130 60,148 80,148" fill="rgba(255,255,255,0.25)" />
      <polygon points="150,118 140,138 160,138" fill="rgba(255,255,255,0.25)" />

      {/* Montañas primer plano */}
      <polygon points="30,204 55,162 80,185 120,148 158,178 190,155 206,168 206,204" fill={v.front} />
      <polygon points="30,204 55,162 80,185 120,148 158,178 190,155 206,168 206,204" fill="rgba(0,0,0,0.15)" />

      {/* Prado base */}
      <rect x="30" y="195" width="176" height="15" fill="rgba(61,107,53,0.5)" />

      {/* Vacas Holstein — siluetas estilizadas */}
      {/* Vaca 1 */}
      <g transform="translate(55, 185)">
        <ellipse cx="0" cy="0" rx="12" ry="7" fill="rgba(255,255,255,0.8)" />
        <circle cx="0" cy="-5" r="4" fill="rgba(255,255,255,0.8)" />
        {/* manchas */}
        <ellipse cx="3" cy="-1" rx="4" ry="3" fill="rgba(0,0,0,0.4)" />
        <ellipse cx="-3" cy="2" rx="2" ry="2" fill="rgba(0,0,0,0.4)" />
        {/* patas */}
        <line x1="-6" y1="7" x2="-6" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="-2" y1="7" x2="-2" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="7" x2="4" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="6" x2="8" y2="12" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* cola */}
        <path d="M12,0 Q16,-4 14,-8" stroke="rgba(255,255,255,0.7)" strokeWidth="1" fill="none"/>
      </g>
      {/* Vaca 2 — más pequeña, distancia */}
      <g transform="translate(140, 188) scale(0.65)">
        <ellipse cx="0" cy="0" rx="12" ry="7" fill="rgba(255,255,255,0.7)" />
        <circle cx="0" cy="-5" r="4" fill="rgba(255,255,255,0.7)" />
        <ellipse cx="2" cy="-1" rx="3" ry="2.5" fill="rgba(0,0,0,0.4)" />
        <line x1="-6" y1="7" x2="-6" y2="13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="4" y1="7" x2="4" y2="13" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8" strokeLinecap="round"/>
      </g>

      {/* === BANDA INFERIOR === */}
      <rect x="30" y="250" width="176" height="70" fill="rgba(0,0,0,0.3)" />
      <line x1="30" y1="250" x2="206" y2="250" stroke={v.accent} strokeWidth="1.5" />

      {/* 1 LITRO */}
      <text
        x="118"
        y="270"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="9"
        letterSpacing="3"
        fill="rgba(255,255,255,0.5)"
      >
        1 LITRO DE LECHE
      </text>
      <text
        x="118"
        y="300"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="32"
        letterSpacing="6"
        fill={v.accent}
      >
        {v.label}
      </text>

      {/* Logo montaña pequeño */}
      <polygon points="118,318 110,330 126,330" fill="rgba(255,255,255,0.2)" />
      <polygon points="118,312 108,330 128,330" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>

      {/* === TAPA SUPERIOR (tetrabrick) === */}
      {/* Cara frontal de la tapa — trapecio */}
      <polygon
        points="30,30 206,30 196,8 40,8"
        fill={v.top}
      />
      {/* Cara lateral de la tapa */}
      <polygon
        points="206,30 236,50 226,28 196,8"
        fill={v.side}
        opacity="0.9"
      />
      {/* Línea de pliegue central tapa */}
      <line x1="118" y1="8" x2="118" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="40" y1="8" x2="196" y2="8" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>

      {/* === ESQUINAS Y BORDES === */}
      <rect x="30" y="30" width="176" height="290" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
    </svg>
  )
}
