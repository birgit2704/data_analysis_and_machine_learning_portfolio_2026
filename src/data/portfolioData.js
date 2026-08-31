// src/data/portfolioData.js

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
      touch: "Email me",
    },
    personalInfo: {
      name: "Birgit Bartenschlager",
      title: "Software Developer & Data Analyst",
      badge: "Available for new projects & roles",
      heroHeadline: "Building intelligent apps &",
      heroSubline: "data-driven solutions.",
      bio: "Data Analyst with a cross-functional background in application development, Finance, Controlling, HR, and Sales. I use Python, machine learning, and statistical methods to answer business-critical questions and automate analytical workflows.",
      email: "birgit.bartenschlager@web.de",
      github: "https://github.com/birgit2704",
      linkedin: "https://www.linkedin.com/in/birgit-bartenschlager",
      credly:
        "https://www.credly.com/users/birgit-bartenschlager/badges/credly",
    },
    skillsHeader: {
      title: "Technical Skills",
      subtitle: "Tools, languages, and technical competencies.",
    },
    skills: {
      "Software Development": [
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
      "Data & Analytics": [
        "Relational databases (MySQL, Postgres)",
        "Data visualizations (Matplotlib, Seaborn, Tableau)",
        "Machine Learning (ScikitLearn, TensorFlow)",
        "EDA (Numpy, Pandas)",
        "Dashboards (Tableau, PowerBI, React)",
      ],
      "Tools & Infrastructure": [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Vite",
        "Linux / WSL",
      ],
    },
    projectsHeader: {
      title: "Featured Projects",
      subtitle: "A selection of recent analytics work",
    },
    projects: [
      {
        id: 1,
        title: "Subscriber Churn Analysis & Risk Prediction",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
          "Tailored stakeholder documentation covering the full lifecycle from project plan to executive summary",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
      },
      {
        id: 2,
        title: "What's the problem with school education in Germany?",
        description: "A contemplation from different angles.",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
        outcomes: [
          "Joining of data from different sources",
          "Interactive dashboard (development and relations)",
          "Stakeholder documentation of all project steps from project plan to final presentation",
        ],
        githubUrl:
          "https://github.com/birgit2704/education_data_exploration_and_visualization_2026",
        liveUrl: "https://example.com",
      },
      {
        id: 3,
        title: "Will the DAX fall or rise?",
        description: "A a time series analysis tool to predict the DAX",
        tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
        outcomes: [
          "Interactive dashboard (development and relations)",
          "Machine Learning tool to predict the DAX",
          "Stakeholder documentation of all project steps from project plan to final presentation",
        ],
        githubUrl:
          "https://github.com/birgit2704/dax_time_series_analysis_2026",
        liveUrl: "https://example.com",
      },
      {
        id: 4,
        title: "Which is the best country to start a rail travel business?",
        description: "A BI Analysis Project",
        tags: ["Tableau"],
        outcomes: [
          "A story explaining the selection process",
          "Interactive dashboard",
        ],
        githubUrl: "https://github.com/birgit2704/railway_travel_business",
        liveUrl:
          "https://public.tableau.com/app/profile/birgit.bartenschlager/viz/railway_travel_business/Story1",
      },
      {
        id: 5,
        title: "SQL practice app for developers, analysts and students",
        description: "Test and train your SQL skills",
        tags: ["SQLite", "Google AI Studio"],
        outcomes: [
          "36 challenges, grouped for beginners, intermediate and advanced",
          "Hints when user is stuck",
          "Data base table previews for easy orientation",
        ],
        githubUrl: "https://github.com/birgit2704/practice_sql_app_2026",
        liveUrl: "https://bb-sql-practice-app.netlify.app/",
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
      subtitle:
        "A selection of certificates (full list on  LinkedIn, badges on Credly)",
    },
    certificates: [
      {
        id: 1,
        title: "Google Advanced Data Analytics Certificate",
        issuer: "Google / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/6LNGFMYZ9YEW",
        image: "/badge_google.png",
      },
      {
        id: 2,
        title: "Meta Data Analyst Certificate",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/IDKYVP40ECZ5",
        image: "/badge_meta.png",
      },
      {
        id: 3,
        title: "Google AI Professional Certificate",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/TU5A3241P3OS",
        image: "/badge_google_AI.png",
      },
      {
        id: 4,
        title: "Tableau Business Intelligence Analyst",
        issuer: "Tableau Learning / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/51T8YE0CM6A8",
      },
      {
        id: 5,
        title: "Mathematics for Data Science & Machine Learning",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/I9Y87MGSSDYV",
      },
      {
        id: 6,
        title: "Local LLMs via Ollama & LM Studio",
        issuer: "Udemy Business Leadership Academy",
        date: "2025",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-02fc736c-e6ee-414f-bca5-5dcba689064e/",
      },
      {
        id: 7,
        title: "LLM Finetuning Fundamentals",
        issuer: "Udemy Business Leadership Academy",
        date: "2025",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-31ae0fb3-dacb-4b5a-8edf-9df43fa433ee/",
      },
      {
        id: 8,
        title: "The complete SQL Bootcamp: From Zero to Hero",
        issuer: "Udemy Business Leadership Academy",
        date: "2024",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-9e89492e-373f-4ae1-91bd-5bc0b9a28aea/",
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
      heroHeadline: "Intelligente Apps &",
      heroSubline: "Daten-basierte Lösungen",
      bio: "Datenanalystin mit fachübergreifendem Hintergrund in Anwendungsentwicklung, Finanzen, Controlling, HR und Vertrieb. Ich nutze Python, Machine Learning und statistische Methoden, um geschäftsrelevante Fragen zu beantworten und Analysen zu automatisieren.",
      email: "birgit.bartenschlager@web.de",
      github: "https://github.com/birgit2704",
      linkedin: "https://www.linkedin.com/in/birgit-bartenschlager",
      credly:
        "https://www.credly.com/users/birgit-bartenschlager/badges/credly",
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
        "Machine Learning (ScikitLearn, TensorFlow)",
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
        title: "Warum laufen uns die Abonnenten davon und was kostet uns das?",
        description:
          "End-to-End User Churn Analysis & Risk Prediction für einen Video-Streaming-Anbieter.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interaktives Tableau-Dashboard zur Visualisierung von Churn-Treibern und Kundensegmenten",
          "Prädiktives Machine-Learning-Modell zur frühzeitigen Identifikation kündigungsgefährdeter Abonnenten",
          "Quantifizierung des drohenden MRR-Verlusts und Priorisierung von High-Value-Kunden",
          "Zielgruppengerechte Stakeholder-Dokumentation vom Projektplan bis zur Management-Präsentation",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
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
        githubUrl:
          "https://github.com/birgit2704/education_data_exploration_and_visualization_2026",
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
        githubUrl:
          "https://github.com/birgit2704/dax_time_series_analysis_2026",
        liveUrl: "https://example.com",
      },
      {
        id: 4,
        title:
          "Welches is das beste Land für ein Unternehmen, das Eisenbahnfahrten vermarktet?",
        description: "Ein BI-Analyse Projekt",
        tags: ["Tableau"],
        outcomes: [
          "Die Beschreibung des Auswahlverfahrens mit Tableau",
          "Ein interaktives Dashboard",
        ],
        githubUrl: "https://github.com/birgit2704/railway_travel_business",
        liveUrl:
          "https://public.tableau.com/app/profile/birgit.bartenschlager/viz/railway_travel_business/Story1",
      },
      {
        id: 5,
        title: "SQL Übungsapp für Entwickler, Analysten und Studenten",
        description: "Testen und trainieren Sie Ihre SQL Kenntnisse",
        tags: ["SQLite", "Google AI Studio"],
        outcomes: [
          "36 Challenges in 3 Kategorien (beginner, intermediate, advanced)",
          "Tipps auf Anfrage",
          "Vorschau der Datanbanktabellen für besseren Überblick",
        ],
        githubUrl: "https://github.com/birgit2704/practice_sql_app_2026",
        liveUrl: "https://bb-sql-practice-app.netlify.app/",
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
        "Eine Auswahl meiner Zertifikate (komplette Liste auf LinkedIn, Badges auf Credly)",
    },
    certificates: [
      {
        id: 1,
        title: "Google Advanced Data Analytics Certificate",
        issuer: "Google / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/6LNGFMYZ9YEW",
        image: "/badge_google.png",
      },
      {
        id: 2,
        title: "Meta Data Analyst Certificate",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/IDKYVP40ECZ5",
        image: "/badge_meta.png",
      },

      {
        id: 3,
        title: "Google AI Professional Certificate",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/TU5A3241P3OS",
        image: "/badge_google_AI.png",
      },
      {
        id: 4,
        title: "Tableau Business Intelligence Analyst",
        issuer: "Tableau Learning / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/51T8YE0CM6A8",
      },
      {
        id: 5,
        title: "Mathematics for Data Science & Machine Learning",
        issuer: "Meta / Coursera",
        date: "2026",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/I9Y87MGSSDYV",
      },
      {
        id: 6,
        title: "Local LLMs via Ollama & LM Studio",
        issuer: "Udemy Business Leadership Academy",
        date: "2025",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-02fc736c-e6ee-414f-bca5-5dcba689064e/",
      },
      {
        id: 7,
        title: "LLM Finetuning Fundamentals",
        issuer: "Udemy Business Leadership Academy",
        date: "2025",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-31ae0fb3-dacb-4b5a-8edf-9df43fa433ee/",
      },
      {
        id: 8,
        title: "The complete SQL Bootcamp: From Zero to Hero",
        issuer: "Udemy Business Leadership Academy",
        date: "2024",
        credentialUrl:
          "https://www.udemy.com/certificate/UC-9e89492e-373f-4ae1-91bd-5bc0b9a28aea/",
      },
    ],
  },
};
