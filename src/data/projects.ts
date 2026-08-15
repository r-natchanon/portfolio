import type { Project } from "@/types";

const details = {
  challenge: "Managing changing requirements while keeping the experience simple.",
  solution: "Built modular features around clear data flows and reusable interfaces.",
  learning: "Strengthened practical full-stack development and collaboration skills.",
  screenshots: [],
};

export const projects: Project[] = [
  {
    title: "Computer Equipment E-Commerce Website",
    description: "A web application for browsing computer hardware, managing a shopping cart, and placing online orders efficiently.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    features: ["Authentication and session management", "Product catalog and dynamic filtering", "Shopping cart and order processing"],
    githubUrl: "https://github.com/r-natchanon/E-commerce-website",
    demoUrl: "https://ragearsite.42web.io/",
    image: "/images/projects/PreviewE-CommerceWebsite-v2.png",
    featured: true,
    details,
  },
  {
    title: "Loan Calculator System",
    description: "An intuitive financial tool that helps users estimate loan repayments, compare interest options, and visualize payment schedules.",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    features: ["Real-time installment and interest calculation", "Detailed principal and interest breakdown", "Exportable calculation reports PDF"],
    githubUrl: "https://github.com/r-natchanon/Loan-Calculator",
    demoUrl: "https://loan-calculator-gold-eight.vercel.app",
    image: "/images/projects/PreviewLoan-Calculator.png",
    featured: true,
    details,
  },
  {
    title: "Cross-Platform E-Commerce Mobile App",
    description: "A responsive Flutter shopping application for product discovery, cart management, and online checkout.",
    technologies: ["Flutter", "Dart", "Provider", "Database"],
    features: ["User profiles and authentication", "Search, filters, and categories", "Cart and checkout flow"],
    githubUrl: "https://github.com/r-natchanon/application-e-commerce",
    demoUrl: "https://application-e-commerce-ssqz.vercel.app/",
    image: "/images/projects/PreviewFlutter.png",
    details,
  },
  {
    title: "มื้อนี้หาร – Group Bill Splitting & Tracking App",
    description: "A full-stack web application for splitting bills, tracking shared expenses among friends, and uploading payment receipts seamlessly.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase Storage", "Prisma ORM", "PostgreSQL"],
    features: ["Smart Bill Splitting: Calculate and split group expenses accurately with ease.", "Database Integration: Manage users, bills, and transactions using Supabase (PostgreSQL) and Prisma ORM.", "Payment & Slip Management: Upload and track payment receipts for transparent group tracking."],
    githubUrl: "https://github.com/r-natchanon/Share-Bill",
    demoUrl: "https://share-bill-chi-brown.vercel.app/",
    image: "/images/projects/PreviewShare-Bill.png",
    details,
  },
];
