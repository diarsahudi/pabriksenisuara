import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import Artists from "./pages/Artists";
import Playlists from "./pages/Playlists";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MAIN PAGES */}
        <Route path="/works" element={<Works />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* NEW PAGE */}
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}