import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function SeeHowItWorks() {

  useEffect(() => {
    document.title = "See How It Works – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "See how TickTask Reminder works step by step. From adding tasks to completing them with confidence."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>See How It Works</h1>
          <p style={styles.subtitle}>
            A simple system designed to help you act, not overthink.
          </p>

          <div style={styles.timeline}>

            <Step
              step="01"
              title="Add a Task"
              description="Start with one clear task. No categories, no complexity. Just write what needs to be done."
            />

            <Step
              step="02"
              title="Automatic Breakdown"
              description="Your task is converted into small, actionable steps so you always know what to do next."
            />

            <Step
              step="03"
              title="Set Time & Reminder"
              description="Pick the right date and time. TickTask handles remembering for you."
            />

            <Step
              step="04"
              title="Get Notified"
              description="Receive a clean, focused reminder—no noise, no spam."
            />

            <Step
              step="05"
              title="Tick and Move On"
              description="Complete the step, tick it off, and move forward with clarity."
            />

          </div>

          <div style={styles.ctaBox}>
            <p style={styles.ctaText}>
              The goal is progress, not perfection.
            </p>

            <div style={styles.buttons}>
              <a href="/get-started" style={styles.primary}>
                Get Started
              </a>
              <a href="/" style={styles.secondary}>
                Back to Home
              </a>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}

function Step({ step, title, description }) {
  return (
    <div style={styles.step}>
      <div style={styles.stepNumber}>{step}</div>
      <div>
        <h3 style={styles.stepTitle}>{title}</h3>
        <p style={styles.stepText}>{description}</p>
      </div>
    </div>
  );
}

const styles = {
  main: {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    minHeight: "100vh"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "80px 20px"
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "800",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.9,
    marginBottom: "60px"
  },
  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },
  step: {
    display: "flex",
    gap: "20px",
    backgroundColor: "#0f172a",
    padding: "28px",
    borderRadius: "16px"
  },
  stepNumber: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#0ea5e9",
    minWidth: "50px"
  },
  stepTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "6px"
  },
  stepText: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: 0.9
  },
  ctaBox: {
    marginTop: "70px",
    textAlign: "center",
    borderTop: "1px solid #1e293b",
    paddingTop: "40px"
  },
  ctaText: {
    fontSize: "1.2rem",
    marginBottom: "24px",
    opacity: 0.95
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap"
  },
  primary: {
    backgroundColor: "#0ea5e9",
    color: "#020617",
    padding: "14px 32px",
    borderRadius: "10px",
    fontWeight: "600",
    textDecoration: "none"
  },
  secondary: {
    color: "#94a3b8",
    fontWeight: "600",
    textDecoration: "none",
    padding: "14px 20px"
  }
};
