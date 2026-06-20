const projects = [
  {
    title: "LisTrack",
    description:
      "A browser extension that tracks and records your web browsing activity — showing you insights on the websites you visit daily, weekly, and monthly. Install, click, and boom, you're tracking.",
    tags: ["JavaScript", "HTML", "Browser Extension"],
    gradient: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    link: "https://listrack-2.onrender.com/dashboard.html",
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
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    title: "Social Media Dashboard",
    description:
      "Real-time analytics dashboard for social media metrics with interactive charts, data exports, and multi-platform support.",
    tags: ["Next.js", "TypeScript", "D3.js", "WebSockets"],
    gradient: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
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
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
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
