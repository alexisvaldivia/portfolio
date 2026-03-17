'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';

type Language = 'en' | 'es';

interface Translations {
	nav: {
		about: string;
		projects: string;
		contact: string;
	};
	hero: {
		role: string;
		headline: string;
		headlineItalic: string;
		description: string;
		viewProjects: string;
		getInTouch: string;
	};
	about: {
		label: string;
		title: string;
		bio1: string;
		bio2: string;
		bio3: string;
		skills: string;
		experience: string;
		present: string;
	};
	projects: {
		label: string;
		title: string;
		other: string;
		live: string;
		code: string;
		taskflow: {
			title: string;
			description: string;
		};
		artisan: {
			title: string;
			description: string;
		};
		cloudsync: {
			title: string;
			description: string;
		};
		weather: {
			title: string;
			description: string;
		};
		editor: {
			title: string;
			description: string;
		};
		portfolio: {
			title: string;
			description: string;
		};
		budget: {
			title: string;
			description: string;
		};
	};
	contact: {
		label: string;
		title: string;
		description: string;
		name: string;
		namePlaceholder: string;
		email: string;
		emailPlaceholder: string;
		message: string;
		messagePlaceholder: string;
		send: string;
		sending: string;
		success: string;
	};
	footer: {
		crafted: string;
	};
}

const translations: Record<Language, Translations> = {
	en: {
		nav: {
			about: 'About me',
			projects: 'Projects',
			contact: 'Contact',
		},
		hero: {
			role: 'Full-Stack Web Developer',
			headlineItalic: 'Imagining, planning and building',
			headline: 'Turning ideas into reliable software.',
			description:
				"I'm a developer focused on creating useful and thoughtful solutions for users.",
			viewProjects: 'View projects',
			getInTouch: 'Contact',
		},
		about: {
			label: 'About',
			title: 'A bit about me',
			bio1: "I'm a full-stack web developer passionate about building products that make an impact. My journey in web development started over 5 years ago, and since then I've had the opportunity to build software using different technologies.",
			bio2: "I graduated as a programming technician in high school and I'm currently finishing my final year as a higher technician in full-stack development at my institution.",
			bio3: "When I'm not coding, I enjoy exploring new technologies or sharing a good mate.",
			skills: 'Skills & Technologies',
			experience: 'Experience',
			present: 'Present',
		},
		projects: {
			label: 'Selected Work',
			title: 'Featured Projects',
			other: 'Other projects',
			live: 'Demo',
			code: 'Code',
			taskflow: {
				title: 'Pre-Enrollment Module',
				description:
					'REST API designed to manage the initial registration process for applicants, allowing the submission of personal data, academic information, and the management of enrollment status.',
			},
			artisan: {
				title: 'Alto Valle Impulsa',
				description:
					'REST API developed to manage and expose information related to initiatives and projects from the Alto Valle region. The application implements HTTP endpoints that allow CRUD operations on system resources, facilitating integration with client applications such as web or mobile platforms.',
			},
			cloudsync: {
				title: 'Buena Vibra Fitness',
				description: 'Landing page developed for the Buena Vibra Fitness gym.',
			},
			weather: {
				title: 'Weather Dashboard',
				description:
					'Real-time weather visualization with location-based forecasts.',
			},
			editor: {
				title: 'Code Editor',
				description:
					'Browser-based code editor with syntax highlighting and live preview.',
			},
			portfolio: {
				title: 'Portfolio Generator',
				description:
					'CLI tool to generate portfolio websites from a JSON configuration.',
			},
			budget: {
				title: 'Expense Tracker',
				description:
					'Personal finance app with expense categorization and insights.',
			},
		},
		contact: {
			label: 'Contact',
			title: "Let's work together",
			description:
				"Do you have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or ways to be part of your vision.",
			name: 'Name',
			namePlaceholder: 'Your name',
			email: 'Email',
			emailPlaceholder: 'you@example.com',
			message: 'Message',
			messagePlaceholder: 'Tell me about your project...',
			send: 'Send message',
			sending: 'Sending...',
			success: "Thanks for reaching out! I'll get back to you soon.",
		},
		footer: {
			crafted: 'Crafted with care.',
		},
	},
	es: {
		nav: {
			about: 'Un poco de mí',
			projects: 'Proyectos',
			contact: 'Contacto',
		},
		hero: {
			role: 'Desarrollador web full-stack',
			headlineItalic: 'Imaginando, planificando y creando',
			headline: 'Siguiendo mi pasión, construyendo software.',
			description:
				'Soy un desarrollador que se esfuerza por crear soluciones útiles para los usuarios.',
			viewProjects: 'Ver proyectos',
			getInTouch: 'Contactar',
		},
		about: {
			label: 'Sobre mí',
			title: 'Un poco sobre mí',
			bio1: 'Soy un desarrollador web full-stack con pasión por construir productos que marquen una diferencia. Mi camino en el desarrollo web comenzó hace más de 5 años y, desde entonces, he tenido la oportunidad de crear software utilizando diferentes tecnologías.',
			bio2: 'Soy técnico en programación a nivel secundario y actualmente estoy cursando mi último año como técnico superior en desarrollo full-stack en mi institución.',
			bio3: 'Cuando no estoy programando, estoy explorando nuevas tecnologías o disfrutando de unos buenos mates.',
			skills: 'Habilidades y tecnologías',
			experience: 'Experiencia',
			present: 'Presente',
		},
		projects: {
			label: 'Trabajo seleccionado',
			title: 'Proyectos destacados',
			other: 'Otros proyectos',
			live: 'Demo',
			code: 'Código',
			taskflow: {
				title: 'Módulo de preinscripción',
				description:
					'API REST diseñada para gestionar el flujo de registro inicial de aspirantes, permitiendo la carga de datos personales, información académica y la administración de estados de inscripción.',
			},
			artisan: {
				title: 'Alto Valle Impulsa',
				description:
					'API REST desarrollada para gestionar y exponer información relacionada con iniciativas y proyectos del Alto Valle. La aplicación implementa endpoints HTTP que permiten realizar operaciones CRUD sobre los recursos del sistema, facilitando la integración con aplicaciones cliente como plataformas web o móviles.',
			},
			cloudsync: {
				title: 'Buena Vibra Fitness',
				description: 'Landing page para el gimnasio Buena Vibra Fitness.',
			},
			weather: {
				title: 'Panel del clima',
				description:
					'Visualización del clima en tiempo real con pronósticos basados en la ubicación.',
			},
			editor: {
				title: 'Editor de código',
				description:
					'Editor de código en el navegador con resaltado de sintaxis y vista previa en vivo.',
			},
			portfolio: {
				title: 'Generador de portafolios',
				description:
					'Herramienta CLI para generar sitios web de portafolios a partir de una configuración JSON.',
			},
			budget: {
				title: 'Rastreador de gastos',
				description:
					'Aplicación de finanzas personales con categorización de gastos e informes.',
			},
		},
		contact: {
			label: 'Contacto',
			title: 'Trabajemos juntos',
			description:
				'¿Tienes un proyecto en mente o simplemente quieres saludar? Siempre estoy abierto a discutir nuevas oportunidades, ideas creativas o formas de formar parte de tu visión.',
			name: 'Nombre',
			namePlaceholder: 'Tu nombre',
			email: 'Correo',
			emailPlaceholder: 'tu@ejemplo.com',
			message: 'Mensaje',
			messagePlaceholder: 'Cuéntame sobre tu proyecto...',
			send: 'Enviar mensaje',
			sending: 'Enviando...',
			success: '¡Gracias por contactarme! Te responderé pronto.',
		},
		footer: {
			crafted: 'Hecho con cuidado.',
		},
	},
};

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>('en');

	useEffect(() => {
		const saved = localStorage.getItem('language') as Language;
		if (saved && (saved === 'en' || saved === 'es')) {
			setLanguage(saved);
		}
	}, []);

	const handleSetLanguage = (lang: Language) => {
		setLanguage(lang);
		localStorage.setItem('language', lang);
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage: handleSetLanguage,
				t: translations[language],
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
