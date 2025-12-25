import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        <div style={styles.brand}>
          <strong>TickTask Reminder</strong>
          <p style={styles.tagline}>
            Simple tasks. Clear reminders.
          </p>
        </div>

        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="#" style={styles.link}>Terms of Service</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>

      </div>

      <div style={styles.bottom}>
        © {year} TickTask Reminder. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    padding: "40px 20px 20px"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px"
  },
  brand: {
    maxWidth: "280px"
  },
  tagline: {
    fontSize: "0.95rem",
    opacity: 0.8,
    marginTop: "6px"
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap"
  },
  link: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.9rem"
  },
  bottom: {
    borderTop: "1px solid #0f172a",
    marginTop: "30px",
    paddingTop: "16px",
    fontSize: "0.85rem",
    textAlign: "center",
    opacity: 0.7
  }
};
