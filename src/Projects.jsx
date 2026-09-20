import { useEffect, useReducer, useRef } from "react";
import { FILE_MOTION_MS, initialSelection, projectSelection } from "./projectSelection.js";

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

const filePositions = [
  { left: 21, width: 58 }, { left: 18, width: 64 },
  { left: 19.5, width: 64 }, { left: 22, width: 63 },
  { left: 25, width: 61 }, { left: 29, width: 58 },
];
const iconPaths = [
  "M7 2h8l5 5v15H4V2h3m8 0v6h5M8 12h8M8 16h8",
  "M12 8v14M7 22l5-14 5 14M8 5a6 6 0 0 0 0 8M16 5a6 6 0 0 1 0 8M4 2a10 10 0 0 0 0 14M20 2a10 10 0 0 1 0 14",
  "M3 21V12h4v9m3 0V7h4v14m3 0V2h4v19M1 22h22",
  "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m9-1a3 3 0 1 0 0-6M2 22v-4a7 7 0 0 1 14 0v4H2m16-9a5 5 0 0 1 5 5v4h-4",
  "M3 18C1 5 14 3 22 2c-1 9-2 20-15 19M2 23 18 7",
  "M6 19a5 5 0 0 1-1-10 7 7 0 0 1 13-1 5.5 5.5 0 0 1 0 11H6",
];

export default function Projects() {
  const [selection, dispatch] = useReducer(projectSelection, initialSelection);
  const triggers = useRef([]);
  const expanded = selection.active !== null;
  useEffect(() => {
    if (selection.phase !== "closing" && selection.phase !== "opening") return;
    const timer = window.setTimeout(() => dispatch({ type: "settled" }), FILE_MOTION_MS);
    return () => window.clearTimeout(timer);
  }, [selection.phase, selection.active]);

  function closeFile(index) {
    triggers.current[index]?.focus({ preventScroll: true });
    dispatch({ type: "select", index: null });
  }

  return (
    <section className="projects section" id="projects">
      <div className="projects-head">
        <div>
          <span className="kicker">FEATURED GITHUB PROJECTS</span>
          <h2>Turning data into <em>working solutions.</em></h2>
          <p>A collection of real-world projects showcasing skills in data science, machine learning, and cloud development.</p>
        </div>
        <a className="view-github" href="https://github.com/GodstimeEdet?tab=repositories" target="_blank" rel="noreferrer">
          View all repositories <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className={`project-folder-shell ${expanded ? "project-open" : ""}`} style={{ "--file-motion": `${FILE_MOTION_MS}ms` }}>
        <div className="project-folder" onKeyDown={(event) => {
          if (event.key === "Escape" && expanded) {
            event.preventDefault();
            closeFile(selection.active);
          }
        }}>
          <img className="project-folder-art" src="/assets/project-folder-empty.png" alt="" aria-hidden="true" />
          {projects.map(([title, description, tags, repository, picture, highlights], index) => {
            const selected = selection.active === index;
            const open = selected && selection.phase !== "closing";
            return (
              <article
                key={repository}
                className={`project-file-layer ${open ? "open" : ""} ${selected ? "selected" : ""}`}
                style={{ "--i": index, "--file-left": `${filePositions[index].left}%`, "--file-width": `${filePositions[index].width}%` }}
              >
                <div className="project-paper-surface" aria-hidden="true">
                  <img className="project-file-paper" src="/assets/project-file-card.png" alt="" />
                </div>
                <button
                  className="project-file-trigger"
                  ref={(node) => { triggers.current[index] = node; }}
                  type="button"
                  aria-expanded={open}
                  aria-controls={`file-details-${index}`}
                  id={`file-title-${index}`}
                  onClick={() => dispatch({ type: "select", index })}
                >
                  <svg className={`file-symbol file-symbol-${index}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={iconPaths[index]} />
                  </svg>
                  <strong>{title}</strong>
                </button>
                <div className="project-file-details" id={`file-details-${index}`} role="region" aria-labelledby={`file-title-${index}`} aria-hidden={!open} inert={!open}>
                  <div className={`project-art ${picture ? "" : "project-art-placeholder"}`}>
                    {picture ? <img src={`/assets/${picture}`} alt={`${title} project illustration`} loading="lazy" /> : (
                      <><span className="nlp-newspaper" aria-hidden="true">NEWS / NLP</span><b>Fact or fiction?</b><span>Fake-news detection &amp; sentiment analysis</span></>
                    )}
                  </div>
                  <div className="project-detail-copy">
                    <span className="project-label">PROJECT 0{index + 1}</span>
                    <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <p>{description}</p>
                    <ul>{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                    <a href={`https://github.com/GodstimeEdet/${repository}`} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
                  </div>
                  <button className="project-close" type="button" onClick={() => closeFile(index)}>Return to folder <span aria-hidden="true">↓</span></button>
                </div>
              </article>
            );
          })}
          <img className="project-folder-front-layer" src="/assets/project-folder-empty.png" alt="" aria-hidden="true" />
        </div>
        <p className="project-hint">Select a file to explore the project.</p>
      </div>
    </section>
  );
}
