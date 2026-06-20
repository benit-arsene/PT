import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      {/* Background decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block ml-12" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">About Me</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Info */}
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              I&apos;m a{" "}
              <span className="text-primary font-semibold">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-primary font-semibold">UI/UX Designer</span>{" "}
              based in{" "}
              <span className="text-primary font-semibold">Kigali, Rwanda</span>
              , passionate about building digital experiences that are both
              functional and beautiful.
            </p>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              My journey into tech started with curiosity about how websites
              work and that curiosity grew into a full-fledged career crafting
              modern web applications. I specialize in building full-stack
              solutions with{" "}
              <span className="text-primary font-semibold">
                React, Next.js, TypeScript, and Node.js
              </span>
              , while bringing a designer&apos;s eye to every interface I
              create.
            </p>

            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              What sets me apart is my dual perspective: I don&apos;t just write
              code that works, I design experiences that feel right. From
              wireframes to deployment, I care about every layer of the stack
              and every pixel on the screen. I&apos;m always exploring new tools
              and frameworks, and I love turning complex problems into simple,
              elegant solutions.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-surface-light border border-border text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  2+
                </div>
                <div className="text-text-muted text-xs sm:text-sm mt-1">
                  Years Coding
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-light border border-border text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  15+
                </div>
                <div className="text-text-muted text-xs sm:text-sm mt-1">
                  Projects
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-light border border-border text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  5+
                </div>
                <div className="text-text-muted text-xs sm:text-sm mt-1">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image/Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 group">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-float group-hover:border-primary/30 transition-colors duration-500" />
              <div
                className="absolute inset-4 rounded-full border border-primary/10 animate-float group-hover:border-primary/20 transition-colors duration-500"
                style={{ animationDelay: "-2s" }}
              />
              <div
                className="absolute inset-8 rounded-full border border-primary/5 animate-float group-hover:border-primary/10 transition-colors duration-500"
                style={{ animationDelay: "-4s" }}
              />

              {/* Avatar */}
              <div className="absolute inset-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/20 group-hover:shadow-primary/30 transition-all duration-500 bg-surface-lighter">
                <Image
                  src="/profile.jpeg"
                  alt="Benit Arsene NSHUTIYIMANA"
                  fill
                  className="object-cover origin-center scale-110 group-hover:scale-115 transition-transform duration-700"
                  sizes="(max-width: 768px) 208px, 240px"
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
