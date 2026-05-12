import { SectionHeading } from "@/components/ui/section-heading";
import { education, stats } from "@/data/portfolio";
import { BrainCircuit, Headphones, Network, Shield } from "lucide-react";

export function About() {
  const pillars = [
    { icon: Headphones, label: "IT Support", copy: "Troubleshooting hardware, software, network, login, and user access issues with clear communication." },
    { icon: Network, label: "Networking", copy: "Comfortable with LAN/WiFi setup, IP addressing, DHCP, DNS, and basic ITSM concepts." },
    { icon: BrainCircuit, label: "Development", copy: "Hands-on with Android Studio, Firebase, Java, Python, HTML/CSS, JavaScript, and SQL." },
    { icon: Shield, label: "Reliability", copy: "Aware of endpoint protection, regular updates, safe passwords, backups, and service lifecycle practices." }
  ];

  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="IT infrastructure student ready for internship."
        copy="A web-friendly resume based on hands-on support experience, networking studies, and practical development projects."
      />

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal glass rounded-[28px] p-6 sm:p-8">
          <p className="text-lg leading-9 text-slate-200">
            I am Muhammad Akmal Nazmi Bin Shuhaimi, a proactive Bachelor of Information Technology
            (Hons.) student majoring in IT Infrastructure at UiTM Shah Alam. I am seeking an internship
            opportunity to apply my knowledge in IT support, networking, programming, and mobile
            application development.
          </p>
          <p className="mt-6 leading-8 text-slate-400">
            I am familiar with IT Service Management, ticketing systems, SLA awareness, and service
            lifecycle processes. My strengths are problem solving, troubleshooting, communication,
            teamwork, and eagerness to keep growing in IT infrastructure.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
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

      <div className="reveal mt-6 glass rounded-[28px] p-6 sm:p-8">
        <h3 className="text-2xl font-black text-white">Education</h3>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {education.map((item) => (
            <article key={item.school} className="rounded-3xl border border-white/10 bg-black/24 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">{item.period}</p>
              <h4 className="mt-3 text-lg font-bold text-white">{item.school}</h4>
              <p className="mt-1 text-sm text-violet-100/80">{item.location}</p>
              <p className="mt-4 font-semibold text-slate-200">{item.qualification}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
