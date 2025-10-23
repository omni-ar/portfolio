import {
  FileCode2,
  Server,
  Database,
  GitBranch,
  Code,
  Settings,
} from "lucide-react";

const skills = [
  // Time Travel Web App
  { name: "JavaScript (ES6+)", icon: <Code className="w-10 h-10 text-yellow-500" /> },
  { name: "Node.js + Express", icon: <Server className="w-10 h-10 text-green-600" /> },
  { name: "MongoDB", icon: <Database className="w-10 h-10 text-emerald-600" /> },
  { name: "Three.js", icon: <Settings className="w-10 h-10 text-indigo-500" /> },

  // Smart Traffic Management System
  { name: "Python (Flask)", icon: <Code className="w-10 h-10 text-blue-600" /> },
  { name: "JavaScript (Frontend Logic)", icon: <Code className="w-10 h-10 text-yellow-400" /> },

  // Automated Coding Practice Bot
  { name: "Python", icon: <Code className="w-10 h-10 text-blue-600" /> },
  { name: "FastAPI", icon: <Server className="w-10 h-10 text-green-500" /> },
  { name: "Docker", icon: <Settings className="w-10 h-10 text-gray-600" /> },
  { name: "n8n Workflow", icon: <Settings className="w-10 h-10 text-indigo-400" /> },
  { name: "Telegram Bot API", icon: <Globe className="w-10 h-10 text-blue-400" /> },

  // Cross-project / general
  { name: "Git & GitHub", icon: <GitBranch className="w-10 h-10 text-red-500" /> },
  { name: "REST APIs & JWT Auth", icon: <FileCode2 className="w-10 h-10 text-orange-500" /> },
  { name: "Problem Solving & CP", icon: <Settings className="w-10 h-10 text-orange-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-md rounded-xl hover:rotate-3 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
            >
              {skill.icon}
              <p className="mt-2 text-sm font-medium text-gray-700 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
