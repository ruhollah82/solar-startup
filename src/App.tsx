import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="container mx-auto px-4 pt-20 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
