// Mapa simplificado pero reconocible de Aragón (3 provincias)
// Huesca arriba, Zaragoza en el centro, Teruel abajo
// Paths aproximados de las siluetas reales

export default function AragonMap({ className = '', width = 380 }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 380 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === HUESCA (provincia norte) — resaltada en gold === */}
      <path
        d="M 60,20
           L 80,15 L 105,22 L 130,18 L 155,25 L 175,20
           L 200,28 L 215,22 L 235,30 L 250,25 L 270,35
           L 280,55 L 275,75 L 285,95 L 278,115 L 270,130
           L 255,140 L 240,148 L 225,155 L 210,158
           L 195,162 L 180,158 L 165,165 L 150,160
           L 135,168 L 118,162 L 105,170 L 92,162
           L 78,155 L 68,140 L 60,125
           L 50,108 L 45,90 L 48,70 L 52,50 L 60,20 Z"
        fill="#c4a35a"
        opacity="0.9"
      />
      <path
        d="M 60,20
           L 80,15 L 105,22 L 130,18 L 155,25 L 175,20
           L 200,28 L 215,22 L 235,30 L 250,25 L 270,35
           L 280,55 L 275,75 L 285,95 L 278,115 L 270,130
           L 255,140 L 240,148 L 225,155 L 210,158
           L 195,162 L 180,158 L 165,165 L 150,160
           L 135,168 L 118,162 L 105,170 L 92,162
           L 78,155 L 68,140 L 60,125
           L 50,108 L 45,90 L 48,70 L 52,50 L 60,20 Z"
        fill="none"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
      />

      {/* === ZARAGOZA (provincia central) === */}
      <path
        d="M 48,175
           L 60,125 L 68,140 L 78,155 L 92,162
           L 105,170 L 118,162 L 135,168 L 150,160
           L 165,165 L 180,158 L 195,162 L 210,158
           L 225,155 L 240,148 L 255,140 L 270,130
           L 278,115 L 285,130 L 295,148 L 305,165
           L 310,185 L 305,205 L 310,220 L 300,240
           L 290,255 L 275,265 L 260,272 L 242,275
           L 225,270 L 210,278 L 195,272 L 178,275
           L 162,268 L 148,272 L 132,265 L 118,270
           L 100,262 L 85,255 L 72,240 L 60,225
           L 50,210 L 45,195 L 48,175 Z"
        fill="rgba(255,255,255,0.12)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      {/* === TERUEL (provincia sur) === */}
      <path
        d="M 62,280
           L 72,240 L 85,255 L 100,262 L 118,270
           L 132,265 L 148,272 L 162,268 L 178,275
           L 195,272 L 210,278 L 225,270 L 242,275
           L 260,272 L 275,265 L 288,278 L 295,295
           L 298,315 L 292,335 L 285,352 L 275,368
           L 262,380 L 248,388 L 232,392 L 215,398
           L 198,400 L 182,396 L 165,390 L 148,385
           L 132,378 L 118,368 L 105,355 L 92,342
           L 80,328 L 70,312 L 62,295 L 62,280 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1.5"
      />

      {/* === DIVISORIA Huesca/Zaragoza === */}
      <path
        d="M 60,125 L 68,140 L 78,155 L 92,162 L 105,170 L 118,162 L 135,168 L 150,160 L 165,165 L 180,158 L 195,162 L 210,158 L 225,155 L 240,148 L 255,140 L 270,130"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
        strokeDasharray="4 3"
        fill="none"
      />

      {/* === PUNTO — GRAUS (capital de Ribagorza) === */}
      <circle cx="198" cy="88" r="10" fill="#c4a35a" />
      <circle cx="198" cy="88" r="6" fill="white" />
      <circle cx="198" cy="88" r="3" fill="#c4a35a" />
      {/* Pulso animado */}
      <circle cx="198" cy="88" r="10" fill="none" stroke="#c4a35a" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>

      {/* Label Graus */}
      <text x="212" y="84" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="#c4a35a" letterSpacing="1">GRAUS</text>
      <text x="212" y="96" fontFamily="'DM Sans', sans-serif" fontSize="8" fill="rgba(255,255,255,0.5)">Ribagorza</text>

      {/* === PUNTOS DE VENTA (supermercados Aragón) === */}
      {/* Huesca ciudad */}
      <circle cx="135" cy="108" r="4" fill="rgba(255,255,255,0.5)" />
      {/* Zaragoza ciudad */}
      <circle cx="175" cy="218" r="5" fill="rgba(255,255,255,0.5)" />
      {/* Teruel ciudad */}
      <circle cx="190" cy="345" r="4" fill="rgba(255,255,255,0.5)" />
      {/* Barbastro */}
      <circle cx="218" cy="118" r="3.5" fill="rgba(255,255,255,0.4)" />
      {/* Monzón */}
      <circle cx="248" cy="140" r="3" fill="rgba(255,255,255,0.35)" />
      {/* Jaca */}
      <circle cx="88" cy="72" r="3" fill="rgba(255,255,255,0.35)" />

      {/* === LABEL PROVINCIAS === */}
      <text x="155" y="108" fontFamily="'Bebas Neue', sans-serif" fontSize="13" fill="rgba(0,0,0,0.35)" letterSpacing="2">HUESCA</text>
      <text x="148" y="228" fontFamily="'Bebas Neue', sans-serif" fontSize="13" fill="rgba(255,255,255,0.25)" letterSpacing="2">ZARAGOZA</text>
      <text x="155" y="345" fontFamily="'Bebas Neue', sans-serif" fontSize="13" fill="rgba(255,255,255,0.2)" letterSpacing="2">TERUEL</text>

      {/* === MARCO / BORDE EXTERIOR === */}
      <rect x="0" y="0" width="380" height="520" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    </svg>
  )
}
