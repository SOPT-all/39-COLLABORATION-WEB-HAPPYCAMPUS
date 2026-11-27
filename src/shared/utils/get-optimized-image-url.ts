const IMAGE_WIDTH = {
  thumbnail: 160,
  preview: 768,
} as const;

const IMAGE_QUALITY = 75;

const isImageOptimizationEnabled = Boolean(import.meta.env.VITE_VERCEL_ENV);

export const getOptimizedImageUrl = (
  url: string,
  size: keyof typeof IMAGE_WIDTH,
) => {
  if (!isImageOptimizationEnabled) return url;

  const params = new URLSearchParams({
    url,
    w: String(IMAGE_WIDTH[size]),
    q: String(IMAGE_QUALITY),
  });

  return `/_vercel/image?${params}`;
};
