export default function DoppiCap({ width = 48, height = 36, className = "", useImage = true }) {
  if (useImage) {
    return (
      <img 
        src="/doppi-chust.png" 
        alt="O'zbek Chust do'ppisi" 
        width={width} 
        height={height} 
        className={`doppi-cap-img ${className}`} 
        style={{ objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
      />
    );
  }

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`doppi-cap-icon ${className}`}
      aria-label="O'zbek Chust do'ppisi"
    >
      {/* Drop Shadow */}
      <ellipse cx="60" cy="84" rx="52" ry="6" fill="rgba(0,0,0,0.35)" />

      {/* Main Cap Structure - Isometric 4-Facet Chust Doppi */}
      {/* Bottom Vertical Rim Band */}
      <path 
        d="M 12 56 L 60 76 L 108 56 L 108 72 L 60 84 L 12 72 Z" 
        fill="#0A0B0D" 
        stroke="#FFFFFF" 
        strokeWidth="1.2"
      />
      
      {/* Top 4 Facets (Pyramidal Slanted Velvet Panels) */}
      <path d="M 12 56 L 60 76 L 60 22 L 20 18 Z" fill="#14161B" stroke="#000000" strokeWidth="1"/>
      <path d="M 60 76 L 108 56 L 100 18 L 60 22 Z" fill="#1A1C22" stroke="#000000" strokeWidth="1"/>
      <path d="M 20 18 L 60 10 L 60 22 Z" fill="#0E1014"/>
      <path d="M 60 10 L 100 18 L 60 22 Z" fill="#111317"/>

      {/* White Silk Ridge Seams (Cruciform 4-Facet Seams) */}
      <path d="M 60 10 L 60 76" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 20 18 L 100 18" stroke="#FFFFFF" strokeWidth="2" opacity="0.85"/>
      <path d="M 12 56 L 60 22 L 108 56" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>

      {/* --- BODOM / QALAMPIR EMBROIDERY MOTIF (Left Facet) --- */}
      <g filter="drop-shadow(0 1px 2px rgba(0,0,0,0.6))">
        <path d="M 32 60 C 20 45 28 30 42 34 C 52 38 48 55 36 58 Z" fill="#FFFFFF" />
        <path d="M 33 57 C 24 45 30 34 40 37 C 47 41 44 54 36 55 Z" fill="#14161B" />
        <path d="M 36 53 Q 32 44 40 40" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="34" cy="48" r="1.5" fill="#FFFFFF"/>
        <circle cx="39" cy="45" r="1.5" fill="#FFFFFF"/>
        <circle cx="30" cy="53" r="1.2" fill="#FFFFFF"/>
      </g>

      {/* --- BODOM / QALAMPIR EMBROIDERY MOTIF (Right Facet) --- */}
      <g filter="drop-shadow(0 1px 2px rgba(0,0,0,0.6))">
        <path d="M 88 60 C 100 45 92 30 78 34 C 68 38 72 55 84 58 Z" fill="#FFFFFF" />
        <path d="M 87 57 C 96 45 90 34 80 37 C 73 41 76 54 84 55 Z" fill="#1A1C22" />
        <path d="M 84 53 Q 88 44 80 40" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="86" cy="48" r="1.5" fill="#FFFFFF"/>
        <circle cx="81" cy="45" r="1.5" fill="#FFFFFF"/>
        <circle cx="90" cy="53" r="1.2" fill="#FFFFFF"/>
      </g>

      {/* --- 16 ARCHES ("TESHIKLAR") ALONG THE RIM --- */}
      <path d="M 14 62 Q 20 57 26 64" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 26 64 Q 32 60 38 67" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 38 67 Q 44 63 50 70" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 50 70 Q 55 66 60 74" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>

      <path d="M 60 74 Q 65 66 70 70" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 70 70 Q 76 63 82 67" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 82 67 Q 88 60 94 64" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M 94 64 Q 100 57 106 62" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>

      <circle cx="20" cy="63" r="1.2" fill="#FFFFFF"/>
      <circle cx="32" cy="66" r="1.2" fill="#FFFFFF"/>
      <circle cx="44" cy="69" r="1.2" fill="#FFFFFF"/>
      <circle cx="55" cy="72" r="1.2" fill="#FFFFFF"/>
      <circle cx="65" cy="72" r="1.2" fill="#FFFFFF"/>
      <circle cx="76" cy="69" r="1.2" fill="#FFFFFF"/>
      <circle cx="88" cy="66" r="1.2" fill="#FFFFFF"/>
      <circle cx="100" cy="63" r="1.2" fill="#FFFFFF"/>

      <path d="M 12 72 L 60 84 L 108 72" stroke="#FFFFFF" strokeWidth="2.2"/>
      <polygon points="60,6 64,10 60,14 56,10" fill="#FFFFFF"/>
    </svg>
  );
}
