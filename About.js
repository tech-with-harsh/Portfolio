export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Me
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Hello! I'm <span className="font-semibold text-pink-500">Harsh Dinesh Gupta</span>, 
          a passionate engineering student with a strong interest in 
          <span className="text-pink-400"> IoT, Artificial Intelligence, and Automation.</span> 
          I love exploring how technology can simplify everyday challenges 
          and create innovative solutions for real-world problems.
        </p>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 mb-10 transition-transform hover:-translate-y-1 duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
            What Drives Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe learning never stops — every project and experience brings 
            new lessons that shape me as both a developer and a learner.  
            Collaboration, curiosity, and creativity are at the heart of everything I do.  
            My goal is to inspire and grow alongside people who share a vision for innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              💡 Skills & Interests
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Internet of Things (IoT) Projects</li>
              <li>UI Path Automation & Robotics</li>
              <li>Web Development (HTML, CSS, JS, React)</li>
              <li>Blockchain and Smart Contracts</li>
              <li>Data Structures & Problem Solving</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              🚀 Achievements & Goals
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Completed Automation Developer Associate Training</li>
              <li>Worked on ARIES v3 RISC-V board using RFID system</li>
              <li>Developed multiple academic IoT and automation projects</li>
              <li>Aiming to innovate impactful IoT-based systems</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mt-12 text-sm italic">
          “Let’s learn, inspire, and grow together.” 🌱
        </p>
      </div>
    </div>
  );
}
