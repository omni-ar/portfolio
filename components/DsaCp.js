"use client";
import { motion } from "framer-motion";
import { Trophy, Code2, Brain, Network } from "lucide-react";

const highlights = [
  {
    title: "DSA Expertise",
    icon: <Brain className="w-8 h-8 text-indigo-600" />,
    description:
      "Strong in Arrays, Linked Lists, Trees, DP, and problem-solving using C++ & Java.",
  },
  {
    title: "Competitive Programming",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    description:
      "Participated in LeetCode, CodeChef contests. ",
  },
  {
    title: "Coding Profiles",
    icon: <Code2 className="w-8 h-8 text-green-500" />,
    description: "Active profiles on major platforms. Check my performance and submissions below.",
    links: {
      LeetCode: "https://leetcode.com/u/omni2003/",
      Codechef: "https://www.codechef.com/users/arjittripathi",
      HackerRank: "https://www.hackerrank.com/profile/arjittripathi311",
    },
  },
  {
    title: "Team & Hackathons",
    icon: <Network className="w-8 h-8 text-pink-500" />,
    description: "Collaborated in team coding rounds and time-limited hackathons.",
  },
];

export default function DsaCp() {
  return (
    <section id="dsacp" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          💻 DSA & Competitive Programming
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-gray-700 mb-2">{item.description}</p>
              {item.links && (
                <div className="flex gap-4 mt-2 flex-wrap">
                  {Object.entries(item.links).map(([name, link]) => (
                    <a
                      key={name}
                      href={link}
                      target="_blank"
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      🔗 {name}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
