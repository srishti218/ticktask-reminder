import React from "react";

export default function Features() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Why TickTask Reminder?</h2>
      <p style={styles.subtitle}>
        Designed to remove confusion, not add features.
      </p>

      <div style={styles.grid}>
        <Feature
          title="Smart Task Breakdown"
          description="Enter one task. Get clear, actionable subtasks automatically."
        />
        <Feature
          title="Reliable Reminders"
          description="Set alarms that actually help you act on time."
        />
        <Feature
          title="Clean Checklists"
          description="No clutter. Just tasks you can finish."
        />
        <Feature
          title="Daily Focus"
          description="See exactly what matters today."
        />
        <Feature
          title="Edit Anytime"
          description="Update tasks, subtasks, and reminders with ease."
        />
        <Feature
          title="Built for Consistency"
          description="A system you can follow every day."
        />
      </div>
    </section>
  );
}

function Feature({ title, description }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{description}</p>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#0f172a",
    padding: "28px",
    borderRadius: "14px",
    textAlign: "left",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px"
  },
  cardText: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: 0.9
  }
};
