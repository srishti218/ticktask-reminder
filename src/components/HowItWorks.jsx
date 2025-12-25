import React from "react";

export default function HowItWorks() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>How It Works</h2>
      <p style={styles.subtitle}>
        Four simple steps to stay focused and on time.
      </p>

      <div style={styles.steps}>
        <Step
          number="1"
          title="Add a Task"
          description="Write what you need to get done. No complex setup."
        />
        <Step
          number="2"
          title="Get Smart Subtasks"
          description="Tasks are broken into clear, manageable steps."
        />
        <Step
          number="3"
          title="Set Reminders"
          description="Choose the right time. Get notified exactly when needed."
        />
        <Step
          number="4"
          title="Tick. Done."
          description="Complete tasks with confidence and peace of mind."
        />
      </div>
    </section>
  );
}

function Step({ number, title, description }) {
  return (
    <div style={styles.step}>
      <div style={styles.number}>{number}</div>
      <h3 style={styles.stepTitle}>{title}</h3>
      <p style={styles.stepText}>{description}</p>
    </div>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    textAlign: "center"
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "700",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "1.1rem",
    opacity: 0.85,
    marginBottom: "50px"
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "28px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  step: {
    backgroundColor: "#0f172a",
    padding: "30px",
    borderRadius: "16px",
    textAlign: "left"
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
  }
};
