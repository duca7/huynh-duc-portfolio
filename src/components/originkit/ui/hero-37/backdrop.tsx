// Delivered by Originkit · stack: nextjs · styling: tailwind
'use client';

/** Glow blobs behind the hero copy, matching the rest of the site's dark grid backdrop. */
export const Backdrop = () => (
  <div
    aria-hidden
    className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
  >
    <div className='absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl' />
    <div className='absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-accent-2/25 blur-3xl' />
  </div>
);
