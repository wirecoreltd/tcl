import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import PhotoGrid from "./PhotoGrid";
import { getGalleryPhotos } from "@/lib/gallery";

const GALLERY_CATEGORIES = [
  { key: "team-building", label: "Team Building" },
  { key: "training", label: "Training" },
  { key: "office-life", label: "Office Life" },
  { key: "celebrations", label: "Events" },
];

const EVENT_TAGS = ["End of Year Party", "Sports", "Community Activities"];

const PERKS = [
  "Employee Benefits",
  "Professional Development",
  "Training Programs",
  "Career Growth",
  "Performance Recognition",
  "Friendly Environment",
  "International Exposure",
  "Modern Workspace",
  "Team Events",
];

const TESTIMONIALS = [
  {
    quote:
      "What I appreciate most here is that ideas get heard, whichever team you're on. There's real room to grow.",
    role: "Operations Officer",
  },
  {
    quote:
      "The training when I joined was thorough, and it hasn't stopped since — there's always a next skill to build.",
    role: "Customer Support Team Lead",
  },
  {
    quote:
      "Working across time zones with an international team keeps things interesting, and the team culture makes the pace worth it.",
    role: "Business Analyst",
  },
];

export default async function LifeAtTCLContent() {
  const photosByCategory = await Promise.all(
    GALLERY_CATEGORIES.map(async (cat) => ({
      cat,
      photos: (await getGalleryPhotos(cat.key)).slice(0, 1),
    }))
  );

  return (
    <>
      <section className="pb-4">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-offwhite/65 leading-relaxed">
              At TCL, our people are at the heart of everything we do. We
              believe in teamwork, continuous learning, respect and
              creating an environment where everyone can grow
              professionally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="mb-4 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              Gallery
            </h2>
            <div className="flex flex-wrap gap-2">
              {EVENT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-offwhite/50 border border-navy-line rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {photosByCategory.map(({ cat, photos }) => (
              <Reveal key={cat.key}>
                <PhotoGrid
                  photos={photos}
                  label={cat.label}
                  folderHint="Add photos from /admin/photos"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-navy-deep">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-xl mb-10">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Recognition
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              What working here looks like
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {PERKS.map((perk, i) => (
              <Reveal delay={i * 40} key={perk}>
                <span className="inline-block glass-card rounded-full px-4 py-2 text-sm text-offwhite/75">
                  {perk}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="max-w-xl mb-10">
            <span className="font-mono text-xs tracking-widest text-cyan uppercase">
              Employee Testimonials
            </span>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl text-offwhite tracking-tight">
              In their own words
            </h2>
            <p className="mt-2 text-xs text-offwhite/35 font-mono">
              Sample quotes — swap in real testimonials from your team.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal delay={i * 90} key={t.role}>
                <div className="glass-card rounded-card p-7 h-full">
                  <Quote size={20} className="text-cyan/60" />
                  <p className="mt-4 text-sm text-offwhite/70 leading-relaxed">
                    {t.quote}
                  </p>
                  <p className="mt-5 font-mono text-xs text-offwhite/45">
                    {t.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
