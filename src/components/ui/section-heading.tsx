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
    <div className="reveal mx-auto mb-9 max-w-3xl text-center sm:mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/70 sm:mb-4 sm:tracking-[0.5em]">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8">{copy}</p>
    </div>
  );
}
