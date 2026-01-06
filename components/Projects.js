"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MediTrace – AI-Powered Pharmaceutical Anti-Counterfeiting",
    description:
      "AI + blockchain-inspired system to verify medicine authenticity using QR codes, YOLOv8 visual verification, Random Forest anomaly detection, and cryptographic supply-chain tracking.",
    tech: ["FastAPI", "React", "YOLOv8", "PyTorch", "SQLite", "Three.js"],
    github: "https://github.com/omni-ar/MediTrace",
  },
  {
    title: "Automated Coding Practice & Evaluation Bot",
    description:
      "Telegram-based system delivering daily coding problems and auto-evaluating submissions in C++, Python, and Java using containerized execution.",
    tech: ["FastAPI", "Docker", "n8n", "Telegram Bot API"],
    github: "https://github.com/omni-ar/oa-reminder",
  },
  {
    title: "Time Travel Web App",
    description:
      "Interactive 3D web experience to explore timelines from 1100–2100 CE with secure authentication and premium diary features.",
    tech: ["React", "Three.js", "Node.js", "MongoDB", "JWT", "Razorpay"],
    github: "https://github.com/omni-ar/time_travel",
    live: "https://time-travel-ruby.vercel.app/",
  },
  {
    title: "Smart Traffic Management System",
    description:
      "Traffic signal simulation platform with real-time UI control and AI chatbot assistant for system interaction.",
    tech: ["Flask", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/omni-ar/traffic_management",
  },
  {
    title: "Personal Portfolio",
    description:
      "Animated developer portfolio featuring timeline-based projects, typewriter effects, and smooth micro-interactions.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/omni-ar/portfolio",
    live: "https://arjittripathi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-black">
          🚀 Projects
        </h2>

        <div className="space-y-12 relative border-l-4 border-indigo-500">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="ml-6 relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute left-[-14px] top-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></span>

              <h3 className="text-xl font-semibold text-black mb-2">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
