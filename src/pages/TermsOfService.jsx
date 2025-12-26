import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function TermsOfService() {

  useEffect(() => {
    document.title = "Terms of Service – TickTask Reminder";

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Terms of Service for TickTask Reminder. Understand the rules and conditions for using our app and website."
      );
    }
  }, []);

  return (
    <>
      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Terms of Service</h1>
          <p style={styles.updated}>Last updated: 25 December 2025</p>

          <p style={styles.text}>
            These Terms of Service govern your use of TickTask Reminder.
            By accessing or using our app or website, you agree to these terms.
            If you do not agree, please do not use the service.
          </p>

          <Section title="1. Use of the Service">
            <p style={styles.text}>
              TickTask Reminder is provided to help you manage tasks and reminders.
              You agree to use the service only for lawful purposes and in a way
              that does not harm others or the platform.
            </p>
          </Section>

          <Section title="2. User Content">
            <p style={styles.text}>
              You are responsible for the tasks, reminders, and content you create
              within the app. We do not claim ownership of your content.
            </p>
          </Section>

          <Section title="3. Availability">
            <p style={styles.text}>
              We strive to keep the service available and reliable, but we do not
              guarantee uninterrupted access. Features may change or be discontinued
              at any time.
            </p>
          </Section>

          <Section title="4. Notifications & Reminders">
            <p style={styles.text}>
              Reminders are delivered based on system permissions and device settings.
              We are not responsible for missed notifications due to device or
              operating system limitations.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p style={styles.text}>
              The TickTask Reminder name, design, and software are our intellectual
              property. You may not copy, modify, or distribute them without permission.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p style={styles.text}>
              TickTask Reminder is provided “as is”. We are not liable for any loss,
              damage, or missed deadlines resulting from the use of the service.
            </p>
          </Section>

          <Section title="7. Termination">
            <p style={styles.text}>
              We reserve the right to suspend or terminate access if these terms
              are violated or if required by law.
            </p>
          </Section>

          <Section title="8. Changes to These Terms">
            <p style={styles.text}>
              These terms may be updated from time to time. Continued use of the
              service means you accept the updated terms.
            </p>
          </Section>

          <Section title="9. Contact">
            <p style={styles.text}>
              If you have questions about these Terms of Service, contact us at:
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
  contact: {
    fontSize: "1rem",
    fontWeight: "600",
    marginTop: "6px"
  }
};
