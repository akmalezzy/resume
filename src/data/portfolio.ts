import {
  BadgeCheck,
  Binary,
  Braces,
  Code2,
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
  { label: "Status", value: "Internship Ready" },
  { label: "CGPA", value: "2.90 Current" },
  { label: "Based In", value: "Kota Bharu" }
];

export const projects = [
  {
    title: "AgroPulse",
    subtitle: "IoT smart farming and irrigation automation",
    description:
      "Built an IoT farming prototype that monitors soil conditions, stores real-time data in Firebase, and automates irrigation decisions to reduce manual checking and improve response time.",
    tags: ["IoT", "Firebase", "Sensors", "Automation"],
    icon: Leaf,
    gradient: "from-emerald-300 via-cyan-300 to-sky-500"
  },
  {
    title: "Data Hackathon 2024",
    subtitle: "Data analysis and team problem solving",
    description:
      "Collaborated in a data-focused challenge to analyze information, identify practical insights, and present a clear solution under time constraints.",
    tags: ["Data Analysis", "Teamwork", "Presentation"],
    icon: BadgeCheck,
    gradient: "from-violet-300 via-fuchsia-300 to-rose-400"
  },
  {
    title: "KL3IS Futurist Inventor 2024",
    subtitle: "Bronze medal innovation showcase",
    description:
      "Presented a technology-based innovation at the Kuala Lumpur International Invention & Innovation Symposium and earned a bronze medal for concept execution.",
    tags: ["Innovation", "Technical Pitch", "Bronze Medal"],
    icon: ScanQrCode,
    gradient: "from-amber-200 via-lime-300 to-cyan-300"
  },
  {
    title: "Huawei ICT Academy 2024",
    subtitle: "ICT infrastructure learning milestone",
    description:
      "Completed academy exposure focused on ICT fundamentals, infrastructure concepts, and professional technology pathways relevant to enterprise support roles.",
    tags: ["ICT", "Infrastructure", "Professional Learning"],
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
    role: "IT Support Technician (Part-Time)",
    company: "HAZA HOLDINGS SDN BHD",
    period: "Dec 2025 - Feb 2026 | Banting, Selangor",
    icon: HardDrive,
    points: [
      "Supported 150+ users by troubleshooting endpoint, application, printer, and network connectivity issues.",
      "Installed, configured, and maintained Windows and macOS devices, peripherals, and user workstations.",
      "Managed user accounts, access permissions, and basic administration tasks in Active Directory and Office 365.",
      "Applied system updates, monitored device performance, verified backups, and assisted with department software rollouts.",
      "Promoted safe computing practices including password hygiene, phishing awareness, and secure device usage."
    ]
  },
  {
    role: "IT Support Technician Internship",
    company: "Hospital Universiti Sains Malaysia (HUSM)",
    period: "Aug 2021 - Feb 2022 | Kota Bharu, Kelantan",
    icon: ShieldCheck,
    points: [
      "Assisted the IT team with first-level troubleshooting for hardware, software, network, and login issues.",
      "Supported setup and configuration of desktops, printers, network devices, email accounts, and Microsoft Office.",
      "Maintained IT asset records, updated equipment documentation, and helped prepare devices for users.",
      "Performed routine maintenance checks, basic backup support, and security compliance tasks under supervision.",
      "Helped create employee accounts and assign access permissions according to internal procedures."
    ]
  }
];

export const education = [
  {
    school: "Universiti Teknologi MARA (UiTM) Shah Alam",
    location: "Shah Alam, Selangor",
    qualification: "Bachelor of Information Technology (Hons.)",
    period: "Mar 2023 - Present",
    details: [
      "Major: IT Infrastructure",
      "Current CGPA: 2.90",
      
    ]
  },
  {
    school: "Politeknik Balik Pulau (PBU)",
    location: "Balik Pulau, Pulau Pinang",
    qualification: "Diploma in Information Technology",
    period: "Jun 2019 - Feb 2022",
    details: ["Major: Networking", "CGPA: 3.51"]
  },
  {
    school: "SMK Kota",
    location: "Kota Bharu, Kelantan",
    qualification: "Sijil Pelajaran Malaysia (SPM)",
    period: "Jan 2014 - Dec 2018",
    details: ["School Prefect: Jan 2017 - Dec 2018"]
  }
];
