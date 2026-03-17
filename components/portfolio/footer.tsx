'use client';

import { useLanguage } from '@/components/language-provider';

export function Footer() {
	const currentYear = new Date().getFullYear();
	const { t } = useLanguage();

	return (
		<footer className="py-8 px-6 border-t border-border">
			<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-sm text-muted-foreground">
					{currentYear} Alexis Valdivia. {t.footer.crafted}
				</p>

				<div className="flex items-center gap-6">
					<a
						href="https://github.com/alexisvaldivia"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors text-sm"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/alexis-valdivia/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-muted-foreground hover:text-foreground transition-colors text-sm"
					>
						LinkedIn
					</a>
				</div>
			</div>
		</footer>
	);
}
