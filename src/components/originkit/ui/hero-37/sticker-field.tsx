// Delivered by Originkit · stack: nextjs · styling: tailwind
'use client';

import StickerDrag from '@/components/originkit/ui/hero-37/draggable-sticker';

function asset(file: string) {
  return `/originkit/hero-37/${file}`;
}

/**
 * Tech badges scattered around the hero copy (desktop only), reusing the same
 * peel/drag mechanic as the folder's app stickers — just swapped content.
 */
const TECH_BADGES = [
  {
    name: 'react',
    label: 'React',
    width: 124,
    height: 52,
    className: 'left-[4%] top-[18%]',
  },
  {
    name: 'typescript',
    label: 'TypeScript',
    width: 170,
    height: 52,
    className: 'right-[6%] top-[28%]',
  },
  {
    name: 'tailwindcss',
    label: 'Tailwind CSS',
    width: 192,
    height: 52,
    className: 'left-[8%] bottom-[22%]',
  },
  {
    name: 'nextjs',
    label: 'Next.js',
    width: 132,
    height: 52,
    className: 'right-[3%] bottom-[16%]',
  },
] as const;

export const StickerField = () => (
  <>
    {TECH_BADGES.map((badge) => (
      <div
        key={badge.name}
        className={`absolute z-20 hidden desktop-sm:block ${badge.className}`}
        style={{ width: badge.width, height: badge.height }}
      >
        <StickerDrag
          image={{ src: asset(`sticker-${badge.name}.svg`), alt: badge.label }}
          imageWidth={badge.width}
          imageHeight={badge.height}
          tilt={30}
          lighting
          lightingStrength={8}
          lightingColor='#ffffff'
          sheenMode='sheen'
          elevation={6}
          staticShadow='4px 4px 0px rgba(0, 0, 0, 0.9)'
          dynamicShadow='6px 10px 0px rgba(0, 0, 0, 0.9)'
        />
      </div>
    ))}
  </>
);
