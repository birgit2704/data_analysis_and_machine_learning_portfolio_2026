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
      heroHeadline: "Intelligent apps &",
      heroSubline: "data-driven\n solutions",
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
        "Streamlit",
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
        id: 10,
        title: "Subscriber Churn Analysis & Risk Prediction",
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
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
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
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
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
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
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
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
      },
      {
        id: 20,
        title: "The State of School Education in Germany",
        description:
          "Data analysis of student performance trends: International OECD benchmarks and regional federal disparities in an interactive dashboard.",
        tags: ["Tableau", "Data Analysis", "ETL", "Benchmarking"],
        outcomes: [
          "Integration and cleaning of primary data from OECD PISA and national IQB studies",
          "Interactive visualization of performance trends across federal states and school tracks",
        ],
        githubUrl:
          "https://github.com/birgit2704/education_data_exploration_and_visualization_2026",
        liveUrl:
          "https://public.tableau.com/views/Schulbildung_in_Deutschland/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
        images: [
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
      },
      // {
      //   id: 30,
      //   title: "Will the DAX fall or rise?",
      //   description: "A a time series analysis tool to predict the DAX",
      //   tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "REST API"],
      //   outcomes: [
      //     "Interactive dashboard (development and relations)",
      //     "Machine Learning tool to predict the DAX",
      //     "Stakeholder documentation of all project steps from project plan to final presentation",
      //   ],
      //   githubUrl:
      //     "https://github.com/birgit2704/dax_time_series_analysis_2026",
      //   liveUrl: "https://example.com",
      // },
      {
        id: 40,
        title: "Market Entry Strategy: Optimal Target Markets for Rail Travel",
        description:
          "BI-driven market evaluation for a travel startup to identify the most attractive European country for launching rail tourism offerings.",
        tags: [
          "Tableau",
          "Business Intelligence",
          "Market Analysis",
          "Data Storytelling",
        ],
        outcomes: [
          "Structured data storytelling guiding stakeholders through the multi-stage country selection funnel",
          "Interactive executive dashboard enabling dynamic scenario analysis and custom metric weighting",
        ],
        githubUrl: "https://github.com/birgit2704/railway_travel_business",
        liveUrl:
          "https://public.tableau.com/app/profile/birgit.bartenschlager/vizzes",
        images: [
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
      },
      {
        id: 50,
        title: "SQL Practice App for Developers & Analysts",
        description:
          "Interactive SQL training tool with realistic scenarios, live query execution, and assistance.",
        tags: ["SQLite", "Google AI Studio", "EdTech"],
        outcomes: [
          "Structured 3-tier curriculum featuring 36 hands-on query challenges",
          "Hint generation to support problem-solving without spoiling answers",
          "Instant database schema and table previews for rapid context switching",
        ],
        githubUrl: "https://github.com/birgit2704/practice_sql_app_2026",
        liveUrl: "https://bb-sql-practice-app.netlify.app/",
        images: [
          "/images/churn-dashboard.png", // Primary (back-left) screenshot
          "/images/churn-shap.png", // Secondary (front-right overlapping) screenshot
        ],
        accentBg: "from-indigo-600/30 via-purple-600/20 to-slate-900/90", // Optional per-project backdrop
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
      bio: "Ihr Unternehmen hat massenhaft Daten, trotzdem entscheiden Sie blind? Ich übersetze komplexe Daten in klare Handlungsempfehlungen, die direkt Zeit und Geld sparen. Ohne umständliches Fachjargon, Tabellen-Chaos oder monatelanges Warten.",
      // bio: "Datenanalystin mit fachübergreifendem Hintergrund in Anwendungsentwicklung, Finanzen, Controlling, HR und Vertrieb. Ich nutze Python, Machine Learning und statistische Methoden, um geschäftsrelevante Fragen zu beantworten und Analysen zu automatisieren.",
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
        "Streamlit",
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
