const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "VS Code",
      "Vercel",
    ],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
  },
  {
    title: "Backend & DevOps",
    skills: [
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
    color: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/20",
    textColor: "text-green-400",
  },
  {
    title: "Design",
    skills: [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills & Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`rounded-2xl border ${category.borderColor} bg-gradient-to-b ${category.color} p-6 sm:p-8 card-hover`}
            >
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-5 ${category.textColor}`}>
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-text-secondary text-sm"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${category.textColor} bg-current flex-shrink-0`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
