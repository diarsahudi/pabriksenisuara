import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const { lang } = useLanguage();
  const t = content[lang];
  const navigate = useNavigate();

  return (
    <div style={page}>
      <Navbar />

      {/* BACKGROUND */}
      <div style={bg}></div>
      <div style={overlay}></div>

      {/* HERO */}
      <div style={hero}>
        <h1 style={title}>{t.heroTitle}</h1>

        <p style={desc}>{t.heroDesc}</p>

        <button onClick={() => navigate("/works")} style={btn}>
          {t.explore}
        </button>

        {/* CONTACT LINK (tetap ada di bawah) */}
        <div style={{ marginTop: 35 }}>
          <Link to="/contact" style={{ color: "white", opacity: 0.8 }}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ===================== STYLE ===================== */

const page = {
  minHeight: "100vh",
  color: "white",
  background: "#000",
  fontFamily: "sans-serif",
  position: "relative",
  overflow: "hidden",
};

const bg = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.45,
  zIndex: 0,
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(0,0,0,0.3), rgba(0,0,0,0.95))",
  zIndex: 1,
};

const hero = {
  position: "relative",
  zIndex: 2,
  paddingTop: 160,
  textAlign: "center",
  paddingLeft: "8vw",
  paddingRight: "8vw",
};

/* 🔥 TEXT DIPERBESAR */
const title = {
  fontSize: "clamp(70px, 9vw, 150px)",
  lineHeight: 1,
  marginBottom: 20,
  fontWeight: 700,
  letterSpacing: 1,
};

const desc = {
  fontSize: "clamp(18px, 2vw, 22px)",
  maxWidth: 800,
  margin: "0 auto",
  opacity: 0.75,
  lineHeight: 1.8,
  marginBottom: 30,
};

const btn = {
  padding: "14px 28px",
  background: "#B28A52",
  border: "none",
  borderRadius: 999,
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};