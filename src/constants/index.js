import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "HTML", icon: c },
  { title: "Css", icon: cpp },
  { title: "React", icon: python },
  { title: "Java", icon: java },
  { title: "Nodejs", icon: nodejs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Frontend Development Intern",
    company_name: "WebCraft Studios (Bahria Town, Rawalpindi)",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Developed responsive web interfaces using React.js and Tailwind CSS",
      "Implemented AWS cloud deployment for frontend applications",
      "Optimized UI performance using Chrome DevTools and Lighthouse",
      "Collaborated on team projects using Git version control"
    ],
  },
  {
    title: "Web Development Trainee",
    company_name: "PixelForge Technologies (F-8, Islamabad)",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2024 - Sep 2024",
    points: [
      "Built interactive web components with JavaScript ES6+",
      "Created mobile-first layouts using CSS Grid and Flexbox",
      "Learned modern debugging techniques and browser compatibility fixes",
      "Developed accessible UI components following WCAG guidelines"
    ],
  },
  {
    title: "Creative Frontend Engineer",
    company_name: "TechVista Innovations (Rawalpindi IT Park)",
    icon: edunet,
    iconBg: "#161329",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Crafted immersive interactive dashboards with particle.js animations and 3D CSS transforms",
      "Designed a mental wellness portal featuring micro-interactions and emotion-driven color theming",
      "Pioneered a 'digital zen garden' UI concept where user interactions grow visual elements",
      "Built a real-time data playground with draggable SVG visualizations and canvas animations",
      "Developed a 'focus mode' that adapts typography and layout based on user engagement metrics"
    ],
  },
];

export const projects = [
  {
    name: "College Management System",
    description:
      "A web application to manage college operations including student enrollment, course management, and faculty assignments.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "JS", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/yourusername/college-management-system",
    live_demo_link: "#",
    buttons: [
      {
        text: "See Project",
        link: "#",
        type: "primary"
      },
      {
        text: "View Code",
        link: "https://github.com/yourusername/college-management-system",
        type: "secondary"
      }
    ]
  },
  {
    name: "Perfume Website",
    description:
      "A fully functional e-commerce website built with React and Node.js, featuring product listings, shopping cart, and user authentication.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: sketcher,
    source_code_link: "https://github.com/yourusername/perfume-website",
    live_demo_link: "#",
    buttons: [
      {
        text: "See Demo",
        link: "#",
        type: "primary"
      },
      {
        text: "GitHub",
        link: "https://github.com/yourusername/perfume-website",
        type: "secondary"
      }
    ]
  },
];
