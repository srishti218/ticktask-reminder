import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {

  useEffect(() => {
    document.title = "Privacy Policy – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Privacy Policy for TickTask Reminder. We do not collect, store, or share any personal data."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Privacy Policy</h1>
          <p style={styles.updated}>Last updated: 25 December 2025</p>

          <p style={styles.text}>
            TickTask Reminder respects your privacy. This Privacy Policy explains
            our commitment to protecting your information. We do <strong>not</strong>
            collect, store, or share any personal data in any form.
          </p>

          <Section title="1. Information We Collect">
            <p style={styles.text}>
              TickTask Reminder does <strong>not collect any personal or non-personal data</strong>.
              We do not require account creation, do not track usage, and do not
              collect device information.
            </p>
          </Section>

          <Section title="2. Task & Reminder Data">
            <p style={styles.text}>
              All tasks, reminders, and related information you create remain
              <strong> entirely on your device</strong>. This data is not transmitted
              to any server and is never accessible to us.
            </p>
          </Section>

          <Section title="3. Notifications">
            <p style={styles.text}>
              Notifications are used only to deliver reminders you explicitly set.
              TickTask Reminder does not send promotional notifications or background
              messages of any kind.
            </p>
          </Section>

          <Section title="4. Third-Party Services">
            <p style={styles.text}>
              TickTask Reminder does <strong>not use any third-party analytics,
              tracking, advertising, or data collection services</strong>.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p style={styles.text}>
              Since no data is collected or stored externally, there is no risk
              of your personal information being accessed, shared, or sold.
            </p>
          </Section>

          <Section title="6. Your Privacy Rights">
            <ul style={styles.list}>
              <li>You can use the app without providing any personal information</li>
              <li>You can delete tasks and reminders at any time from your device</li>
              <li>No data is retained after app deletion</li>
            </ul>
          </Section>

          <Section title="7. Changes to This Policy">
            <p style={styles.text}>
              If this Privacy Policy is updated in the future, changes will be
              reflected on this page.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p style={styles.text}>
              If you have any questions about this Privacy Policy, you can contact us at:
            </p>
            <p style={styles.contact}>srishti218@gmail.com</p>
          </Section>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <section style={styles.section}>
      <h2 style={styles.subtitle}>{title}</h2>
      {children}
    </section>
  );
}

const styles = {
  main: {
    backgroundColor: "#020617",
    color: "#e5e7eb"
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
  updated: {
    fontSize: "0.9rem",
    opacity: 0.7,
    marginBottom: "30px"
  },
  subtitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "10px"
  },
  section: {
    marginBottom: "30px"
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.7",
    opacity: 0.9
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "2",
    opacity: 0.9
  },
  contact: {
    fontSize: "1rem",
    fontWeight: "600",
    marginTop: "6px"
  }
};
