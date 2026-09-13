import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import Statistics from "./components/Statistics";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import SignIn from "./pages/SignIn";
import StartFreeTrial from "./pages/StartFreeTrial";

function App() {
  return (
    <div className="min-h-screen bg-[#081A33] text-white">

      {/* Navigation */}
      <Navbar />

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Features />
              <Product />
              <Statistics />
              <Solutions />
              <Testimonials />
              <Pricing />
              <FAQ />
              <CTA />
            </main>
          }
        />

        {/* Other Pages */}
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/startfreetrial"
          element={<StartFreeTrial />}
        />

      </Routes>

      {/* Footer */}
    

    </div>
  );
}

export default App;