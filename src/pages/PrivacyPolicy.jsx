import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {

  useEffect(() => {
    document.title = "Privacy Policy – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Privacy Policy for TickTask Reminder. Learn how we collect, use, and protect your information."
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
            how we collect, use, and protect your information when you use our
            application and website.
          </p>

          <Section title="1. Information We Collect">
            <p style={styles.text}>
              We collect minimal information required to operate the app effectively.
              This may include:
            </p>
            <ul style={styles.list}>
              <li>Basic account information (if you create an account)</li>
              <li>Tasks, reminders, and checklist data you enter</li>
              <li>Device and usage information for app performance</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul style={styles.list}>
              <li>To provide reminder and task functionality</li>
              <li>To improve app performance and reliability</li>
              <li>To fix bugs and enhance user experience</li>
            </ul>
          </Section>

          <Section title="3. Data Storage & Security">
            <p style={styles.text}>
              We take reasonable security measures to protect your data.
              Your information is never sold or shared with third parties
              for advertising purposes.
            </p>
          </Section>

          <Section title="4. Notifications & Reminders">
            <p style={styles.text}>
              TickTask Reminder uses notifications only to deliver reminders
              you explicitly set. We do not send promotional notifications
              without your consent.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p style={styles.text}>
              We may use trusted third-party services for analytics or hosting.
              These services are bound by their own privacy policies and are
              used only to support app functionality.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <ul style={styles.list}>
              <li>You can delete your tasks and reminders at any time</li>
              <li>You can stop using the app without providing personal data</li>
            </ul>
          </Section>

          <Section title="7. Changes to This Policy">
            <p style={styles.text}>
              We may update this Privacy Policy from time to time.
              Any changes will be reflected on this page.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p style={styles.text}>
              If you have any questions about this Privacy Policy,
              you can contact us at:
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
