import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;

  return (
    <div style={nav}>
      {/* MENU KIRI (SUDAH TANPA PSS) */}
      <div style={left} />

      {/* MENU TENGAH */}
      <div style={center}>
        <Link to="/">{t.home}</Link>
        <Link to="/about">{t.about}</Link>
        <Link to="/services">{t.services}</Link>
        <Link to="/playlists">{t.playlists}</Link>
        <Link to="/artists">{t.artists}</Link>
        <Link to="/works">{t.works}</Link>
        <Link to="/contact">{t.contact}</Link>
      </div>

      {/* LANGUAGE SWITCH */}
      <div style={right}>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("id")}>ID</button>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 8vw",
  position: "fixed",
  top: 0,
  width: "100%",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
  zIndex: 10,
};

const left = {
  width: 60, // spacer biar layout tetap balance
};

const center = {
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  justifyContent: "center",
};

const right = {
  display: "flex",
  gap: 10,
};