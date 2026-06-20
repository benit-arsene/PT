"use client";

import { useEffect, useState } from "react";

const roles = ["Full Stack Developer", "UI/UX Designer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in-up">
          <span className="text-text-primary">Hi, I&apos;m </span>
          <span className="gradient-text">Benit Arsene</span>
          <br />
          <span className="text-text-primary">NSHUTIYIMANA</span>
        </h1>

        {/* Typing animation for roles */}
        <div className="h-12 sm:h-14 flex items-center justify-center mb-8">
          <span className="text-lg sm:text-2xl text-text-secondary">
            <span className="text-text-muted">&lt;</span>
            <span className="text-primary font-mono">{displayText}</span>
            <span className="inline-block w-0.5 h-6 sm:h-7 bg-primary ml-0.5 animate-pulse" />
            <span className="text-text-muted"> /&gt;</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          I craft elegant digital experiences that blend seamless functionality with
          stunning design. Passionate about building products that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-all duration-300 animate-pulse-glow"
          >
            View My Work
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-xl border border-border text-text-primary font-semibold text-base hover:bg-surface-lighter hover:border-primary/30 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
