// Cuña de queso — vista isométrica con corteza, agujeros y textura
export default function CheeseWedge({ width = 320, className = '' }) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sombra dura */}
      <polygon points="40,70 240,70 240,230 40,230" fill="rgba(0,0,0,0.25)" transform="translate(14,14)" />

      {/* === CARA SUPERIOR (tapa de la cuña) === */}
      {/* Trapecio superior — la cara inclinada del corte */}
      <polygon
        points="30,55 270,55 240,15 60,15"
        fill="#e8c84a"
      />
      {/* Textura agujeros cara superior */}
      <circle cx="100" cy="35" r="6" fill="rgba(180,140,20,0.5)" />
      <circle cx="155" cy="28" r="4" fill="rgba(180,140,20,0.5)" />
      <circle cx="200" cy="38" r="7" fill="rgba(180,140,20,0.5)" />
      <circle cx="130" cy="45" r="3" fill="rgba(180,140,20,0.4)" />
      {/* Corteza borde superior */}
      <polygon
        points="30,55 270,55 240,15 60,15"
        fill="none"
        stroke="#b8860b"
        strokeWidth="1"
      />
      {/* Vena interior */}
      <line x1="80" y1="20" x2="220" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

      {/* === CARA FRONTAL (corte) === */}
      <rect x="30" y="55" width="240" height="175" fill="#f0d060" />
      {/* Agujeros cara frontal */}
      <circle cx="75" cy="95" r="10" fill="rgba(180,140,20,0.35)" />
      <circle cx="75" cy="95" r="10" fill="none" stroke="rgba(150,110,0,0.3)" strokeWidth="1"/>
      <circle cx="160" cy="80" r="7" fill="rgba(180,140,20,0.35)" />
      <circle cx="160" cy="80" r="7" fill="none" stroke="rgba(150,110,0,0.3)" strokeWidth="1"/>
      <circle cx="230" cy="100" r="12" fill="rgba(180,140,20,0.35)" />
      <circle cx="230" cy="100" r="12" fill="none" stroke="rgba(150,110,0,0.3)" strokeWidth="1"/>
      <circle cx="110" cy="140" r="8" fill="rgba(180,140,20,0.3)" />
      <circle cx="195" cy="155" r="6" fill="rgba(180,140,20,0.3)" />
      <circle cx="65" cy="170" r="5" fill="rgba(180,140,20,0.3)" />
      <circle cx="250" cy="170" r="9" fill="rgba(180,140,20,0.3)" />
      <circle cx="140" cy="185" r="11" fill="rgba(180,140,20,0.3)" />
      <circle cx="140" cy="185" r="11" fill="none" stroke="rgba(150,110,0,0.25)" strokeWidth="1"/>

      {/* Corteza inferior y laterales */}
      <rect x="30" y="205" width="240" height="25" fill="#c8960a" />
      <rect x="30" y="55" width="8" height="175" fill="#c8960a" />
      <rect x="262" y="55" width="8" height="175" fill="#a87008" />

      {/* Línea de pasta / corteza */}
      <rect x="30" y="205" width="240" height="3" fill="#b07808" />

      {/* === CARA LATERAL derecha — paralelogramo === */}
      <polygon
        points="270,55 300,35 300,210 270,230"
        fill="#d4a020"
      />
      {/* Agujero lateral */}
      <circle cx="283" cy="130" r="7" fill="rgba(150,100,0,0.35)" />
      <polygon
        points="270,55 300,35 300,210 270,230"
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1"
      />
      {/* Corteza cara lateral */}
      <polygon points="270,205 300,185 300,210 270,230" fill="#b07808" />

      {/* Highlight superior */}
      <polygon
        points="30,55 270,55 240,15 60,15"
        fill="rgba(255,255,255,0.12)"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Marca COPIRINEO en la cara frontal */}
      <text
        x="150"
        y="125"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="18"
        letterSpacing="4"
        fill="rgba(100,60,0,0.4)"
        transform="rotate(-2, 150, 125)"
      >
        COPIRINEO
      </text>
      <text
        x="150"
        y="140"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="7"
        letterSpacing="2"
        fill="rgba(100,60,0,0.35)"
      >
        QUESO ARTESANAL DEL PIRINEO
      </text>
    </svg>
  )
}
