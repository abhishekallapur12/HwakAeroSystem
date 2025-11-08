import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BusinessGrowth from "./components/BusinessGrowth";
import ProductTurbo from "./pages/ProductTurbo";  // ✅ Product Page
import FloatingButtons from "./components/FloatingButtons";
import BottomBar from "./components/BottomBar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";
import AppsSection from "./components/AppsSection";
import TechnologySection from "./components/TechnologySection";
import Product1 from "./products/Product1";
import Distributor from "./pages/Distributor";
import TcoCalculator from "./components/TcoCalculator";
import Product from "./products/Product"; 
import { Helmet } from "react-helmet-async";
import { i } from "framer-motion/client";
import Product2 from "./products/Product2";
import Product3 from "./products/Product3";
function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white relative pb-[70px] overflow-x-hidden">
        <Header />

        <main>
          <Routes>
            {/* 🏠 Home Page */}
            <Route
              path="/"
              element={
                <>
                <Helmet>
        <title>Hawk Aerosystem | India’s Fastest Growing UAV & Aerospace Solutions</title>
        <meta name="description" content="Hawk Aerosystem is India's fastest-growing aerospace organization specializing in professional UAV manufacturing, drone-based agricultural solutions, logistics support, training and next-gen AI powered aerial systems." />
        <link rel="canonical" href="https://www.hawkaerosystem.co.uk" />
      </Helmet>
                  <HeroSection />
                  <BusinessGrowth />
                  <ProductSection />
                <TcoCalculator />
                  <AppsSection />
                  <TechnologySection />
                  <Footer />
                </>
                
              }
            />

            {/* 🚛 Product Page */}
            <Route path="/products" element={<Product />} />
             <Route path="/products1" element={<Product1 />} />
              <Route path="/products2" element={<Product3 />} />
              <Route path="/products3" element={<Product2 />} />

            {/* 📞 Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* 🧾 Book a Test Ride Page */}
            <Route path="/distributor" element={<Distributor />} />
            


          </Routes>
        </main>

        <FloatingButtons />
        <BottomBar />
      </div>
    </Router>
  );
}

export default App;
