import { list } from "@vercel/blob";

export type GalleryPhoto = {
  src: string;
  alt: string;
  pathname: string; // needed to delete the blob later from the admin panel
};

const CATEGORIES = [
  "team-building",
  "training",
  "celebrations",
  "office-life",
] as const;

export type PhotoCategory = (typeof CATEGORIES)[number];

export function isValidCategory(value: string): value is PhotoCategory {
  return (CATEGORIES as readonly string[]).includes(value);
}

export { CATEGORIES };

function altFromFilename(filename: string): string {
  const name = filename.replace(/\.[^.]+$/, "");
  return name
    .replace(/^\d+-/, "") // strip a leading "1699999999-" upload timestamp prefix
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Lists every photo stored under images/<category>/ in Vercel Blob.
 * Returns an empty array (rather than throwing) if Blob isn't configured
 * yet, so pages can render a friendly empty state during local dev.
 */
export async function getGalleryPhotos(
  category: string
): Promise<GalleryPhoto[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];

  try {
    const { blobs } = await list({ prefix: `images/${category}/` });
    return blobs
      .sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : -1)) // newest first
      .map((blob) => {
        const filename = blob.pathname.split("/").pop() ?? blob.pathname;
        return {
          src: blob.url,
          alt: altFromFilename(filename),
          pathname: blob.pathname,
        };
      });
  } catch {
    return [];
  }
}
