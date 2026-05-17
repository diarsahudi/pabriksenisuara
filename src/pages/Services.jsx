import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language";

export default function Services() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div style={page}>
      <Navbar />

      <div style={container}>
        <h1 style={title}>{t.servicesTitle}</h1>

        <p style={desc}>{t.servicesDesc}</p>

        {/* SERVICES LIST */}
        <div style={grid}>
          <div style={card}>Music Production</div>
          <div style={card}>Arrangement & Sound Design</div>
          <div style={card}>Recording Studio Service</div>
          <div style={card}>Artist Management</div>
          <div style={card}>Event Organizer</div>
          <div style={card}>Record Label Support</div>
          <div style={card}>Spotify Playlist Curation</div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLE (DISAMAKAN DENGAN HOME) ================= */

const page = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "sans-serif", // 🔥 INI KUNCI SAMA DENGAN HOME
};

const container = {
  padding: "120px 8vw",
};

const title = {
  fontSize: "clamp(70px, 9vw, 150px)", // 🔥 SAMA DENGAN HOME HERO
  lineHeight: 1,
  marginBottom: 20,
  fontWeight: 700,
};

const desc = {
  fontSize: "clamp(18px, 2vw, 22px)", // 🔥 SAMA DENGAN HOME
  opacity: 0.75,
  maxWidth: 800,
  lineHeight: 1.8,
  marginBottom: 40,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
};

const card = {
  padding: 18,
  borderRadius: 16,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  fontSize: "16px", // 🔥 SAMAKAN BODY TEXT
  opacity: 0.85,
};