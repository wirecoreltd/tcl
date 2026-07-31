import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import PhotoGrid from "./PhotoGrid";
import { getGalleryPhotos } from "@/lib/gallery";

const CATEGORIES = [
  { key: "team-building", label: "Team Building" },
  { key: "training", label: "Training" },
  { key: "celebrations", label: "Celebrations" },
  { key: "office-life", label: "Office Life" },
];

export default async function LifeAtTCL() {
  const photosByCategory = await Promise.all(
    CATEGORIES.map(async (cat) => ({
      cat,
      photos: (await getGalleryPhotos(cat.key)).slice(0, 1),
    }))
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Life at TCL
            </span>
            <h2 className="mt-4 font-display font-semibold text-3xl lg:text-4xl text-offwhite tracking-tight">
              Behind Every Operation, a Team
            </h2>
            <p className="mt-5 text-offwhite/65 leading-relaxed max-w-lg">
              Behind every successful operation is an incredible team. At
              TCL, we believe collaboration, learning and recognition build
              lasting success.
            </p>
            <a
              href="/life-at-tcl"
              className="mt-8 inline-flex items-center gap-2 rounded-full glass-card px-6 py-3.5 text-sm font-semibold text-offwhite hover:border-cyan/50 transition-colors"
            >
              Discover Life at TCL
              <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {photosByCategory.map(({ cat, photos }) => (
                <PhotoGrid
                  key={cat.key}
                  photos={photos}
                  label={cat.label}
                  folderHint="Add photos from /admin/photos"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
