import fs from "fs";
import path from "path";

const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * Reads every image file inside /public/images/<category> and returns it as
 * a gallery-ready object. This is the whole "upload" workflow for
 * non-developers: drop a photo into the matching folder, commit, push —
 * no component or config file needs to be touched.
 *
 * Optional captions: if a file named `captions.json` exists in the folder
 * (e.g. { "team-offsite.jpg": "Our 2025 team offsite in Grand Baie" }),
 * those captions are used as the alt text. Otherwise a readable alt text
 * is generated from the filename.
 */
export function getGalleryPhotos(category: string): GalleryPhoto[] {
  const dir = path.join(process.cwd(), "public", "images", category);

  if (!fs.existsSync(dir)) return [];

  let captions: Record<string, string> = {};
  const captionsPath = path.join(dir, "captions.json");
  if (fs.existsSync(captionsPath)) {
    try {
      captions = JSON.parse(fs.readFileSync(captionsPath, "utf-8"));
    } catch {
      captions = {};
    }
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) =>
      VALID_EXTENSIONS.includes(path.extname(file).toLowerCase())
    )
    .sort();

  return files.map((file) => ({
    src: `/images/${category}/${file}`,
    alt:
      captions[file] ||
      path
        .parse(file)
        .name.replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));
}
