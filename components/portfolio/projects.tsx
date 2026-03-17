'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

export function Projects() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const { t } = useLanguage();

	const featuredProjects = [
		{
			title: t.projects.taskflow.title,
			description: t.projects.taskflow.description,
			image: '/projects/pre-enrollment-module.png',
			tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
			liveUrl: '',
			codeUrl: 'https://github.com/alexisvaldivia/modulo-pre-inscripcion-its',
		},
		{
			title: t.projects.artisan.title,
			description: t.projects.artisan.description,
			image: '/projects/alto-valle-impulsa.png',
			tags: [
				'JavaScript',
				'Node.js',
				'MariaDB',
				'Sequelize',
				'Socket.io',
				'JWT',
			],
			liveUrl: '',
			codeUrl: 'https://github.com/alexisvaldivia/alto-valle-impulsa',
		},
		{
			title: t.projects.cloudsync.title,
			description: t.projects.cloudsync.description,
			image: '/projects/buena-vibra-fitness.webp',
			tags: ['React.js', 'Tailwind CSS'],
			liveUrl: 'https://buena-vibra-fitness.pages.dev/',
			codeUrl: 'https://github.com/alexisvaldivia/buena-vibra-fitness',
		},
	];

	const otherProjects = [
		{
			title: t.projects.weather.title,
			description: t.projects.weather.description,
			tags: ['React', 'API', 'Chart.js'],
		},
		{
			title: t.projects.editor.title,
			description: t.projects.editor.description,
			tags: ['TypeScript', 'Monaco', 'WebSockets'],
		},
		{
			title: t.projects.portfolio.title,
			description: t.projects.portfolio.description,
			tags: ['Node.js', 'CLI', 'Templates'],
		},
		{
			title: t.projects.budget.title,
			description: t.projects.budget.description,
			tags: ['React Native', 'SQLite', 'Charts'],
		},
	];

	return (
		<section id="projects" className="py-24 px-6">
			<div className="max-w-5xl mx-auto">
				<div className="mb-16">
					<p className="text-accent text-sm font-mono mb-2 tracking-wider">
						{t.projects.label}
					</p>
					<h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
						{t.projects.title}
					</h2>
				</div>

				{/* Featured Projects */}
				<div className="space-y-24">
					{featuredProjects.map((project, index) => (
						<div
							key={project.title}
							className="group"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div
								className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
							>
								<div
									className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}
								>
									<div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
										<div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent" />
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										<div
											className={`absolute inset-0 bg-background/50 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100 md:opacity-0'}`}
										/>
									</div>
								</div>
								<div
									className={`order-1 ${index % 2 === 1 ? 'md:order-2 md:text-right' : 'md:order-1'}`}
								>
									<h3 className="text-2xl font-medium text-foreground mb-3">
										{project.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed mb-4">
										{project.description}
									</p>
									<div
										className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}
									>
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
											>
												{tag}
											</span>
										))}
									</div>
									<div
										className={`flex items-center gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}
									>
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-sm text-foreground hover:text-accent transition-colors"
										>
											{t.projects.live}
											<svg
												className="ml-1 w-4 h-4"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path d="M7 17L17 7M17 7H7M17 7V17" />
											</svg>
										</a>
										<a
											href={project.codeUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center text-sm text-foreground hover:text-accent transition-colors"
										>
											{t.projects.code}
											<svg
												className="ml-1 w-4 h-4"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
											>
												<path d="M7 17L17 7M17 7H7M17 7V17" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/*

				<div className="mt-32">
					<h3 className="text-xl font-medium text-foreground mb-8">
						{t.projects.other}
					</h3>
					<div className="grid md:grid-cols-2 gap-4">
						{otherProjects.map((project) => (
							<div
								key={project.title}
								className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
							>
								<h4 className="text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
									{project.title}
								</h4>
								<p className="text-sm text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs font-mono text-muted-foreground"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

        */}
			</div>
		</section>
	);
}
