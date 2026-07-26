// src/data/portfolioData.js

export const portfolioData = {
  personalInfo: {
    name: "Birgit Bartenschlager",
    title: "Software Engineer & Data Analyst",
    location: "Germany",
    bio: "Passionate about bridging full-stack software development and data analytics. Specialized in building scalable web applications, robust data pipelines, and machine learning solutions.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "contact@example.com",
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
      "Data Visualization (Seaborn/Matplotlib)",
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

  projects: [
    {
      id: 1,
      title: "Data Analysis & Quality Trends Explorer",
      description:
        "An end-to-end data processing and visualization pipeline analyzing multi-decade public metrics to uncover underlying trend patterns.",
      tags: ["Python", "Pandas", "Seaborn", "SQL", "React"],
      outcomes: [
        "Cleaned and combined structured datasets across multiple historical sources",
        "Built dynamic data summaries highlighting core shift indicators",
        "Integrated responsive frontend dashboard components for interactive filtering",
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
        "Designed modular UI components adhering to modern accessibility guidelines",
        "Implemented smooth state transitions and fast load times",
        "Configured robust client-side routing and clean CSS utility architecture",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Machine Learning & Statistical Modeling Suite",
      description:
        "A suite of algorithms built to explore core mathematical foundations in calculus, linear algebra, and probability for ML.",
      tags: ["Python", "NumPy", "Scikit-Learn", "Jupyter"],
      outcomes: [
        "Implemented linear algebra and optimization routines from foundational principles",
        "Engineered predictive models with automated cross-validation",
        "Visualized high-dimensional feature spaces using matrix decomposition",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ],
};
