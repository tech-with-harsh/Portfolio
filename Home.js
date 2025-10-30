import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const skillCategories = [

	{
		title: "Development",
		icon: <FaLaptopCode />,
		skills: ["Python", "FastAPI", "React", "Rest API", "NumPY"],
		color: "bg-orange-400",
	},

	{
		title: "Data Structures & Algorithm",
		icon: <BsPeople />,
		skills: ["Problem Solving","Time & Space Complexity"],
		color: "bg-purple-400",
	},
];

export default function Home() {
	return (
		<section className="pt-20 sm:pt-16 md:pt-24 bg-cream dark:bg-gray-900 overflow-hidden">
			{/* Hero Section */}
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center">
					{/* Left Column */}
					<div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-textDark dark:text-gray-100">
							Hii, Myself{" "}
							<span className="text-teal-500">Harsh Gupta</span>
						</h1>
						<p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
							Exploring the world of{" "}
							<span className="text-orange-500 font-semibold">
								AI and Automation
							</span>{" "}

						</p>
						<p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-6">
							harshg2096@gmail.com
						</p>

						<div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10">
							<div>
								<h2 className="text-3xl font-bold text-textDark">
									{new Date().getFullYear() - 2024}+
								</h2>
								<p className="text-gray-600 text-sm sm:text-base">
									Intership
								</p>
							</div>

						</div>
					</div>

					{/* Right Column - Image */}
					<div className="md:w-1/2 relative">
						<div className="relative flex justify-center py-4 md:py-8">
							<img
								src="/dp.jpeg.png"
								alt="Profile"
								className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-pink-400 shadow-lg"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Skill Cards */}
			<div className="container mx-auto px-4 mt-20">
				<h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray-100 mb-8 text-center">
					Core Skill Areas
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
					{skillCategories.map((category, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
						>
							<div className="flex items-start space-x-6">
								<div
									className={`${category.color} p-4 rounded-full text-white text-2xl`}
								>
									{category.icon}
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-textDark dark:text-gray-100 mb-3">
										{category.title}
									</h3>
									<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
										{category.skills.join(", ")}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Experience Section */}
			<div className="container mx-auto px-4 mt-12 mb-20">
				<h2 className="text-2xl md:text-3xl font-bold text-textDark dark:text-gray-100 mb-6 text-center">
					Experience
				</h2>
				<div className="flex flex-col md:flex-row justify-center gap-8">
					{/* Experience Card 1 */}
					<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex-1 border-t-4 border-teal-400">
						<h3 className="text-lg font-bold text-teal-600 mb-1">
							Trainee Developer
						</h3>
						<p className="text-gray-700 dark:text-gray-200 font-medium mb-1">
							Apex Software Solutions
						</p>
						<p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
							2023 - 2024
						</p>
						<ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
							<li>Successfully Builded Face Detection System using Spoof Detection Technology</li>

						</ul>
					</div>


				</div>
			</div>
		</section>
	);
}