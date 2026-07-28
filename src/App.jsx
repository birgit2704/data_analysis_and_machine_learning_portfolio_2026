// src/App.jsx
import { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import {
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Sparkles,
  ChevronRight,
  Menu,
  X,
  Globe,
  Award,
} from "lucide-react";

// Custom SVG components for Brand Logos
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState("de"); // Language state: 'en' or 'de'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Extract current language dataset
  const content = portfolioData[lang];
  const {
    nav,
    personalInfo,
    skills,
    skillsHeader,
    projects,
    projectsHeader,
    certificates,
    certificatesHeader,
    contact,
  } = content;

  const navLinks = [
    { name: nav.about, href: "#about" },
    { name: nav.projects, href: "#projects" },
    { name: nav.skills, href: "#skills" },
    { name: nav.contact, href: "#contact" },
    { name: nav.certificates, href: "#certificates" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-bold text-lg text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <Code2 className="w-6 h-6" />
            <span>ML_Portfolio</span>
          </a>

          {/* Desktop Navigation & Language Switcher */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-indigo-400 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
              {/* Language Switcher Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "de" : "en")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === "en" ? "DE" : "EN"}</span>
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
              >
                {nav.touch}
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang === "en" ? "DE" : "EN"}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-indigo-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 text-center px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
            >
              {nav.touch}
            </a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero / About Section */}
        <section
          id="about"
          className="py-20 md:py-28 border-b border-slate-800/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{personalInfo.badge}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.heroHeadline} <br />
                <span className="bg-linear-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  {personalInfo.heroSubline}
                </span>
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/25"
                >
                  {nav.projects}
                  <ChevronRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-3 ml-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Image Column */}
            <div className="md:col-span-5 flex justify-center md:justify-end order-first md:order-last">
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-900 border-4 border-slate-800 overflow-hidden shadow-2xl flex items-center justify-center">
                  {/*<UserCircle
                    className="w-32 h-32 text-slate-700"
                    strokeWidth={1}
                  />*/}
                  <img
                    src="/Birgit.jpg" // <--- Change this path to your file in the public folder
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-20 border-b border-slate-800/60">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {projectsHeader.title}
            </h2>
            <p className="text-slate-400">{projectsHeader.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all group hover:-translate-y-1 duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/40 text-indigo-400">
                      <Terminal className="w-5 h-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white p-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-b border-slate-800/60">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {skillsHeader.title}
            </h2>
            <p className="text-slate-400">{skillsHeader.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = [
                <Code2 className="w-5 h-5" />,
                <Database className="w-5 h-5" />,
                <Terminal className="w-5 h-5" />,
              ];
              return (
                <div
                  key={category}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2 rounded-lg bg-indigo-950/80 border border-indigo-800/40 text-indigo-400">
                      {icons[index % icons.length]}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-sm bg-slate-800/60 text-slate-200 border border-slate-700/40 hover:border-indigo-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-20 border-b border-slate-800/60"
        >
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {certificatesHeader.title}
            </h2>
            <p className="text-slate-400">{certificatesHeader.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 flex items-center justify-between hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all group duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="p-2.5 rounded-lg bg-indigo-950/80 border border-indigo-800/40 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <Award className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      {cert.issuer} •{" "}
                      <span className="text-slate-500">{cert.date}</span>
                    </p>
                  </div>
                </div>

                <span className="p-2 text-slate-500 group-hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              {contact.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">{contact.subtitle}</p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-3 shadow-xl shadow-indigo-600/30 text-lg"
            >
              <Mail className="w-5 h-5" />
              {contact.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-8 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
