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
import "./PresentDay.css";

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
const projects = [
  [
    "Fake News Sentiment Analysis",
    "An NLP system for detecting false information and analysing sentiment in news content.",
    ["Jupyter Notebook", "Python", "NLP"],
    "implementation-of-Sentiment-Analysis-using-Natural-Language-Processing",
    null,
    ["Natural-language processing workflow", "Fake-news detection and sentiment analysis", "Exploratory analysis in Jupyter"],
  ],
  [
    "5G Path Loss Prediction",
    "Machine learning applied to satellite imagery to predict path loss in 5G networks.",
    ["Python", "Machine Learning"],
    "5G-Path-Loss-Prediction-Satellite-Images",
    "project-5g-path-loss.png",
    ["Satellite-image feature analysis", "Machine-learning prediction pipeline", "5G network planning insights"],
  ],
  [
    "Bank Marketing Prediction",
    "An SVM classification model that predicts whether a customer will subscribe to a term deposit.",
    ["Jupyter Notebook", "Python", "SVM"],
    "Bank-Marketing-Data-Set-Prediction-Using-SVM",
    "project-bank-marketing.png",
    ["Customer-segment analysis", "Support Vector Machine classification", "Subscription likelihood prediction"],
  ],
  [
    "Employee Performance Analysis",
    "A data-preprocessing workflow that prepares employee performance data for reliable analysis.",
    ["Python", "Data Preprocessing"],
    "data-pre-processing-for-employees-performance-analysis",
    "project-employee-performance.png",
    ["Data cleaning and preparation", "Performance metric exploration", "Analysis-ready employee dataset"],
  ],
  [
    "Rice Leaf CNN Prediction",
    "A convolutional neural network project for classifying and predicting rice leaf conditions.",
    ["Jupyter Notebook", "Python", "CNN"],
    "RiceLeafCNNPrediction",
    "project-rice-cnn.png",
    ["Rice-leaf image classification", "CNN-based disease detection", "Healthy and diseased leaf prediction"],
  ],
  [
    "Serverless AWS Web App",
    "A serverless web application built with JavaScript and deployed on AWS infrastructure.",
    ["JavaScript", "AWS", "Serverless"],
    "Serverless-Web-Application-on-AWS-main-gt",
    "project-serverless-aws.png",
    ["Scalable serverless architecture", "Integrated AWS services", "Responsive JavaScript frontend"],
  ],
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
        {["Home", "About", "Certifications", "Projects", "Experience"].map((x) => (
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
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const photos = [
    ["neocloud-reception.jpeg", "Neo Cloud Technologies reception in Abuja"],
    ["neocloud-training.jpg", "A practical training session at Neo Cloud Technologies"],
    ["neocloud-workspace.jpeg", "Software development at Neo Cloud Technologies"],
    ["neocloud-school.jpg", "Hands-on learning at Neo Cloud Technologies"],
    ["neocloud-abuja.jpg", "Neo Cloud Technologies community in Abuja"],
  ];
  useEffect(() => {
    const timer = window.setInterval(
      () => setSelectedPhoto((current) => (current + 1) % photos.length),
      4500,
    );
    return () => window.clearInterval(timer);
  }, [photos.length]);
  return (
    <section className="present-showcase section" aria-labelledby="present-title">
      <div className="present-overview">
        <h2 id="present-title">
          Neo Cloud
          <br />
          <em>Technologies</em>
        </h2>
        <p className="present-lead">Building technology, people and a brighter tomorrow.</p>
        <p className="present-description">
          Neo Cloud Technologies is an Abuja-based
          multi-product IT firm providing software development, data science,
          cybersecurity, IT consulting, and technical training services. The
          company combines technology solutions with capacity-development
          programs designed to help individuals and organizations build
          practical digital skills.
        </p>
        <div className="present-actions">
          <a className="button" href="#projects">View My Work</a>
          <a className="button outline" href="https://techneo.ng/" target="_blank" rel="noreferrer">About Neo Cloud</a>
        </div>
      </div>
      <div className="present-photos">
        {photos.map(([file, description], index) => (
          <img
            className={`present-main-photo ${selectedPhoto === index ? "active" : ""}`}
            src={asset(file)}
            alt={selectedPhoto === index ? description : ""}
            aria-hidden={selectedPhoto !== index}
            loading="lazy"
            key={file}
          />
        ))}
        <div className="present-thumbnails" role="group" aria-label="Neo Cloud photos">
          {photos.map(([file, description], index) => (
            <button
              key={file}
              type="button"
              aria-label={`Show photo: ${description}`}
              aria-pressed={selectedPhoto === index}
              onClick={() => setSelectedPhoto(index)}
            >
              <img src={asset(file)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
        <p className="present-photo-caption">Turning ideas into<br />real-world impact.</p>
        <span className="present-location">Abuja, Nigeria</span>
      </div>
      <div className="present-bottom">
        <div className="present-role-panel">
          <div className="present-role-title">
            <span className="kicker">My Role at Neo Cloud</span>
            <h3>Lead Software Engineer,<br />Data Scientist &amp; Head of Training, Research &amp; Development.</h3>
          </div>
          <div className="present-role-description">
            <p>
              I have grown across three major positions within the company. My work
              spans building software solutions, applying data science and machine
              learning to real-world problems, and leading technical training,
              research, mentorship, and development initiatives.
            </p>
          </div>
        </div>
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
function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section className="projects section" id="projects">
      <div className="projects-head">
        <div>
          <span className="kicker">FEATURED GITHUB PROJECTS</span>
          <h2>
            Turning data into <em>working solutions.</em>
          </h2>
          <p>
            A collection of real-world projects showcasing skills in data
            science, machine learning, and cloud development.
          </p>
        </div>
        <a
          className="view-github"
          href="https://github.com/GodstimeEdet?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          View all repositories <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="project-list">
        {projects.map(
          ([title, description, tags, repository, image, highlights], index) => {
            const open = active === index;
            return (
              <article className={`project-row ${open ? "open" : ""}`} key={repository}>
                <button
                  className="project-summary"
                  id={`project-trigger-${index}`}
                  type="button"
                  aria-expanded={open}
                  aria-controls={`project-${index}`}
                  onClick={() => setActive(open ? null : index)}
                >
                  <span className="project-number">0{index + 1}.</span>
                  <svg className="project-folder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 7V5a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
                    <path d="M3 9h18" />
                  </svg>
                  <strong>{title}</strong>
                  <span className="project-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18 18 6M6 6h12v12" /></svg>
                  </span>
                </button>
                <div className="project-reveal" id={`project-${index}`} role="region" aria-labelledby={`project-trigger-${index}`} aria-hidden={!open} inert={!open}>
                  <div className="project-reveal-inner">
                  <div className="project-details">
                  <div className={`project-art ${image ? "" : "project-art-placeholder"}`}>
                    {image ? (
                      <img src={asset(image)} alt={`${title} project illustration`} />
                    ) : (
                      <><b>NLP</b><span>Fake-news sentiment analysis</span></>
                    )}
                  </div>
                  <div className="project-detail-copy">
                    <span className="project-label">PROJECT 0{index + 1}</span>
                    <h3>{title}</h3>
                    <div className="project-tags">
                      {tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <p>{description}</p>
                    <ul>
                      {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <a
                      href={`https://github.com/GodstimeEdet/${repository}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={asset("icon_github.png")} alt="" />
                      View on GitHub <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  </div>
                  </div>
                </div>
              </article>
            );
          },
        )}
      </div>
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
        <Projects />
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
          <a
            className="social-button github-button"
            href="https://github.com/GodstimeEdet"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
            <span>GitHub</span>
          </a>
          <button
            className="social-button top-button"
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 14 6-6 6 6" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
export default App;
