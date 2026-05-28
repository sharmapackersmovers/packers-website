/**
 * Centralised image registry for the entire site.
 *
 * HOW TO SWITCH TO YOUR OWN CLOUDINARY IMAGES:
 * ─────────────────────────────────────────────
 * 1. Add your Cloud Name to .env.local:
 *      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
 *
 * 2. Upload images to Cloudinary Media Library, organised in folders:
 *      hero/       services/     gallery/     about/     avatars/
 *
 * 3. Replace the first argument of cloudinaryUrl() with the Public ID
 *    of your uploaded image (shown in Cloudinary asset details).
 *    e.g.  cloudinaryUrl("gallery/delhi-mumbai-move", { width:700, height:525 })
 *
 * 4. The second argument of cloudinaryUrl() is the fallback shown when
 *    Cloudinary is not yet configured — do not remove it.
 *
 * CURRENT STATE: Cloudinary not yet configured →
 *   Hero / services / about → Unsplash stock photos (free, may 404 occasionally)
 *   Gallery                 → Picsum Photos (always loads, generic photos)
 */

import { cloudinaryUrl } from "@/lib/cloudinary";

// ─── Shorthand placeholders ───────────────────────────────────────────────────
const UNS = "https://images.unsplash.com/photo";
const PIC = "https://picsum.photos/seed";

// ─── Unsplash fallback builder ────────────────────────────────────────────────
function unsplash(id: string, w = 800, h = 600) {
  return `${UNS}-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const siteImages = {

  // ── Hero ───────────────────────────────────────────────────────────────────
  // Replace "hero/truck" with your Cloudinary public ID after uploading.
  heroTruck: cloudinaryUrl(
    "hero/moving-truck",
    { width: 1200, height: 630, crop: "fill" },
    unsplash("1558618666-fcd25c85cd64", 1200, 630)
  ),
  heroMovers: cloudinaryUrl(
    "hero/movers-team",
    { width: 1200, height: 630, crop: "fill" },
    unsplash("1556912167-f556f1f39faa", 1200, 630)
  ),

  // ── Services ───────────────────────────────────────────────────────────────
  serviceHouseholdShifting: cloudinaryUrl(
    "services/household-shifting",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1558618666-fcd25c85cd64", 600, 400)
  ),
  serviceOfficeRelocation: cloudinaryUrl(
    "services/office-relocation",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1497366216548-37526070297c", 600, 400)
  ),
  serviceLocalShifting: cloudinaryUrl(
    "services/local-shifting",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1504307651486-d2e5c3c89d8a", 600, 400)
  ),
  serviceCarTransport: cloudinaryUrl(
    "services/car-transport",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1449965408869-eaa3f722e40d", 600, 400)
  ),
  serviceBikeTransport: cloudinaryUrl(
    "services/bike-transport",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1558618666-fcd25c85cd64", 600, 400)
  ),
  serviceWarehouse: cloudinaryUrl(
    "services/warehouse-storage",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1586528116311-ad8dd3c8310d", 600, 400)
  ),
  servicePacking: cloudinaryUrl(
    "services/packing-unpacking",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1494797262163-102a8b174a6c", 600, 400)
  ),
  serviceLoading: cloudinaryUrl(
    "services/loading-unloading",
    { width: 600, height: 400, crop: "fill" },
    unsplash("1541123437800-1bb1317badc2", 600, 400)
  ),

  // ── About ──────────────────────────────────────────────────────────────────
  aboutOffice: cloudinaryUrl(
    "about/office",
    { width: 900, height: 675, crop: "fill" },
    unsplash("1497366216548-37526070297c", 900, 675)
  ),
  aboutTeam: cloudinaryUrl(
    "about/team",
    { width: 900, height: 675, crop: "fill" },
    unsplash("1556912167-f556f1f39faa", 900, 675)
  ),
  aboutWarehouse: cloudinaryUrl(
    "about/warehouse",
    { width: 900, height: 675, crop: "fill" },
    unsplash("1586528116311-ad8dd3c8310d", 900, 675)
  ),

  // ── Why Choose Us ──────────────────────────────────────────────────────────
  whyChooseUs: cloudinaryUrl(
    "about/why-choose-us",
    { width: 800, height: 600, crop: "fill" },
    unsplash("1556912167-f556f1f39faa", 800, 600)
  ),

  // ── Testimonial Avatars ────────────────────────────────────────────────────
  // Replace avatars/customer-1 … avatars/customer-6 with actual customer photos.
  avatars: [
    cloudinaryUrl("avatars/customer-1", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1507003211169-0a1dd7228f2d", 120, 120)),
    cloudinaryUrl("avatars/customer-2", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1573496359142-b8d87734a5a2", 120, 120)),
    cloudinaryUrl("avatars/customer-3", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1500648767791-00dcc994a43e", 120, 120)),
    cloudinaryUrl("avatars/customer-4", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1438761681033-6461ffad8d80", 120, 120)),
    cloudinaryUrl("avatars/customer-5", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1472099645785-5658abf4ff4e", 120, 120)),
    cloudinaryUrl("avatars/customer-6", { width: 120, height: 120, crop: "thumb", gravity: "face" }, unsplash("1544005313-94ddf0286df2", 120, 120)),
  ],

  // ── Gallery ────────────────────────────────────────────────────────────────
  // Replace gallery/move-job-1 … gallery/move-job-12 with your actual job photos.
  // Upload photos from real completed moves to Cloudinary → gallery/ folder.
  gallery: [
    {
      id: "g1",
      url: cloudinaryUrl("gallery/move-job-1", { width: 700, height: 525, crop: "fill" }, `${PIC}/sp-pack1/700/525`),
      label: "Professional Packing",
      category: "packing",
    },
    {
      id: "g2",
      url: cloudinaryUrl("gallery/move-job-2", { width: 700, height: 700, crop: "fill" }, `${PIC}/sp-load2/700/700`),
      label: "Loading & Unloading",
      category: "loading",
    },
    {
      id: "g3",
      url: cloudinaryUrl("gallery/move-job-3", { width: 700, height: 490, crop: "fill" }, `${PIC}/sp-truck3/700/490`),
      label: "Long Distance Transport",
      category: "transport",
    },
    {
      id: "g4",
      url: cloudinaryUrl("gallery/move-job-4", { width: 700, height: 700, crop: "fill" }, `${PIC}/sp-office4/700/700`),
      label: "Office Relocation",
      category: "office",
    },
    {
      id: "g5",
      url: cloudinaryUrl("gallery/move-job-5", { width: 700, height: 525, crop: "fill" }, `${PIC}/sp-car5/700/525`),
      label: "Car Transportation",
      category: "vehicle",
    },
    {
      id: "g6",
      url: cloudinaryUrl("gallery/move-job-6", { width: 700, height: 840, crop: "fill" }, `${PIC}/sp-fragile6/700/840`),
      label: "Fragile Item Packing",
      category: "packing",
    },
    {
      id: "g7",
      url: cloudinaryUrl("gallery/move-job-7", { width: 700, height: 525, crop: "fill" }, `${PIC}/sp-ware7/700/525`),
      label: "Warehouse & Storage",
      category: "loading",
    },
    {
      id: "g8",
      url: cloudinaryUrl("gallery/move-job-8", { width: 700, height: 700, crop: "fill" }, `${PIC}/sp-fleet8/700/700`),
      label: "Fleet of Vehicles",
      category: "transport",
    },
    {
      id: "g9",
      url: cloudinaryUrl("gallery/move-job-9", { width: 700, height: 490, crop: "fill" }, `${PIC}/sp-corp9/700/490`),
      label: "Corporate Move",
      category: "office",
    },
    {
      id: "g10",
      url: cloudinaryUrl("gallery/move-job-10", { width: 700, height: 700, crop: "fill" }, `${PIC}/sp-bike10/700/700`),
      label: "Bike Transport",
      category: "vehicle",
    },
    {
      id: "g11",
      url: cloudinaryUrl("gallery/move-job-11", { width: 700, height: 525, crop: "fill" }, `${PIC}/sp-house11/700/525`),
      label: "House Moving",
      category: "packing",
    },
    {
      id: "g12",
      url: cloudinaryUrl("gallery/move-job-12", { width: 700, height: 840, crop: "fill" }, `${PIC}/sp-team12/700/840`),
      label: "Professional Team",
      category: "loading",
    },
  ],
};
