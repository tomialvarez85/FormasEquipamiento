import React from 'react';

/**
 * Marca de agua del logo de Formas Equipamiento.
 * SVG inline para máxima nitidez en cualquier tamaño.
 */
export const BrandWatermark = () => (
  <svg
    className="brand-watermark"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Círculo verde */}
    <circle cx="50" cy="50" r="48" fill="#b4d22b" />

    {/* "for" */}
    <text
      x="22"
      y="44"
      fontFamily="Arial Black, Arial, sans-serif"
      fontWeight="900"
      fontSize="20"
      fill="#1a1a1a"
      letterSpacing="-1"
    >
      for
    </text>

    {/* 3 cuadraditos (los "muebles") */}
    <rect x="58" y="32" width="7" height="7" fill="#1a1a1a" />
    <rect x="68" y="32" width="7" height="7" fill="#1a1a1a" />
    <rect x="78" y="32" width="7" height="7" fill="#1a1a1a" />

    {/* "mas" */}
    <text
      x="33"
      y="66"
      fontFamily="Arial Black, Arial, sans-serif"
      fontWeight="900"
      fontSize="20"
      fill="#1a1a1a"
      letterSpacing="-1"
    >
      mas
    </text>

    {/* Línea divisoria */}
    <line x1="22" y1="74" x2="78" y2="74" stroke="#1a1a1a" strokeWidth="1.2" />

    {/* "equipamiento" */}
    <text
      x="50"
      y="84"
      fontFamily="Arial, sans-serif"
      fontWeight="700"
      fontSize="9"
      fill="#1a1a1a"
      textAnchor="middle"
      letterSpacing="0.3"
    >
      equipamiento
    </text>
  </svg>
);

export default BrandWatermark;
