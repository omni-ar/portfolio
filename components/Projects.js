"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Time Travel Web App",
    description: "Explore any year from 1100 to 2100 with interactive timelines, 3D machine, and MongoDB backend.",
    github: "https://github.com/omni-ar/time_travel",
    live: "https://time-travel-ruby.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description: "Responsive, animated portfolio with typewriter, rotating icons, and timeline projects.",
    github: "https://github.com/omni-ar/portfolio",
    live: "https://arjittripathi.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">🚀 Projects</h2>
        <div className="space-y-10 relative border-l-4 border-indigo-500">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="ml-6 relative bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute left-[-14px] top-4 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white"></span>
              <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-100 transition"
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
