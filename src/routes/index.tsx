import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeevan Geo Vadakken — Curious mind. Careful builder." },
      {
        name: "description",
        content:
          "CSE student from Kerala building thoughtful software across systems and information security.",
      },
      { property: "og:title", content: "Jeevan Geo Vadakken — Portfolio" },
      {
        property: "og:description",
        content:
          "Curious mind. Careful builder. Software, systems and security from Kerala, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "jeevan.geo.vadakken007@gmail.com";

const projects = [
  {
    name: "Smart Hostel ERP",
    kind: "Desktop app",
    url: "https://github.com/omnixor/sherp",
    text: "A Java desktop app for managing hostel students, rooms, allocations, and complaints.",
    tags: ["Java", "Swing", "MySQL"],
  },
  {
    name: "Pr1ntpool",
    kind: "Web platform",
    url: "https://github.com/omnixor/pr1ntpool",
    text: "A group-printing platform that helps people coordinate one shared print job and pickup.",
    tags: ["TypeScript", "React", "Supabase"],
  },
  {
    name: "Vulnett",
    kind: "Security tool",
    url: "https://github.com/omnixor/Vulnett",
    text: "Automates vulnerability scans with Nmap and Nuclei and organises results into clear reports.",
    tags: ["Python", "Security", "Reporting"],
  },
];

const skills = ["HTML", "CSS", "Python", "C", "Git", "GitHub", "Linux"];

function Index() {
  return (
    <main className="ed-page">
      <header className="ed-nav">
        <a href="#top" className="ed-brand">
          Jeevan<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#background">Background</a>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">
              Let's talk <ArrowUpRight />
            </a>
          </Button>
        </nav>
      </header>

      <section id="top" className="ed-intro">
        <div className="edition-line eyebrow">
          <span>Computer Science & Engineering</span>
          <span>
            <MapPin size={13} /> Kerala, India
          </span>
        </div>
        <h1>
          Jeevan Geo
          <br />
          Vadakken<span className="dot">.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Curious mind. Careful builder.
            <br />
            <span>Exploring software, systems, and information security.</span>
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="#work">
              Selected projects <ArrowDown />
            </a>
          </Button>
        </div>
        <figure className="portrait-scene">
          <img
            src={profile}
            alt="Portrait of Jeevan Geo Vadakken"
            width={900}
            height={1200}
            fetchPriority="high"
          />
          <figcaption>
            <span className="eyebrow">Learning by building</span>
            <span>
              Thrissur, Kerala <ArrowUpRight size={16} />
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="about-editorial" aria-label="About Jeevan">
        <article className="about-main">
          <span className="eyebrow">01 / A little about me</span>
          <h2>
            Understand it.
            <br />
            <span className="ed-italic">Build it better.</span>
          </h2>
          <p>
            B.Tech in Computer Science & Engineering at Vidya Academy of Science & Technology. I
            turn curiosity into practical projects and sweat the details that make a product useful.
          </p>
        </article>
        <article className="about-note">
          <ShieldCheck size={26} strokeWidth={1.5} />
          <h3>Security first.</h3>
          <p>Software, systems, information security and product thinking.</p>
        </article>
        <article className="about-note">
          <Code2 size={26} strokeWidth={1.5} />
          <h3>Care in the details.</h3>
          <p>
            Build carefully, understand the system underneath, and leave things a little more secure
            than I found them.
          </p>
        </article>
      </section>

      <section id="work" className="ed-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / Things I've been making</span>
            <h2>
              Selected projects<span className="dot">.</span>
            </h2>
          </div>
          <a href="https://github.com/omnixor" target="_blank" rel="noreferrer" className="eyebrow">
            More on GitHub ↗
          </a>
        </div>
        <div className="grid-3">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`tile project ${i === 1 ? "tile-yellow" : ""}`}
            >
              <div className="tile-top">
                <span className="card-num">0{i + 1}</span>
                <ArrowUpRight size={22} />
              </div>
              <span className="eyebrow" style={{ marginTop: 28 }}>
                {p.kind}
              </span>
              <h3 style={{ marginTop: 6 }}>{p.name}</h3>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="background" className="ed-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">04 / The path so far</span>
            <h2>
              A foundation for
              <br />
              what comes next.
            </h2>
          </div>
        </div>
        <div className="grid-2">
          <article className="tile">
            <div className="tile-top eyebrow">
              <span>Current</span>
              <span className="card-num">01</span>
            </div>
            <h3 style={{ fontSize: 24, margin: "20px 0 8px" }}>
              B.Tech, Computer Science & Engineering
            </h3>
            <p>Vidya Academy of Science & Technology (VAST), Thrissur, Kerala</p>
          </article>
          <article className="tile">
            <div className="tile-top eyebrow">
              <span>Experience</span>
              <span className="card-num">02</span>
            </div>
            <h3 style={{ fontSize: 24, margin: "20px 0 8px" }}>iQOO India Consumer Workshop</h3>
            <p>Joined conversations around product experience and community engagement.</p>
          </article>
        </div>
        <div style={{ marginTop: 40 }}>
          <span className="eyebrow">05 / Tools in my kit</span>
          <div className="chips" style={{ marginTop: 16 }}>
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="closing">
        <div>
          <span className="eyebrow">06 / Have something in mind?</span>
          <h2 style={{ marginTop: 10 }}>
            Let's make
            <br />
            <span className="ed-italic">it happen.</span>
          </h2>
          <p style={{ marginTop: 12 }} className="text-muted-foreground">
            Open to collaborations, internships, and thoughtful conversations.
          </p>
        </div>
        <div className="contact-list">
          <a href={`mailto:${EMAIL}`}>
            <span className="flex items-center gap-2">
              <Mail size={16} /> Email
            </span>
            <span>{EMAIL}</span>
          </a>
          <a href="https://github.com/omnixor" target="_blank" rel="noreferrer">
            <span className="flex items-center gap-2">
              <Github size={16} /> GitHub
            </span>
            <span>github.com/omnixor ↗</span>
          </a>
          <a
            href="https://linkedin.com/in/jeevan-geo-vadakken-a30b39372"
            target="_blank"
            rel="noreferrer"
          >
            <span className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </span>
            <span>Connect with me ↗</span>
          </a>
        </div>
      </section>

      <footer className="ed-footer">
        <span>© Jeevan Geo Vadakken</span>
        <span>Designed with curiosity in Kerala, India.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
