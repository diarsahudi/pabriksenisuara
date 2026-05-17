import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Playlists from "./pages/Playlists";
import Artists from "./pages/Artists";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* NEW PAGES */}
        <Route path="/services" element={<Services />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/artists" element={<Artists />} />

        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}