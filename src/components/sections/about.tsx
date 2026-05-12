import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/data/portfolio";
import { BrainCircuit, Cloud, Network, Shield } from "lucide-react";

export function About() {
  const pillars = [
    { icon: Network, label: "Networking", copy: "Designing dependable connectivity and understanding the systems behind uptime." },
    { icon: Cloud, label: "Cloud", copy: "Exploring scalable platforms, deployment workflows, and modern infrastructure thinking." },
    { icon: BrainCircuit, label: "AI", copy: "Curious about intelligent tools that improve operations, support, and decision-making." },
    { icon: Shield, label: "Reliability", copy: "Grounded by IT support experience where clear troubleshooting matters every day." }
  ];

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Infrastructure mindset, developer energy."
        copy="A professional introduction to the person behind the systems, apps, and experiments."
      />

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal glass rounded-[28px] p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-200">
            I am Muhammad Akmal Nazmi, an IT Infrastructure student at UiTM Shah Alam with hands-on
            exposure in IT support, mobile application development, and IoT-based problem solving. My work
            sits at the intersection of reliable systems and practical digital products, from troubleshooting
            real user environments to building apps that make daily tasks more intelligent.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            I am especially passionate about networking, cloud technologies, AI-enhanced workflows, and
            modern development practices. My goal is to grow into an IT engineer who can design, support,
            and improve systems that people can trust.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/60">{stat.label}</p>
                <p className="mt-2 text-lg font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                data-parallax={index % 2 === 0 ? "22" : "-18"}
                className="reveal premium-border rounded-[28px] p-px"
              >
                <div className="h-full rounded-[27px] border border-white/10 bg-[#071018]/80 p-6 backdrop-blur-xl transition duration-300 hover:bg-[#0b1722]/90">
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.label}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{pillar.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
