import Image from "next/image";
import { ImagePlus } from "lucide-react";
import type { GalleryPhoto } from "@/lib/gallery";

export default function PhotoGrid({
  photos,
  label,
  folderHint,
}: {
  photos: GalleryPhoto[];
  label: string;
  folderHint: string;
}) {
  if (photos.length === 0) {
    return (
      <div className="glass-card rounded-card aspect-square flex flex-col items-center justify-center gap-3 p-6 text-center border-dashed">
        <ImagePlus size={22} className="text-offwhite/30" />
        <div>
          <p className="text-sm font-medium text-offwhite/60">{label}</p>
          <p className="mt-1 text-xs text-offwhite/35 font-mono">
            {folderHint}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="glass-card rounded-card aspect-square relative overflow-hidden group"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
            <span className="font-mono text-xs text-offwhite/85">
              {photo.alt}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
