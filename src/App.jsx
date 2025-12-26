import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LearnMore from "./pages/LearnMore";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import SeeHowItWorks from "./pages/SeeHowItWorks";


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/how-it-works" element={<SeeHowItWorks />} />

      </Routes>
    </BrowserRouter>
  );
}
