import type { Metadata } from "next";
import { getGalleryPhotos, CATEGORIES } from "@/lib/gallery";
import AdminPhotosManager from "@/components/AdminPhotosManager";

export const metadata: Metadata = {
  title: "Photo Manager | TCL Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPhotosPage() {
  const entries = await Promise.all(
    CATEGORIES.map(async (cat) => [cat, await getGalleryPhotos(cat)] as const)
  );
  const initialPhotos = Object.fromEntries(entries);

  return <AdminPhotosManager initialPhotos={initialPhotos} />;
}
