import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function GetStarted() {

  useEffect(() => {
    document.title = "Get Started – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get started with TickTask Reminder. Set up your first task and experience calm productivity."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Get Started</h1>
          <p style={styles.subtitle}>
            Start simple. Build momentum.
          </p>

          <div style={styles.steps}>
            <Step
              number="1"
              title="Create Your First Task"
              text="Write one thing you need to get done. No pressure. Start small."
            />
            <Step
              number="2"
              title="Break It Into Steps"
              text="TickTask helps you think clearly by turning tasks into manageable steps."
            />
            <Step
              number="3"
              title="Set a Reminder"
              text="Choose the right time. Let the app handle remembering."
            />
            <Step
              number="4"
              title="Take Action"
              text="When the reminder comes, act. Tick it off. Move forward."
            />
          </div>

          <div style={styles.ctaBox}>
            <p style={styles.ctaText}>
              You don’t need to plan everything.  
              Just take the next clear step.
            </p>

            <div style={styles.buttons}>
              <button style={styles.primary}>
                Download App
              </button>
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

function Step({ number, title, text }) {
  return (
    <div style={styles.step}>
      <div style={styles.number}>{number}</div>
      <h3 style={styles.stepTitle}>{title}</h3>
      <p style={styles.stepText}>{text}</p>
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
    marginBottom: "50px"
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    marginBottom: "60px"
  },
  step: {
    backgroundColor: "#0f172a",
    padding: "30px",
    borderRadius: "16px"
  },
  number: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    backgroundColor: "#0ea5e9",
    color: "#020617",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px"
  },
  stepTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "8px"
  },
  stepText: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: 0.9
  },
  ctaBox: {
    textAlign: "center",
    paddingTop: "40px",
    borderTop: "1px solid #1e293b"
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
    border: "none",
    padding: "14px 32px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer"
  },
  secondary: {
    color: "#94a3b8",
    textDecoration: "none",
    padding: "14px 20px",
    fontSize: "1rem",
    fontWeight: "600"
  }
};
