import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div
        className="absolute inset-0 bg-grid-fade pointer-events-none"
        aria-hidden
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-widest text-cyan uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-4 font-display font-semibold text-4xl sm:text-5xl leading-[1.1] tracking-tight text-offwhite">
            {title}
          </h1>
          {text && (
            <p className="mt-6 text-lg text-offwhite/65 leading-relaxed max-w-2xl mx-auto">
              {text}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
