'use client';

import { useState } from 'react';
import { useLanguage } from '@/components/language-provider';

export function Contact() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitting(false);
		setSubmitted(true);
		setFormData({ name: '', email: '', message: '' });

		// Reset success message after 5 seconds
		setTimeout(() => setSubmitted(false), 5000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section id="contact" className="py-24 px-6">
			<div className="max-w-5xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16">
					<div>
						<p className="text-accent text-sm font-mono mb-2 tracking-wider">
							{t.contact.label}
						</p>
						<h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-6">
							{t.contact.title}
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-8">
							{t.contact.description}
						</p>

						<div className="space-y-4">
							<a
								href="mailto:hello@alexchen.dev"
								className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
							>
								<span className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
									<svg
										className="w-5 h-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect width="20" height="16" x="2" y="4" rx="2" />
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								</span>
								<span>alesixvaldivia@gmail.com</span>
							</a>

							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
							>
								<span className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
									<svg
										className="w-5 h-5"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</span>
								<span>github.com/alexisvaldiva</span>
							</a>

							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
							>
								<span className="w-10 h-10 flex items-center justify-center bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
									<svg
										className="w-5 h-5"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</span>
								<span>linkedin.com/in/alexis-valdivia/</span>
							</a>
						</div>
					</div>

					<div>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="name"
									className="block text-sm text-muted-foreground mb-2"
								>
									{t.contact.name}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
									placeholder={t.contact.namePlaceholder}
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm text-muted-foreground mb-2"
								>
									{t.contact.email}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
									placeholder={t.contact.emailPlaceholder}
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm text-muted-foreground mb-2"
								>
									{t.contact.message}
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
									placeholder={t.contact.messagePlaceholder}
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
							>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin w-4 h-4"
											viewBox="0 0 24 24"
											fill="none"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										{t.contact.sending}
									</>
								) : (
									t.contact.send
								)}
							</button>

							{submitted && (
								<p className="text-accent text-sm text-center">
									{t.contact.success}
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
