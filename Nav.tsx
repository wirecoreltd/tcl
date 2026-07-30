import {
  Headset,
  Settings2,
  FileStack,
  ShieldAlert,
  Users2,
  BarChart3,
  Workflow,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Headset,
    title: "Customer Support",
    text: "Providing professional customer assistance through multiple communication channels while ensuring excellent customer satisfaction.",
  },
  {
    icon: Settings2,
    title: "Operations Management",
    text: "Managing daily operational activities to ensure smooth and uninterrupted business performance.",
  },
  {
    icon: FileStack,
    title: "Back Office",
    text: "Handling administrative operations, verification processes and transaction support.",
  },
  {
    icon: ShieldAlert,
    title: "Fraud & Risk",
    text: "Monitoring suspicious activities and ensuring operational security.",
  },
  {
    icon: Users2,
    title: "CRM Operations",
    text: "Supporting customer engagement through campaigns, retention strategies and communication.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    text: "Delivering reports, dashboards and KPI monitoring to support informed business decisions.",
  },
  {
    icon: Workflow,
    title: "Process Improvement",
    text: "Analyzing workflows to improve efficiency and automate repetitive tasks.",
  },
];

export default function ServicesContent() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal delay={i * 60} key={s.title}>
              <div className="glass-card rounded-card p-8 h-full transition-all duration-300">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-electric/15 text-electric-light mb-6">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-offwhite">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-offwhite/60 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
