import React from 'react';

const LOGO_URL = 'https://customer-assets.emergentagent.com/job_8178eced-ddc8-4299-916b-a893428bbad7/artifacts/o9pbmpf5_WhatsApp%20Image%202026-05-27%20at%209.02.52%20AM.jpeg';

/**
 * Marca de agua del logo de Formas Equipamiento.
 * Renderiza la imagen oficial del logo en la esquina inferior derecha.
 */
export const BrandWatermark = () => (
  <img
    src={LOGO_URL}
    alt="Formas Equipamiento"
    className="brand-watermark"
    loading="lazy"
    aria-hidden="true"
  />
);

export default BrandWatermark;
