import React from "react";

export default function CTA() {
  return (
    <section style={styles.cta}>
      <h2 style={styles.title}>
        Plan Less. Execute More.
      </h2>

      <p style={styles.subtitle}>
        Smart reminders with clear task breakdowns.
        Built for focus, not clutter.
      </p>

      <div style={styles.buttons}>
        <button style={styles.primary}>
          Download App
        </button>

        <a href="/how-it-works" style={styles.secondary}>
  See How It Works
</a>
      </div>
    </section>
  );
}

const styles = {
  cta: {
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f766e, #0ea5e9)",
    color: "#ffffff"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "12px"
  },
  subtitle: {
    fontSize: "1.1rem",
    maxWidth: "520px",
    margin: "0 auto 30px",
    opacity: 0.95
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap"
  },
  primary: {
    backgroundColor: "#ffffff",
    color: "#0f766e",
    border: "none",
    padding: "14px 30px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer"
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid #ffffff",
    padding: "12px 28px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer"
  }
};
