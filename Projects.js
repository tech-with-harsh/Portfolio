export default function Projects() {
  const projects = [
    {
      title: "Smart Irrigation System (IoT)",
      description:
        "An IoT-based solution that automates water supply using soil moisture and weather data, conserving water efficiently.",
      tech: ["Arduino", "NodeMCU", "Blynk App"],
    },
    {
      title: "Blockchain-Based Certificate Verification",
      description:
        "A decentralized web app to store and verify academic certificates securely using blockchain technology.",
      tech: ["Solidity", "Web3.js", "Ethereum"],
    },
    {
      title: "AI-Powered Chatbot for Students",
      description:
        "An intelligent chatbot that helps students with queries about courses, assignments, and events in real-time.",
      tech: ["Python", "TensorFlow", "Dialogflow"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Featured Projects
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-10 text-center max-w-2xl">
        Explore some of the innovative projects developed by our students, combining creativity, logic, and technology.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-pink-100 dark:bg-pink-700 text-pink-600 dark:text-white px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-500 dark:text-gray-400 mt-12 text-sm">
        More exciting projects coming soon 🚀
      </p>
    </div>
  );
}
