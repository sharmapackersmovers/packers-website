/**
 * Cloudinary image URL builder.
 *
 * SETUP (one-time):
 *   1. Create a free account at https://cloudinary.com
 *   2. Copy your "Cloud name" from the Cloudinary Dashboard
 *   3. Add it to .env.local:
 *        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
 *   4. Re-start the dev server (npm run dev)
 *
 * UPLOADING IMAGES:
 *   - Cloudinary Dashboard → Media Library → Upload
 *   - Suggested folder structure:
 *       hero/           ← hero banners (1200×630 minimum)
 *       services/       ← one image per service card (600×400)
 *       gallery/        ← your actual moving job photos (700×525)
 *       about/          ← team, office, warehouse photos
 *       avatars/        ← customer/team headshots (120×120)
 *   - After uploading, copy the "Public ID" shown in the asset details panel
 *     (e.g.  gallery/move-job-delhi-to-mumbai)
 *
 * USAGE in data/images.ts:
 *   import { cloudinaryUrl } from "@/lib/cloudinary";
 *   url: cloudinaryUrl("gallery/move-job-delhi-to-mumbai", { width: 700, height: 525 })
 *
 * FALLBACK:
 *   When NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set, the helper returns the
 *   fallback URL you supply so the site always renders something.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export interface CloudinaryOptions {
  width?: number;
  height?: number;
  quality?: number;
  /** 'fill' crops to exact dimensions, 'fit' scales within, 'scale' ignores aspect ratio */
  crop?: "fill" | "fit" | "scale" | "thumb" | "pad";
  format?: "auto" | "webp" | "jpg" | "png";
  gravity?: "auto" | "face" | "center";
}

/**
 * Build an optimised Cloudinary image URL.
 *
 * @param publicId  The Cloudinary Public ID (e.g. "gallery/truck-move-1")
 * @param options   Width, height, crop, quality, format overrides
 * @param fallback  URL to use when Cloudinary is not configured
 */
export function cloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {},
  fallback = ""
): string {
  if (!CLOUD_NAME) {
    // Not configured yet — return the fallback (Unsplash / Picsum placeholder)
    return fallback;
  }

  const {
    width,
    height,
    quality = 80,
    crop = "fill",
    format = "auto",
    gravity = "auto",
  } = options;

  const transforms = [
    `f_${format}`,
    `q_${quality}`,
    `c_${crop}`,
    gravity ? `g_${gravity}` : "",
    width ? `w_${width}` : "",
    height ? `h_${height}` : "",
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/**
 * Returns true when Cloudinary is configured via env variable.
 * Use this to conditionally show an "upload your photos" prompt in the CMS.
 */
export function isCloudinaryConfigured(): boolean {
  return Boolean(CLOUD_NAME);
}
