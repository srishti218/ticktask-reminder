import React from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>

        <div style={styles.text}>
          <h1 style={styles.title}>
            Stay Clear. Stay On Time.
          </h1>

          <p style={styles.subtitle}>
            TickTask Reminder helps you break tasks into simple steps
            and reminds you exactly when to act.
          </p>

          <div style={styles.actions}>
            <button style={styles.primary}>
              Get Started
            </button>
            <a href="/learn-more" style={styles.secondary}>
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(180deg, #020617, #0f172a)",
    color: "#e5e7eb"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    width: "100%"
  },
  text: {
    maxWidth: "600px"
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: "800",
    lineHeight: "1.1",
    marginBottom: "18px"
  },
  subtitle: {
    fontSize: "1.15rem",
    lineHeight: "1.6",
    opacity: 0.9,
    marginBottom: "32px"
  },
  actions: {
    display: "flex",
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
    backgroundColor: "transparent",
    color: "#e5e7eb",
    border: "2px solid #334155",
    padding: "12px 30px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
