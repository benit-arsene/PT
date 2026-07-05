export const cvData = {
  name: "Benit Arsene NSHUTIYIMANA",
  title: "Full Stack Developer & UI/UX Designer",
  location: "Kigali, Rwanda",
  email: "benitarsene.y@gmail.com",
  phone: "+250 799 347 619",
  github: "https://github.com/benit-arsene",
  summary:
    "Passionate Full Stack Developer and UI/UX Designer based in Kigali, Rwanda, with 2+ years of experience building modern web applications. I specialize in creating intuitive, user-centered digital experiences using React, Next.js, TypeScript, and Node.js. I bring a designer's eye to every interface, from wireframes to deployment, turning complex problems into simple, elegant solutions.",
  education: {
    degree: "Bachelor's in Information Systems",
    institution: "University of Rwanda",
    status: "Currently Studying",
    location: "Kigali, Rwanda",
  },
  skills: {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
    ],
    "Backend & DevOps": [
      "Node.js",
      "Express",
      "Python",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Docker",
      "CI/CD",
    ],
    Design: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
  },
  projects: [
    {
      title: "LisTrack",
      description:
        "A browser extension that tracks and records web browsing activity, providing insights on websites visited daily, weekly, and monthly.",
      tech: ["JavaScript", "HTML", "Browser Extension"],
      link: "https://listrack-2.onrender.com/dashboard.html",
    },
    {
      title: "AdMuter",
      description:
        "A lightweight Android utility that automatically detects and mutes Spotify audio ads for uninterrupted playback on the free tier.",
      tech: ["Kotlin", "Android", "Material Design 3"],
      link: "https://github.com/benit-arsene/admuter",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with drag-and-drop boards, real-time updates, team workspaces, and progress tracking.",
      tech: ["React", "Firebase", "Tailwind CSS", "DnD"],
      link: undefined as string | undefined,
    },
  ],
} as const;
