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

export const contact = {
  email: "akmalshuhaimi19@gmail.com",
  phoneDisplay: "019-917 3797",
  phoneHref: "tel:+60199173797",
  whatsappHref: "https://wa.me/60199173797",
  location: "Kota Bharu, Kelantan",
  resumeHref: "/resume-akmal.pdf"
};

export const stats = [
  { label: "Major", value: "IT Infrastructure" },
  { label: "Status", value: "Seeking Internship" },
  { label: "CGPA", value: "2.90 Current" },
  { label: "Based In", value: "Kota Bharu" }
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
    title: "Data Hackathon 2024",
    subtitle: "UiTM Shah Alam participation",
    description:
      "Participated in a data-focused challenge that strengthened problem solving, teamwork, and presentation skills around practical technology use.",
    tags: ["Data", "Teamwork", "Problem Solving"],
    icon: BadgeCheck,
    gradient: "from-violet-300 via-fuchsia-300 to-rose-400"
  },
  {
    title: "KL3IS Futurist Inventor",
    subtitle: "Bronze Medal",
    description:
      "Earned a bronze medal in an invention and innovation setting, building early confidence in technical ideas and presentation.",
    tags: ["Innovation", "Presentation", "Bronze"],
    icon: ScanQrCode,
    gradient: "from-amber-200 via-lime-300 to-cyan-300"
  },
  {
    title: "Huawei ICT Academy 2024",
    subtitle: "Technology learning and exposure",
    description:
      "Expanded practical awareness of modern ICT tools, infrastructure concepts, and professional technology pathways.",
    tags: ["ICT", "Infrastructure", "Learning"],
    icon: Zap,
    gradient: "from-blue-300 via-indigo-300 to-cyan-300"
  }
];

export const skills = [
  { name: "IT Support", level: 90, icon: Headphones },
  { name: "Networking", level: 86, icon: Network },
  { name: "Windows", level: 88, icon: Server },
  { name: "macOS", level: 78, icon: HardDrive },
  { name: "Linux Basics", level: 72, icon: Terminal },
  { name: "Android Studio", level: 80, icon: Smartphone },
  { name: "Firebase", level: 76, icon: RadioTower },
  { name: "Java", level: 82, icon: Code2 },
  { name: "Python", level: 74, icon: Binary },
  { name: "HTML/CSS", level: 82, icon: Globe2 },
  { name: "JavaScript", level: 76, icon: Braces },
  { name: "SQL", level: 74, icon: Database },
  { name: "Git Basics", level: 70, icon: GitBranch },
  { name: "Power BI / Tableau", level: 66, icon: Wrench }
];

export const marqueeSkills = [
  "ITSM Basics",
  "Ticketing Systems",
  "SLA Awareness",
  "LAN/WiFi Setup",
  "Active Directory",
  "Office 365",
  "Endpoint Support",
  "Data Backup",
  "Incident Response",
  "Cybersecurity Basics",
  "Remote Support",
  "Asset Inventory"
];

export const experience = [
  {
    role: "IT Support Technician",
    company: "HAZA HOLDINGS SDN BHD",
    period: "December 2025 - February 2026 | Banting, Selangor",
    icon: HardDrive,
    points: [
      "Provided technical support for over 150 employees across hardware, software, and network issues.",
      "Installed, configured, and maintained Windows and macOS systems, printers, and peripheral devices.",
      "Managed user accounts and access permissions through Active Directory and Office 365.",
      "Monitored system performance, applied updates, supported regular data backups, and assisted department rollouts.",
      "Educated users on cybersecurity best practices and safe computing habits."
    ]
  },
  {
    role: "Internship",
    company: "Hospital Universiti Sains Malaysia (HUSM)",
    period: "August 2021 - February 2022 | Kota Bharu, Kelantan",
    icon: ShieldCheck,
    points: [
      "Assisted IT staff in troubleshooting and resolving hardware, software, and network issues.",
      "Supported installation and configuration of computers, printers, and network devices.",
      "Maintained asset inventory and documentation for IT equipment.",
      "Monitored system performance, supported routine maintenance checks, and helped with basic backup procedures.",
      "Provided user support for Microsoft Office, email configuration, and system login issues."
    ]
  }
];

export const education = [
  {
    school: "Universiti Teknologi MARA (UiTM) Shah Alam",
    location: "Shah Alam, Selangor",
    qualification: "Bachelor of Information Technology (Hons.)",
    period: "March 2023 - Present",
    details: ["IT Infrastructure major", "CGPA: 2.90 (Current)", "Final Year Project: AgroPulse"]
  },
  {
    school: "Politeknik Balik Pulau (PBU)",
    location: "Balik Pulau, Pulau Pinang",
    qualification: "Diploma in Information Technology",
    period: "June 2019 - February 2022",
    details: ["Networking major", "CGPA: 3.51"]
  },
  {
    school: "SMK Kota",
    location: "Kota Bharu, Kelantan",
    qualification: "Sijil Pelajaran Malaysia (SPM)",
    period: "January 2014 - December 2018",
    details: ["School Prefect: January 2017 - December 2018"]
  }
];
