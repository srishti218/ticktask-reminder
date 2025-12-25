import React, { useEffect } from "react";
import Footer from "../components/Footer";
import seo from "../config/seo";

export default function LearnMore() {

  useEffect(() => {
    document.title = "Learn More – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn how TickTask Reminder helps you plan tasks, break them into steps, and stay on time with smart reminders."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.section}>
          <h1 style={styles.title}>How TickTask Reminder Helps You</h1>
          <p style={styles.intro}>
            TickTask Reminder is built for people who want clarity, not clutter.
            It focuses on execution—what to do, and when to do it.
          </p>
        </section>

        <section style={styles.sectionAlt}>
          <Feature
            title="Clear Task Thinking"
            text="Large tasks often feel overwhelming. TickTask helps you break them into simple, manageable steps so you always know what comes next."
          />
          <Feature
            title="Reliable Reminders"
            text="Set reminders that match your real schedule. No noise. Just timely nudges that help you act."
          />
          <Feature
            title="Daily Focus System"
            text="Instead of endless lists, you see what matters today. Less stress. More progress."
          />
          <Feature
            title="Built for Consistency"
            text="The design encourages daily use without friction. Simple inputs. Clear outputs."
          />
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Who Is It For?</h2>
          <ul style={styles.list}>
            <li>Professionals managing daily work</li>
            <li>Students balancing studies and deadlines</li>
            <li>Anyone who forgets tasks or reminders</li>
            <li>People who want calm productivity</li>
          </ul>
        </section>

        <section style={styles.sectionAlt}>
          <h2 style={styles.subtitle}>Our Philosophy</h2>
          <p style={styles.text}>
            Productivity should feel supportive, not stressful.
            TickTask Reminder exists to reduce mental load and help you
            move forward one clear step at a time.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Feature({ title, text }) {
  return (
    <div style={styles.feature}>
      <h3 style={styles.featureTitle}>{title}</h3>
      <p style={styles.text}>{text}</p>
    </div>
  );
}

const styles = {
  main: {
    backgroundColor: "#020617",
    color: "#e5e7eb"
  },
  section: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "80px 20px"
  },
  sectionAlt: {
    backgroundColor: "#0f172a",
    padding: "80px 20px"
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "800",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "16px"
  },
  intro: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    opacity: 0.9
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.7",
    opacity: 0.9
  },
  feature: {
    maxWidth: "900px",
    margin: "0 auto 40px",
    padding: "0 20px"
  },
  featureTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "8px"
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "2",
    opacity: 0.9
  }
};
