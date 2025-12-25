import React, { useEffect } from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import seo from "../config/seo";

export default function LandingPage() {

  useEffect(() => {
    // SEO setup
    document.title = seo.landing.title;

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        seo.landing.description
      );
    }
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}
