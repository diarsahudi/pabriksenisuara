import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = content[lang].nav;

  return (
    <div style={navStyle}>
      {/* LOGO */}
      <Link to="/" style={logo}>
        PSS
      </Link>

      {/* MENU */}
      <div style={center}>
        <Link to="/" style={link}>{t.home}</Link>
        <Link to="/about" style={link}>{t.about}</Link>
        <Link to="/services" style={link}>{t.services}</Link>
        <Link to="/playlists" style={link}>{t.playlists}</Link>
        <Link to="/artists" style={link}>{t.artists}</Link>
        <Link to="/works" style={link}>{t.works}</Link>
        <Link to="/contact" style={link}>{t.contact}</Link>
      </div>

      {/* LANGUAGE SWITCH */}
      <div style={right}>
        <button
          onClick={() => setLang("en")}
          style={btn}
        >
          EN
        </button>

        <button
          onClick={() => setLang("id")}
          style={btn}
        >
          ID
        </button>
      </div>
    </div>
  );
}

/* STYLES */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 8vw",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 10,
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(10px)",
};

const logo = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  letterSpacing: 2,
};

const center = {
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
};

const right = {
  display: "flex",
  gap: 10,
};

const link = {
  color: "white",
  textDecoration: "none",
  opacity: 0.8,
  fontSize: 14,
};

const btn = {
  padding: "6px 12px",
  borderRadius: 999,
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
};