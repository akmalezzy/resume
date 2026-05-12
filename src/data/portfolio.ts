import {
  BadgeCheck,
  Binary,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe2,
  HardDrive,
  Headphones,
  Leaf,
  Network,
  RadioTower,
  ScanQrCode,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Wrench,
  Zap
} from "lucide-react";

export const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];

export const stats = [
  { label: "Major", value: "IT Infrastructure" },
  { label: "Focus", value: "Cloud + Networks" },
  { label: "Builds", value: "Apps + IoT" },
  { label: "Mindset", value: "Support-first" }
];

export const techOrbit = [
  { icon: Network, label: "Networking" },
  { icon: Cloud, label: "Cloud" },
  { icon: Cpu, label: "IoT" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Terminal, label: "Linux" },
  { icon: Database, label: "SQL" }
];

export const projects = [
  {
    title: "AgroPulse",
    subtitle: "IoT-Based Smart Farming System with Automated Irrigation",
    description:
      "A connected smart farming platform designed to monitor soil conditions, automate irrigation decisions, and help growers respond faster with real-time environmental data.",
    tags: ["IoT", "Firebase", "Sensors", "Automation"],
    icon: Leaf,
    gradient: "from-emerald-300 via-cyan-300 to-sky-500"
  },
  {
    title: "Barber POS System",
    subtitle: "Modern appointment and transaction workflow",
    description:
      "A clean point-of-sale concept for barber operations, focused on faster service tracking, structured records, and a polished user flow for daily shop management.",
    tags: ["Java", "SQL", "Dashboard", "POS"],
    icon: BadgeCheck,
    gradient: "from-violet-300 via-fuchsia-300 to-rose-400"
  },
  {
    title: "Notify and Scan",
    subtitle: "QR Reminder App",
    description:
      "A mobile reminder experience that pairs QR scanning with notification workflows, helping users trigger context-aware reminders through a simple scan action.",
    tags: ["Android", "QR", "Notifications", "UX"],
    icon: ScanQrCode,
    gradient: "from-amber-200 via-lime-300 to-cyan-300"
  },
  {
    title: "Electricity Bill Calculator",
    subtitle: "Android utility for energy cost estimation",
    description:
      "A practical Android application for calculating electricity usage costs with a direct interface, clear inputs, and a reliable calculation flow.",
    tags: ["Android Studio", "Java", "Utility", "Mobile"],
    icon: Zap,
    gradient: "from-blue-300 via-indigo-300 to-cyan-300"
  }
];

export const skills = [
  { name: "Java", level: 86, icon: Code2 },
  { name: "Python", level: 78, icon: Binary },
  { name: "JavaScript", level: 82, icon: Braces },
  { name: "Firebase", level: 80, icon: RadioTower },
  { name: "Android Studio", level: 85, icon: Smartphone },
  { name: "Networking", level: 88, icon: Network },
  { name: "IT Support", level: 90, icon: Headphones },
  { name: "Linux", level: 76, icon: Terminal },
  { name: "SQL", level: 79, icon: Database },
  { name: "Git", level: 82, icon: GitBranch },
  { name: "HTML/CSS", level: 88, icon: Globe2 },
  { name: "Tailwind", level: 80, icon: Wrench },
  { name: "Next.js", level: 74, icon: Server }
];

export const marqueeSkills = [
  "Network Design",
  "Cloud Foundations",
  "Incident Response",
  "Mobile Apps",
  "Firebase",
  "IoT Telemetry",
  "Linux Admin",
  "Secure Systems",
  "Modern Web"
];

export const experience = [
  {
    role: "IT Support Technician",
    company: "HAZA HOLDINGS SDN BHD",
    period: "Professional Experience",
    icon: HardDrive,
    points: [
      "Supported users, devices, and day-to-day IT operations with a calm, service-oriented workflow.",
      "Troubleshot hardware, software, connectivity, and access issues across operational environments.",
      "Built practical discipline in documentation, escalation, and maintaining reliable systems."
    ]
  },
  {
    role: "Internship",
    company: "Hospital Universiti Sains Malaysia (HUSM)",
    period: "Internship",
    icon: ShieldCheck,
    points: [
      "Gained exposure to IT support practices inside a high-responsibility healthcare environment.",
      "Assisted with technical tasks where reliability, clarity, and response time matter.",
      "Strengthened professional communication while learning from real infrastructure workflows."
    ]
  }
];
