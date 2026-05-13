import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Artists from "./pages/Artists";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
}