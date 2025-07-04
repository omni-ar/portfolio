"use client";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 text-center md:text-left md:grid md:grid-cols-2 md:gap-8"
    >
      {/* Left: Text and Buttons */}
      <div className="flex flex-col justify-center items-center md:items-center md:justify-center min-h-[60vh]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <Typewriter
            words={["Hi, I'm Arjit", "Full Stack Developer", "ML Enthusiast"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>
        <p className="max-w-xl mb-6 text-lg text-gray-700">
          Passionate about building amazing web experiences. Skilled in full
          stack development, ML & DSA.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            download
            className="bg-white text-indigo-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-indigo-100 transition"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/omni-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arjit-tripathi-213b4a292/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      {/* Right: Profile Picture */}
      <div className="flex justify-center items-center mt-10 md:mt-0">
        <img
          src="/profile.jpg"
          alt="Arjit"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl neon-glow"
        />
      </div>
    </section>
  );
}
