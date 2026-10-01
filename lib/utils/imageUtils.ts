export function createFurnitureSvgDataUri(type: 'sofa' | 'chair' | 'table' | 'storage' | 'lamp' | 'accessories' | 'hero' | 'room', title: string, color: string = '#E5E7EB') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
    <rect width="800" height="800" fill="${color}"/>
    <g transform="translate(100, 100)">
      ${type === 'sofa' ? `
        <!-- Sofa Graphic -->
        <rect x="100" y="300" width="400" height="180" rx="30" fill="#3B82F6" opacity="0.8"/>
        <rect x="70" y="240" width="80" height="240" rx="20" fill="#1D4ED8"/>
        <rect x="450" y="240" width="80" height="240" rx="20" fill="#1D4ED8"/>
        <rect x="120" y="200" width="360" height="120" rx="20" fill="#2563EB"/>
        <rect x="120" y="480" width="20" height="50" rx="5" fill="#78350F"/>
        <rect x="460" y="480" width="20" height="50" rx="5" fill="#78350F"/>
      ` : type === 'chair' ? `
        <!-- Chair Graphic -->
        <path d="M 200 200 Q 300 150 400 200 L 400 350 L 200 350 Z" fill="#D97706" opacity="0.9"/>
        <rect x="180" y="340" width="240" height="40" rx="10" fill="#B45309"/>
        <rect x="200" y="380" width="25" height="180" rx="5" fill="#78350F"/>
        <rect x="375" y="380" width="25" height="180" rx="5" fill="#78350F"/>
        <rect x="220" y="180" width="20" height="160" rx="5" fill="#92400E"/>
        <rect x="360" y="180" width="20" height="160" rx="5" fill="#92400E"/>
      ` : type === 'table' ? `
        <!-- Table Graphic -->
        <rect x="100" y="280" width="400" height="35" rx="10" fill="#92400E"/>
        <polygon points="140,315 160,315 130,520 110,520" fill="#78350F"/>
        <polygon points="440,315 460,315 490,520 470,520" fill="#78350F"/>
      ` : type === 'storage' ? `
        <!-- Storage Credenza -->
        <rect x="120" y="220" width="360" height="240" rx="15" fill="#D97706"/>
        <line x1="300" y1="220" x2="300" y2="460" stroke="#78350F" stroke-width="4"/>
        <circle cx="280" cy="340" r="10" fill="#78350F"/>
        <circle cx="320" cy="340" r="10" fill="#78350F"/>
        <rect x="160" y="460" width="20" height="60" fill="#451A03"/>
        <rect x="420" y="460" width="20" height="60" fill="#451A03"/>
      ` : type === 'lamp' ? `
        <!-- Lamp Graphic -->
        <path d="M 220 280 A 80 80 0 0 1 380 280 Z" fill="#F59E0B"/>
        <line x1="300" y1="280" x2="300" y2="500" stroke="#D97706" stroke-width="12"/>
        <ellipse cx="300" cy="500" rx="60" ry="15" fill="#B45309"/>
      ` : `
        <!-- General Furniture -->
        <rect x="150" y="250" width="300" height="200" rx="20" fill="#4F46E5" opacity="0.8"/>
      `}
    </g>
    <text x="400" y="680" font-family="sans-serif" font-size="36" font-weight="bold" fill="#1F2937" text-anchor="middle">${title}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
