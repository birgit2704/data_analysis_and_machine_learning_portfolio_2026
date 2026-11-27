// src/data/portfolioData.js

export const portfolioData = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certificates: "Certificates",
      contact: "Contact",
      touch: "Email",
    },
    personalInfo: {
      name: "Birgit Bartenschlager",
      title: "Software Developer & Data Analyst",
      badge: "Available for new projects & roles",
      heroHeadline: "Intelligent apps &",
      heroSubline: "data-driven solutions",
      bio1: "Your company has mountains of data, yet you’re still making decisions blindly? I translate complex data into clear, actionable recommendations that directly save you time and money. Without the confusing jargon, spreadsheet chaos, or months of waiting.",
      bio2: "I am a Data Analyst with a cross-functional background in Software Development, Finance, Controlling, HR, and Sales. With Python, machine learning, and statistical methods I answer business-critical questions and automate analytical workflows.",
      email: "birgit.bartenschlager@web.de",
      github: "https://github.com/birgit2704",
      linkedin: "https://www.linkedin.com/in/birgit-bartenschlager",
      credly:
        "https://www.credly.com/users/birgit-bartenschlager/badges/credly",
    },
    skillsHeader: {
      title: "Technical Skills",
      subtitle: "Tools, languages, and technical competencies",
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
        "Streamlit",
        "Tailwind CSS",
        "HTML5/CSS3",
        "REST APIs",
        "Kotlin",
        "Jetpack Compose",
        "Dart",
        "Flutter",
      ],
      "Data & Analytics": [
        "MySQL",
        "Postgres",
        "Matplotlib",
        "Seaborn",
        "ScikitLearn",
        "TensorFlow",
        "Numpy",
        "Pandas",
        "Tableau",
        "PowerBI",
      ],
      "Tools, Infrastructure & AI": [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Vite",
        "Linux / WSL",
        "Postman",
        "LangChain",
      ],
    },
    projectsHeader: {
      title: "Featured Projects",
      subtitle: "A selection of recent analytics and data science work",
    },
    projects: [
      {
        id: 10,
        title: "Warum laufen uns die Abonnenten davon und was kostet uns das?",
        description:
          "End-to-End User Churn Analysis & Risk Prediction für einen Video-Streaming-Anbieter.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interaktives Tableau-Dashboard zur Visualisierung von Churn-Treibern und Kundensegmenten",
          "Prädiktives Machine-Learning-Modell zur frühzeitigen Identifikation kündigungsgefährdeter Abonnenten",
          "Quantifizierung des drohenden MRR-Verlusts und Priorisierung von High-Value-Kunden",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600 via-violet-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-indigo-300",
      },
      {
        id: 11,
        title: "Demand Forecasting App",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-rose-500 via-pink-600/90 to-purple-950", // Optional per-project backdrop
        projNameColor: "text-rose-400",
      },
      {
        id: 12,
        title: "Customer Segmentation",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-emerald-500 via-teal-600/90 to-teal-950", // Optional per-project backdrop
        projNameColor: "text-emerald-300",
      },
      {
        id: 13,
        title: "AI Data Analysis App",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-cyan-500 via-blue-600/90 to-blue-950", // Optional per-project backdrop
        projNameColor: "text-cyan-400",
      },
      {
        id: 20,
        title: "Wie steht es um die Schulbildung in Deutschland?",
        description:
          "Datenanalyse zur Leistungsentwicklung deutscher Schüler: Internationaler OECD-Benchmark und föderale Heterogenität im interaktiven Dashboard.",
        tags: ["Tableau", "Data Analysis", "ETL", "Benchmarking"],
        outcomes: [
          "Integration und Bereinigung von Primärdaten aus PISA- und IQB-Studien",
          "Interaktive Visualisierung von Leistungstrends nach Bundesland und Schulform",
        ],
        githubUrl:
          "https://github.com/birgit2704/education_data_exploration_and_visualization_2026",
        liveUrl:
          "https://public.tableau.com/views/Schulbildung_in_Deutschland/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-amber-500 via-orange-600/90 to-red-950", // Optional per-project backdrop
        projNameColor: "text-amber-400",
      },
      // {
      //   id: 30,
      //   title: "Wird der DAX steigen oder fallen?",
      //   description: "Ein Time-Series Analysetool zur Entwicklung des DAX",
      //   tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
      //   outcomes: [
      //     "Interaktives Dashboard (Entwicklung und Ursachen)",
      //     "Ein Machine-Learning Modell für zukünftige Entwicklung.",
      //     "Stakeholder Dokumentation aller Schritte vom Projektplan bis zur Präsentation der Ergebnisse",
      //   ],
      //   githubUrl:
      //     "https://github.com/birgit2704/dax_time_series_analysis_2026",
      //   liveUrl: "https://example.com",
      // },
      {
        id: 40,
        title: "Markteintrittsstrategie: Attraktivste Märkte für Bahnreisen",
        description:
          "BI-gestützte Standort- und Marktanalyse für ein Reise-Startup zur datengetriebenen Identifikation des optimalen Zielmarktes für Bahnreisen.",
        tags: [
          "Tableau",
          "Business Intelligence",
          "Market Analysis",
          "Data Storytelling",
        ],
        outcomes: [
          "Strukturiertes Data Storytelling zur Nachvollziehbarkeit des mehrstufigen Länderauswahlprozesses",
          "Interaktives Management-Dashboard für dynamische Szenarioanalysen und Kriterien-Gewichtungen",
        ],
        githubUrl: "https://github.com/birgit2704/railway_travel_business",
        liveUrl:
          "https://public.tableau.com/app/profile/birgit.bartenschlager/vizzes",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-sky-500 via-blue-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-sky-300",
      },
      {
        id: 50,
        title: "SQL-Lernplattform für Entwickler & Analysten",
        description:
          "Interaktive Applikation zum vertiefenden Üben von SQL-Abfragen mit direkter Ausführung und Unterstützung.",
        tags: ["SQLite", "Google AI Studio", "EdTech"],
        outcomes: [
          "Strukturierte Challenge-Sammlung mit 36 Aufgaben in drei Schwierigkeitsstufen",
          "Hilfestellungen (Hints) zur gezielten Unterstützung beim Finden der Lösung",
          "Integrierte Schema- und Tabellenansichten für ein intuitives Verständnis des Datenmodells",
        ],
        githubUrl: "https://github.com/birgit2704/practice_sql_app_2026",
        liveUrl: "https://bb-sql-practice-app.netlify.app/",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-fuchsia-500 via-purple-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-fuchsia-300",
      },
    ],
    contact: {
      title: "Let's Connect",
      subtitle:
        "Interested in collaborating, discussing data  or data science roles? Reach out directly via email or LinkedIn.",
      button: "Say Hello",
    },
    certificatesHeader: {
      title: "Certificates & Credentials",
      subtitle:
        "Releveant AI, analysis and data science certificates (more on LinkedIn, badges on Credly)",
      show: "Show certificates",
      hide: "Hide certificates",
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
        issuer: "Google / Coursera",
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
        issuer: "DeepLearning.AI / Coursera",
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
      bio1: "Ihr Unternehmen hat massenhaft Daten, trotzdem entscheiden Sie blind? Ich übersetze komplexe Daten in klare Handlungsempfehlungen, die direkt Zeit und Geld sparen. Ohne umständliches Fachjargon, Tabellen-Chaos oder monatelanges Warten.",
      bio2: "Ich bin Datenanalystin mit fachübergreifendem Hintergrund in Software-Entwicklung, Finanzen, Controlling, HR und Vertrieb. Mit Python, Machine Learning und statistischen Methoden beantworte ich geschäftsrelevante Fragen und automatisiere Analysen.",
      email: "birgit.bartenschlager@web.de",
      github: "https://github.com/birgit2704",
      linkedin: "https://www.linkedin.com/in/birgit-bartenschlager",
      credly:
        "https://www.credly.com/users/birgit-bartenschlager/badges/credly",
    },
    skillsHeader: {
      title: "Technische Skills",
      subtitle: "Werkzeuge, Programmiersprachen und technische Kompetenzen",
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
        "Streamlit",
        "Tailwind CSS",
        "HTML5/CSS3",
        "REST APIs",
        "Kotlin",
        "Jetpack Compose",
        "Dart",
        "Flutter",
      ],
      "Daten & Analytik": [
        "MySQL",
        "Postgres",
        "Matplotlib",
        "Seaborn",
        "ScikitLearn",
        "TensorFlow",
        "Numpy",
        "Pandas",
        "Tableau",
        "PowerBI",
      ],
      "Tools, Infrastruktur & KI": [
        "Git & GitHub",
        "Docker",
        "VS Code",
        "Jupyter Notebook",
        "Vite",
        "Linux / WSL",
        "Postman",
        "LangChain",
      ],
    },
    projectsHeader: {
      title: "Projekte",
      subtitle: "Eine Auswahl aus den Bereichen Datenanalyse und Data Science",
    },
    projects: [
      {
        id: 10,
        title: "Warum laufen uns die Abonnenten davon und was kostet uns das?",
        description:
          "End-to-End User Churn Analysis & Risk Prediction für einen Video-Streaming-Anbieter.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interaktives Tableau-Dashboard zur Visualisierung von Churn-Treibern und Kundensegmenten",
          "Prädiktives Machine-Learning-Modell zur frühzeitigen Identifikation kündigungsgefährdeter Abonnenten",
          "Quantifizierung des drohenden MRR-Verlusts und Priorisierung von High-Value-Kunden",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600 via-violet-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-indigo-300",
      },
      {
        id: 11,
        title: "Demand Forecasting App",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-rose-500 via-pink-600/90 to-purple-950", // Optional per-project backdrop
        projNameColor: "text-rose-400",
      },
      {
        id: 12,
        title: "Customer Segmentation",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-emerald-500 via-teal-600/90 to-teal-950", // Optional per-project backdrop
        projNameColor: "text-emerald-300",
      },
      {
        id: 13,
        title: "AI Data Analysis App",
        description:
          "End-to-end data analysis and machine learning project identifying key churn drivers for a video streaming service.",
        tags: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Tableau"],
        outcomes: [
          "Interactive Tableau dashboard visualizing churn trends, user engagement, and key risk factors",
          "Predictive machine learning model to detect at-risk subscribers prior to cancellation",
          "Financial loss assessment (MRR impact) and prioritized high-value retention list",
        ],
        githubUrl:
          "https://github.com/birgit2704/churn_prediciton_for_streaming_company_2026",
        liveUrl: "https://example.com",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-cyan-500 via-blue-600/90 to-blue-950", // Optional per-project backdrop
        projNameColor: "text-cyan-400",
      },
      {
        id: 20,
        title: "Wie steht es um die Schulbildung in Deutschland?",
        description:
          "Datenanalyse zur Leistungsentwicklung deutscher Schüler: Internationaler OECD-Benchmark und föderale Heterogenität im interaktiven Dashboard.",
        tags: ["Tableau", "Data Analysis", "ETL", "Benchmarking"],
        outcomes: [
          "Integration und Bereinigung von Primärdaten aus PISA- und IQB-Studien",
          "Interaktive Visualisierung von Leistungstrends nach Bundesland und Schulform",
        ],
        githubUrl:
          "https://github.com/birgit2704/education_data_exploration_and_visualization_2026",
        liveUrl:
          "https://public.tableau.com/views/Schulbildung_in_Deutschland/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-amber-500 via-orange-600/90 to-red-950", // Optional per-project backdrop
        projNameColor: "text-amber-400",
      },
      // {
      //   id: 30,
      //   title: "Wird der DAX steigen oder fallen?",
      //   description: "Ein Time-Series Analysetool zur Entwicklung des DAX",
      //   tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
      //   outcomes: [
      //     "Interaktives Dashboard (Entwicklung und Ursachen)",
      //     "Ein Machine-Learning Modell für zukünftige Entwicklung.",
      //     "Stakeholder Dokumentation aller Schritte vom Projektplan bis zur Präsentation der Ergebnisse",
      //   ],
      //   githubUrl:
      //     "https://github.com/birgit2704/dax_time_series_analysis_2026",
      //   liveUrl: "https://example.com",
      // },
      {
        id: 40,
        title: "Markteintrittsstrategie: Attraktivste Märkte für Bahnreisen",
        description:
          "BI-gestützte Standort- und Marktanalyse für ein Reise-Startup zur datengetriebenen Identifikation des optimalen Zielmarktes für Bahnreisen.",
        tags: [
          "Tableau",
          "Business Intelligence",
          "Market Analysis",
          "Data Storytelling",
        ],
        outcomes: [
          "Strukturiertes Data Storytelling zur Nachvollziehbarkeit des mehrstufigen Länderauswahlprozesses",
          "Interaktives Management-Dashboard für dynamische Szenarioanalysen und Kriterien-Gewichtungen",
        ],
        githubUrl: "https://github.com/birgit2704/railway_travel_business",
        liveUrl:
          "https://public.tableau.com/app/profile/birgit.bartenschlager/vizzes",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-sky-500 via-blue-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-sky-300",
      },
      {
        id: 50,
        title: "SQL-Lernplattform für Studenten, Entwickler & Analysten",
        description:
          "Interaktive App zum vertiefenden Üben von SQL-Abfragen mit direkter Ausführung und Unterstützung.",
        tags: ["SQLite", "Google AI Studio", "EdTech"],
        outcomes: [
          "Strukturierte Challenge-Sammlung mit 36 Aufgaben in drei Schwierigkeitsstufen",
          "Hilfe zur gezielten Unterstützung beim Finden der Lösung",
          "Integrierte Schema- und Tabellenansichten für ein intuitives Verständnis der Daten",
        ],
        githubUrl: "https://github.com/birgit2704/practice_sql_app_2026",
        liveUrl: "https://bb-sql-practice-app.netlify.app/",
        images: [
          "/images/image1.png", // Primary (back-left) screenshot
          "/images/image2.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-fuchsia-500 via-purple-600/90 to-indigo-950", // Optional per-project backdrop
        projNameColor: "text-fuchsia-300",
      },
    ],
    contact: {
      title: "Kontakt",
      subtitle:
        "Interesse an einer Zusammenarbeit, Austausch über Data Analyst oder Data Science Positionen? Schreiben Sie mir direkt per E-Mail oder LinkedIn.",
      button: "Nachricht senden",
    },
    certificatesHeader: {
      title: "Zertifikate & Nachweise",
      subtitle:
        "Relevante KI-, Analyse- und Data Science Zertifikate (mehr auf LinkedIn, Badges auf Credly)",
      show: "Zertifikate anzeigen",
      hide: "Zertifikate einklappen",
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
        issuer: "Google / Coursera",
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
        issuer: "DeepLearning.AI / Coursera",
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
