import Image from "next/image";

const projects = [
  {
    title: "LisTrack",
    description:
      "A browser extension that tracks and records your web browsing activity — showing you insights on the websites you visit daily, weekly, and monthly. Install, click, and boom, you're tracking.",
    tags: ["JavaScript", "HTML", "Browser Extension"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    link: "https://listrack-2.onrender.com/",
    icon: (
      <div className="relative w-6 h-6">
        <Image
          src="/listrack-logo.png"
          alt="LisTrack Logo"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "AdMuter",
    description:
      "A lightweight Android utility that automatically detects and mutes Spotify audio ads, providing uninterrupted music playback on Spotify's free tier.",
    tags: ["Kotlin", "Android", "Material Design 3"],
    gradient: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/20",
    link: "https://github.com/benit-arsene/admuter",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
        />
      </svg>
    ),
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with drag-and-drop boards, real-time updates, team workspaces, and progress tracking.",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
    gradient: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "More Coming Soon",
    description:
      "I'm always building something new. Check back soon for my latest projects and experiments.",
    tags: ["Stay Tuned"],
    gradient: "from-gray-500/20 to-gray-500/5",
    borderColor: "border-gray-500/20",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Featured Projects</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => {
            const cardContent = (
              <>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-surface-lighter border border-border text-text-muted text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.link ? (
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-text-muted text-sm font-medium flex items-center gap-1">
                      Coming Soon
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </>
            );

            const cardClasses = `rounded-2xl border ${project.borderColor} bg-gradient-to-b ${project.gradient} p-6 sm:p-8 card-hover group`;

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClasses} cursor-pointer block`}
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.title} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
