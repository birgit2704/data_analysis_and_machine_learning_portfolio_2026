// src/data/portfolioData.js

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
      touch: "Get in Touch",
    },
    personalInfo: {
      name: "Software & Data Professional",
      title: "Software Engineer & Data Analyst",
      badge: "Available for new projects & roles",
      heroHeadline: "Building intelligent apps &",
      heroSubline: "data-driven solutions.",
      bio: "Passionate about bridging full-stack software development and data analytics. Specialized in building scalable web applications, robust data pipelines, and machine learning solutions.",
      email: "contact@example.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    skillsHeader: {
      title: "Technical Skills",
      subtitle: "Tools, languages, and technical competencies.",
    },
    skills: {
      "Software Development": [
        "React",
        "JavaScript (ES6+)",
        "Python",
        "Tailwind CSS",
        "HTML5/CSS3",
        "REST APIs",
      ],
      "Data & Analytics": [
        "Pandas",
        "NumPy",
        "SQL",
        "Data Visualization",
        "Machine Learning Basics",
        "Exploratory Data Analysis",
      ],
      "Tools & Infrastructure": [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Vite",
        "PostgreSQL",
        "Linux / WSL",
      ],
    },
    projectsHeader: {
      title: "Featured Projects",
      subtitle:
        "A selection of recent work across software engineering and analytics.",
    },
    projects: [
      {
        id: 1,
        title: "Data Analysis & Quality Trends Explorer",
        description:
          "An end-to-end data processing and visualization pipeline analyzing multi-decade public metrics to uncover underlying trend patterns.",
        tags: ["Python", "Pandas", "Seaborn", "SQL", "React"],
        outcomes: [
          "Cleaned and combined structured datasets across historical sources",
          "Built dynamic data summaries highlighting core shift indicators",
          "Integrated responsive frontend dashboard components",
        ],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
      },
      {
        id: 2,
        title: "Interactive Full-Stack Web Application",
        description:
          "A fast, modular web app designed with modern React components, structured API integration, and clean state management.",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
        outcomes: [
          "Designed modular UI components adhering to accessibility guidelines",
          "Implemented smooth state transitions and fast load times",
          "Configured robust client-side routing and CSS architecture",
        ],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
      },
    ],
    contact: {
      title: "Let's Connect",
      subtitle:
        "Interested in collaborating, discussing data analyst/engineering roles, or reviewing code? Reach out directly via email or LinkedIn.",
      button: "Say Hello",
    },
    certificatesHeader: {
      title: "Certificates & Credentials",
      subtitle: "Official certifications and completed professional training.",
    },
    certificates: [
      {
        id: 1,
        title: "Professional Data Analyst / Engineering Certification",
        issuer: "Issuing Organization / Platform",
        date: "2026",
        credentialUrl: "https://example.com/verify/123",
      },
      {
        id: 2,
        title: "Full-Stack Web Development & Modern React",
        issuer: "Issuing Organization / Platform",
        date: "2025",
        credentialUrl: "https://example.com/verify/456",
      },
    ],
  },

  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      skills: "Skills",
      certificates: "Zertifikate",
      contact: "Kontakt",
      touch: "Email",
    },
    personalInfo: {
      name: "Birgit Bartenschlager",
      title: "Software Developer & Data Analyst",
      badge: "Offen für neue Projekte & Positionen",
      heroHeadline: "Turning Data into Decisions",
      heroSubline: "Building Solutions that make an Impact",
      bio: "Datenanalystin mit fachübergreifendem Hintergrund in Anwendungsentwicklung, Finanzen, Controlling, HR und Vertrieb. Ich nutze Python, Machine Learning und statistische Methoden, um geschäftsrelevante Fragen zu beantworten und Analysen zu automatisieren.",
      email: "birgit.bartenschlager@web.de",
      github: "https://github.com/birgit2704",
      linkedin: "https://www.linkedin.com/in/birgit-bartenschlager",
    },
    skillsHeader: {
      title: "Technische Fähigkeiten",
      subtitle: "Werkzeuge, Programmiersprachen und technische Kompetenzen.",
    },
    skills: {
      Softwareentwicklung: [
        "React",
        "Next.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "FastAPI",
        "Django",
        "Tailwind CSS",
        "HTML5/CSS3",
        "REST APIs",
        "Kotlin",
        "Jetpack Compose",
        "Dart",
        "Flutter",
        "Postman",
      ],
      "Daten & Analytik": [
        "Relationale Datenbanken (MySQL, Postgres)",
        "Datenvisualisierung (Matplotlib, Seaborn, Tableau)",
        "Machine Learning Grundlagen (ScikitLearn)",
        "Explorative Datenanalyse (Numpy, Pandas)",
        "Dashboards (Tableau, PowerBI, React)",
      ],
      "Tools & Infrastruktur": [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Vite",
        "Linux / WSL",
      ],
    },
    projectsHeader: {
      title: "Ausgewählte Projekte",
      subtitle: "Eine Auswahl aktueller Arbeiten aus den Bereich Datenanalyse.",
    },
    projects: [
      {
        id: 1,
        title: "Warum laufen uns die Abonnenten davon?",
        description: "Eine 'User-Churn' Auswertung",
        tags: ["Python", "Pandas", "Seaborn", "Tableau"],
        outcomes: [
          "Interaktives Dashboard (Entwicklung und Ursachen)",
          "Ein Machine-Learning Modell für zukünftige Entwicklung der Abonnenten.",
          "Stakeholder Dokumentation aller Schritte vom Projektplan bis zur Präsentation der Ergebnisse",
        ],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
      },
      {
        id: 2,
        title: "Was ist mit der Schulbildung in Deutschland los?",
        description: "Betrachtung verschiedener Fragen zur Schulbildung",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
        outcomes: [
          "Zusammenführung von Daten aus unterschiedlichen Quellen",
          "Interaktives Dashboard (Entwicklung und Zusammenhänge)",
          "Stakeholder Dokumentation aller Schritte vom Projektplan bis zur Präsentation der Ergebnisse",
        ],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
      },
      {
        id: 3,
        title: "Wird der DAX steigen oder fallen?",
        description: "Ein Time-Series Analysetool zur Entwicklung des DAX",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
        outcomes: [
          "Interaktives Dashboard (Entwicklung und Ursachen)",
          "Ein Machine-Learning Modell für zukünftige Entwicklung.",
          "Stakeholder Dokumentation aller Schritte vom Projektplan bis zur Präsentation der Ergebnisse",
        ],
        githubUrl: "https://github.com",
        liveUrl: "https://example.com",
      },
    ],
    contact: {
      title: "Lass uns vernetzen",
      subtitle:
        "Interesse an einer Zusammenarbeit, Austausch über Data Analyst/Engineering Positionen oder Code-Reviews? Schreib mir direkt per E-Mail oder LinkedIn.",
      button: "Nachricht senden",
    },
    certificatesHeader: {
      title: "Zertifikate & Nachweise",
      subtitle:
        "Eine Auswahl meiner letzten Zertifikate, eine komplette Liste ist auf meiner LinkedIn-Seite zu finden.",
    },
    certificates: [
      {
        id: 1,
        title: "Professional Data Analyst / Engineering Zertifikat",
        issuer: "Ausstellende Organisation / Plattform",
        date: "2026",
        credentialUrl: "https://example.com/verify/123",
      },
      {
        id: 2,
        title: "Full-Stack Webentwicklung & Modernes React",
        issuer: "Ausstellende Organisation / Plattform",
        date: "2025",
        credentialUrl: "https://example.com/verify/456",
      },
    ],
  },
};
