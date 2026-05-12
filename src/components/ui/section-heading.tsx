export function SectionHeading({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-cyan-200/70">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300">{copy}</p>
    </div>
  );
}
