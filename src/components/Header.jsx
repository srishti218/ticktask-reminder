import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>

        <div style={styles.logo}>
          TickTask Reminder
        </div>

        <nav style={styles.nav}>
          <Tab to="/">Home</Tab>
          <Tab to="/learn-more">Learn More</Tab>
          <Tab to="/how-it-works">How It Works</Tab>
          <Tab to="/get-started">Get Started</Tab>
          <Tab to="/contact">Contact</Tab>
        </nav>

      </div>
    </header>
  );
}

function Tab({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        ...(isActive ? styles.active : {})
      })}
    >
      {children}
    </NavLink>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#020617",
    borderBottom: "1px solid #1e293b"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#e5e7eb"
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  },
  link: {
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#94a3b8"
  },
  active: {
    color: "#38bdf8"
  }
};
