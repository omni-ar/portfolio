import {
  FileCode2,
  LayoutDashboard,
  Code,
  Braces,
  Globe,
  Server,
  Database,
  GitBranch,
  Settings,
} from "lucide-react";

const skills = [
  { name: "Frontend", icon: <FileCode2 className="w-10 h-10 text-orange-500" /> },
  { name: "UI/UX", icon: <LayoutDashboard className="w-10 h-10 text-blue-500" /> },
  { name: "JavaScript", icon: <Code className="w-10 h-10 text-yellow-500" /> },
  { name: "React", icon: <Braces className="w-10 h-10 text-cyan-500" /> },
  { name: "Next.js", icon: <Globe className="w-10 h-10 text-black" /> },
  { name: "Node.js", icon: <Server className="w-10 h-10 text-green-600" /> },
  { name: "MongoDB", icon: <Database className="w-10 h-10 text-emerald-600" /> },
  { name: "Git", icon: <GitBranch className="w-10 h-10 text-red-500" /> },
  { name: "Tailwind CSS", icon: <Settings className="w-10 h-10 text-blue-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 shadow-md rounded-xl hover:rotate-3 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
            >
              {skill.icon}
              <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
