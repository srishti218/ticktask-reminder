import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function Contact() {

  useEffect(() => {
    document.title = "Contact – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact TickTask Reminder. Reach out for support, feedback, or general questions."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Contact Us</h1>
          <p style={styles.subtitle}>
            We’re here to help. Reach out anytime.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Support</h3>
              <p style={styles.text}>
                For app issues, reminders, or technical questions.
              </p>
              <p style={styles.contact}>srishti218@gmail.com</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Feedback</h3>
              <p style={styles.text}>
                Have ideas or suggestions? We’d love to hear from you.
              </p>
              <p style={styles.contact}>srishti218@gmail.com</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>General Inquiries</h3>
              <p style={styles.text}>
                Partnerships, business, or other questions.
              </p>
              <p style={styles.contact}>srishti218@gmail.com</p>
            </div>
          </div>

          <div style={styles.note}>
            <p style={styles.noteText}>
              We usually respond within 24–48 hours.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px"
  },
  card: {
    backgroundColor: "#0f172a",
    padding: "30px",
    borderRadius: "16px"
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "10px"
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    opacity: 0.9,
    marginBottom: "10px"
  },
  contact: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#38bdf8"
  },
  note: {
    marginTop: "50px",
    textAlign: "center"
  },
  noteText: {
    fontSize: "0.95rem",
    opacity: 0.7
  }
};
