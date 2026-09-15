import { useEffect, useRef, useState } from "react";
import profilePhoto from "./assets/image.png";
import pythonIcon from "./assets/godstime_individual_icons/glossy_blue_python_logo_icon.png";
import sqlIcon from "./assets/godstime_individual_icons/glossy_blue_violet_database_stack.png";
import machineLearningIcon from "./assets/godstime_individual_icons/glossy_ai_brain_circuit_icon.png";
import mlopsIcon from "./assets/godstime_individual_icons/glossy_infinity_mlops_gear_icon.png";
import nlpIcon from "./assets/godstime_individual_icons/glossy_ai_brain_chat_bubbles.png";
import flaskIcon from "./assets/godstime_individual_icons/glossy_blue_violet_chemistry_flask.png";
import educationIcon from "./assets/godstime_individual_icons/glossy_blue_graduation_cap_icon.png";
import fibreOpticsIcon from "./assets/godstime_individual_icons/glowing_fiber_optic_cable_cutaway.png";
import networkIcon from "./assets/godstime_individual_icons/glossy_blue_violet_network_icon.png";
import trainingIcon from "./assets/godstime_individual_icons/glossy_3d_teacher_presentation_icon.png";
import "./App.css";

const tech = [
  ["Python", pythonIcon],
  ["SQL", sqlIcon],
  ["Machine Learning", machineLearningIcon],
  ["MLOps", mlopsIcon],
  ["NLP", nlpIcon],
  ["Flask", flaskIcon],
];

const certificates = [
  ["Data Science Bootcamp", "Udemy", "cert_udemy_bootcamp.png"],
  ["Data Science Foundation", "IABAC", "cert_iabac_foundation.png"],
  ["Certified Data Scientist", "IABAC", "cert_iabac_certified_ds.png"],
  ["MLOps", "Coursera", "cert_coursera_mlops.png"],
  [
    "Data Scientist Certification Training",
    "DataMites",
    "cert_datamites_cds.png",
  ],
];
const journey = [
  [
    "2018",
    educationIcon,
    "Graduated (B.Sc. Information Technology)",
    "National Open University of Nigeria",
    "Completed my degree (2014 – 2018).",
  ],
  [
    "Mar 2019 – Aug 2019",
    fibreOpticsIcon,
    "Fibre Optics Technician Intern",
    "Suburban Legend Inc.",
    "Gained hands-on experience with fibre optics installation and testing.",
  ],
  [
    "Aug 2019 – Dec 2020",
    networkIcon,
    "Network Engineer",
    "Trakatel Limited",
    "Worked on network infrastructure and deployment projects.",
  ],
  [
    "Sep 2020 – Aug 2023",
    pythonIcon,
    "Lead Software Engineer",
    "Neo Cloud Technologies",
    "Led software development initiatives and technical teams.",
  ],
  [
    "Jun 2021 – Present",
    machineLearningIcon,
    "Data Scientist",
    "Neo Cloud Technologies",
    "Developing data-driven solutions and machine learning systems.",
  ],
  [
    "Jan 2023 – Present",
    trainingIcon,
    "Head of Training, Research & Development",
    "Neo Cloud Technologies",
    "Leading training programs and driving research and development.",
  ],
  [
    "Jun 2023 – Dec 2023",
    machineLearningIcon,
    "Data Scientist (Remote Contract)",
    "Rubixe",
    "Worked remotely on data science projects and analysis.",
  ],
];
const gallery = [
  ["Workspace", "Building solutions", "gallery-workspace.png"],
  ["Leadership", "Leading with vision", "gallery-leadership.png"],
  ["Recognition", "Award of excellence", "gallery-award.png"],
  ["Industry Engagement", "Collaboration in action", "gallery-engagement.png"],
  ["Teamwork", "Building together", "gallery-teamwork.png"],
  ["Personal Portrait", "Beyond the workspace", "gallery-personal-portrait.png"],
];
const asset = (name) => `/assets/${name}`;
function Avatar() {
  return <img className="avatar" src={profilePhoto} alt="Godstime Edet" />;
}
function Header({ dark, setDark }) {
  return (
    <header className="header">
      <a className="brand" href="#home">
        <i />
        Godstime Edet
      </a>
      <nav>
        {["Home", "About", "Certifications", "Experience"].map((x) => (
          <a key={x} href={`#${x.toLowerCase()}`}>
            {x}
          </a>
        ))}
      </nav>
      <div className="head-actions">
        <button
          className="theme"
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
        >
          <img src={asset("button_dark_mode.png")} alt="" />
        </button>
        <a className="image-button" href="#contact">
          <img src={asset("button_lets_talk.png")} alt="Let’s Talk" />
        </a>
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <h1>
          <small>Hi, I’m</small>Godstime Edet.
        </h1>
        <h2>
          Data Scientist &<br />
          Software Engineer
        </h2>
        <p>
          Building data-driven solutions, software systems,
          <br />
          and technical talent.
        </p>
        <div className="stats">
          <img
            src={asset("stat_200_computers.png")}
            alt="200+ computers networked"
          />
          <img src={asset("stat_5_years.png")} alt="5+ years experience" />
          <img
            src={asset("stat_3_roles.png")}
            alt="3 major roles at Neo Cloud"
          />
        </div>
      </div>
      <div className="orbit-wrap" aria-label="Technology skills">
        <div className="orbit-line" />
        <Avatar />
        <div className="orbit">
          {tech.map(([name, icon], index) => (
            <div className="orbit-slot" style={{ "--i": index }} key={name}>
              <div className="orbit-card">
                <img
                  className="tech-tile"
                  src={icon}
                  alt=""
                  width="74"
                  height="74"
                />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="about section" id="about">
      <div className="section-intro">
        <span className="kicker">ABOUT ME</span>
        <h2>
          A Blend of Tech,
          <br />
          <em>Data and People.</em>
        </h2>
      </div>
      <Avatar />
      <div className="about-copy">
        <h3>
          I’m <em>Godstime Edet.</em>
        </h3>
        <p>
          A Data Scientist and Software Engineer with a background in networking
          and infrastructure. I enjoy turning complex problems into simple,
          meaningful solutions and I’m passionate about using technology to
          create real impact and help others grow.
        </p>
      </div>
    </section>
  );
}
function Certifications() {
  const track = useRef(null);
  const [active, setActive] = useState(2);
  const activeRef = useRef(2);
  const move = (direction) => {
    const root = track.current;
    if (!root) return;
    const cards = root.querySelectorAll(".certificate");
    const loopWidth =
      cards[certificates.length].offsetLeft - cards[0].offsetLeft;
    if (direction < 0 && root.scrollLeft < 244) root.scrollLeft += loopWidth;
    const next = root.scrollLeft + direction * 244;
    root.scrollTo({ left: next, behavior: "smooth" });
    if (next >= loopWidth)
      window.setTimeout(() => {
        root.scrollLeft -= loopWidth;
      }, 600);
  };
  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const update = () => {
      const cards = [...root.querySelectorAll(".certificate")];
      const center = root.getBoundingClientRect().left + root.clientWidth / 2;
      const closest = cards.reduce(
        (best, card, index) => {
          const distance = Math.abs(
            card.getBoundingClientRect().left + card.clientWidth / 2 - center,
          );
          return distance < best.distance ? { index, distance } : best;
        },
        { index: 0, distance: Infinity },
      );
      if (closest.index !== activeRef.current) {
        activeRef.current = closest.index;
        setActive(closest.index);
      }
    };
    update();
    root.addEventListener("scroll", update, { passive: true });
    const timer = window.setInterval(() => move(1), 2400);
    return () => {
      root.removeEventListener("scroll", update);
      window.clearInterval(timer);
    };
  }, []);
  return (
    <section className="cert-section section" id="certifications">
      <div className="cert-head">
        <span className="kicker">FEATURED CERTIFICATIONS</span>
      </div>
      <div className="carousel-shell">
        <button onClick={() => move(-1)} aria-label="Previous certificate">
          <img src={asset("icon_arrow_prev.png")} alt="" />
        </button>
        <div className="cert-track" ref={track}>
          {[...certificates, ...certificates].map(
            ([title, issuer, image], index) => (
              <article
                className={`certificate ${active === index ? "active" : ""}`}
                data-index={index}
                key={`${title}-${index}`}
              >
                <img
                  className="certificate-art"
                  src={asset(image)}
                  alt={title}
                />
                <h3>{title}</h3>
                <span>{issuer}</span>
              </article>
            ),
          )}
        </div>
        <button onClick={() => move(1)} aria-label="Next certificate">
          <img src={asset("icon_arrow_next.png")} alt="" />
        </button>
      </div>
    </section>
  );
}
function Journey() {
  return (
    <section className="journey section" id="experience">
      <div className="section-intro">
        <span className="kicker">MY JOURNEY</span>
        <h2>
          From Graduation
          <br />
          <em>to Present.</em>
        </h2>
        <p>
          A timeline of key milestones, roles, and skills that have shaped my
          journey.
        </p>
      </div>
      <div className="timeline">
        {journey.map(([date, icon, role, company, detail]) => (
          <div className="timeline-row" key={`${date}-${role}`}>
            <time>{date}</time>
            <i className="dot" />
            <div className="role-icon">
              <img src={icon} alt="" />
            </div>
            <div className="role">
              <strong>{role}</strong>
              <span>{company}</span>
            </div>
            <p>{detail}</p>
          </div>
        ))}
        <div className="timeline-arrow" aria-hidden="true">
          <span>PRESENT DAY</span>
        </div>
      </div>
    </section>
  );
}
function PresentDay() {
  return (
    <section className="present-day section">
      <div className="section-intro">
        <span className="kicker">PRESENT DAY</span>
        <h2>
          Neo Cloud
          <br />
          <em>Technologies</em>
        </h2>
        <p>Building technology, people and a brighter tomorrow.</p>
      </div>
      <div className="neo-brand" aria-label="Neo Cloud Technologies">
        <img src={asset("neo-cloud-logo.png")} alt="Neo Cloud Technologies" />
      </div>
      <div className="present-copy">
        <p>
          <strong>Neo Cloud Technologies</strong> is an Abuja-based
          multi-product IT firm providing software development, data science,
          cybersecurity, IT consulting, and technical training services. The
          company combines technology solutions with capacity-development
          programs designed to help individuals and organizations build
          practical digital skills.
        </p>
        <p>
          <strong>My role at Neo Cloud:</strong> I have grown across three major
          positions within the company &mdash;{" "}
          <strong>
            Lead Software Engineer, Data Scientist, and Head of Training,
            Research &amp; Development
          </strong>
          . My work spans building software solutions, applying data science and
          machine learning to real-world problems, and leading technical
          training, research, mentorship, and development initiatives.
        </p>
        <a className="image-button" href="#experience">
          <img src={asset("button_view_my_work.png")} alt="View my work" />
        </a>
      </div>
    </section>
  );
}
function Gallery() {
  const track = useRef(null);
  const move = (direction) =>
    track.current?.scrollBy({ left: direction * 280, behavior: "smooth" });

  return (
    <section className="gallery section" id="gallery">
      <div className="section-intro">
        <span className="kicker">GALLERY</span>
        <h2>
          Moments,
          <br />
          <em>Portraits &amp; More.</em>
        </h2>
        <p>
          A few glimpses into my professional journey from work, speaking
          engagements, training sessions, and everyday moments.
        </p>
      </div>
      <button onClick={() => move(-1)} aria-label="Previous gallery photos">
        <img src={asset("icon_arrow_prev.png")} alt="" />
      </button>
      <div className="gallery-track" ref={track}>
        {gallery.map(([title, subtitle, image]) => (
          <article className="gallery-card" key={title}>
            <img src={asset(image)} alt={title} />
            <div>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
          </article>
        ))}
      </div>
      <button onClick={() => move(1)} aria-label="Next gallery photos">
        <img src={asset("icon_arrow_next.png")} alt="" />
      </button>
    </section>
  );
}
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "app dark" : "app"}>
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Journey />
        <PresentDay />
        <Gallery />
      </main>
      <footer id="contact">
        <span>© 2026 Godstime Edet. All rights reserved.</span>
        <div className="socials">
          <a href="mailto:hello@godstimeedet.com">
            <img src={asset("icon_email.png")} alt="Email" />
          </a>
          <a
            href="https://www.linkedin.com/in/godstime-samuel?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img src={asset("icon_linkedin.png")} alt="" />
          </a>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={asset("icon_external_link.png")} alt="" />
          </button>
        </div>
      </footer>
    </div>
  );
}
export default App;
