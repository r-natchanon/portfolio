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
    title: "Restaurant Ordering System",
    description: "A restaurant platform supporting online orders, reservations, and QR ordering directly at the table.",
    technologies: ["React", "Node.js", "REST API", "Database"],
    features: ["Online food ordering", "Table reservations", "QR ordering and order management"],
    githubUrl: "https://github.com/r-natchanon/Restaurant-Ordering-System",
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
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio designed for internship opportunities and future job applications.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Bits"],
    features: ["Responsive interface", "Data-driven project content", "Accessible motion and navigation"],
    githubUrl: "https://github.com/r-natchanon/Personal-Portfolio-Website",
    details,
  },
];
