import { FaLinkedin,FaGithub,FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 py-12 ppx-4 border-t dark:order-gray-700">
            <div className="container mx-auto max-w-6xl">
                <div className="grid-cols- gap-12 mb-8">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-teal-500 leading-tight">
                            Let’s learn, inspire, and grow together.
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            
                            <span className="text-orange-500 font-semibold">
                                Connect me 
                            </span>
                        </p>
                        <div className="flexspace-x-4 mt-4">
                            <a href="mailto:harshg2096@gmail.com" className="text-red-500 hover:text-red-400 text-2xl"  title="email">
                                <FaEnvelope/>
                            </a>
                            <a href="https://github.com/tech-with-harsh" target="_blank" rel="nooperner noreferrer" className="text-gray-700 dark:text-gary-200 hover:text-teal-500 text-2xl"  title="GitHub">
                                <FaGithub/>
                            </a>
                            <a href="https://linkedin.com/in/npm" target="_blank" rel="nooperner noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl"  title="LinkedIn">
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 dark:text-gray-500 text-sm py-4 border-t dark:border-gray-700">
                    &copy;{new Date().getFullYear()} Harsh Gupta .All rights reserved.
                </div>
            </div>
        </footer>
    )
}