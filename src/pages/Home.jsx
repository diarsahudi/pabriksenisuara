import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={pageStyle}>
      {/* BACKGROUND */}
      <div style={bgStyle}></div>
      <div style={overlayStyle}></div>

      <div style={glowOne}></div>
      <div style={glowTwo}></div>

      <Navbar />

      {/* HERO */}
      <div style={heroStyle}>
        <p style={subText}>MUSIC • ART • COLLABORATION</p>

        <h1 style={titleStyle}>
          Pabrik <br />
          Seni Suara
        </h1>

        <p style={descStyle}>
          A creative music ecosystem from Yogyakarta —
          connecting artists, sound, and storytelling into a
          modern cinematic music experience.
        </p>

        <Link to="/works">
          <button style={buttonStyle}>
            Explore Works
          </button>
        </Link>
      </div>

      {/* ABOUT SECTION */}
      <div style={aboutSection}>
        <p style={sectionTag}>ABOUT</p>

        <h2 style={aboutTitle}>
          A Creative Ecosystem Built Around Music,
          Storytelling, and Artistic Collaboration.
        </h2>

        <p style={aboutText}>
          Pabrik Seni Suara is an independent creative collective
          from Yogyakarta, Indonesia — built as a collaborative
          ecosystem for musicians, producers, visual creators,
          and storytellers.
        </p>

        <p style={aboutText}>
          We focus on music production, songwriting development,
          arrangement, recording, artist collaboration, visual identity,
          curated sound experiences, live performance, and experimental
          creative projects.
        </p>

        <p style={aboutText}>
          We believe music is not only to be heard, but to be felt,
          experienced, and shared as an emotional journey.
        </p>
      </div>

      {/* CONTACT SECTION */}
      <div style={contactSection}>
        <a href="https://instagram.com/pabriksenisuara" style={contactBtn}>
          Instagram
        </a>

        <a href="https://wa.me/628988331158" style={contactBtn}>
          WhatsApp
        </a>

        <a href="mailto:pabriksenisuara@gmail.com" style={contactBtn}>
          Email
        </a>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageStyle = {
  minHeight: "100vh",
  color: "white",
  fontFamily: "sans-serif",
  position: "relative",
  overflowX: "hidden",
  background: "#000",
};

/* BACKGROUND */
const bgStyle = {
  position: "absolute",
  inset: 0,
  backgroundImage: "url('/Studio.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.45) contrast(1.1)",
  zIndex: 0,
};

const overlayStyle = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(178,138,82,0.18), rgba(0,0,0,0.95) 60%)",
  zIndex: 1,
};

const glowOne = {
  position: "absolute",
  width: 500,
  height: 500,
  borderRadius: "50%",
  background: "rgba(178,138,82,0.18)",
  filter: "blur(120px)",
  top: -120,
  left: -120,
};

const glowTwo = {
  position: "absolute",
  width: 400,
  height: 400,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.06)",
  filter: "blur(120px)",
  bottom: -100,
  right: -100,
};

/* HERO */
const heroStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0 6vw",
  position: "relative",
  zIndex: 2,
};

const subText = {
  letterSpacing: 4,
  opacity: 0.6,
  fontSize: 12,
};

const titleStyle = {
  fontSize: "clamp(44px, 10vw, 110px)",
  lineHeight: 1.05,
  margin: "20px 0",
};

const descStyle = {
  maxWidth: 600,
  lineHeight: 1.8,
  opacity: 0.75,
};

/* ABOUT */
const aboutSection = {
  padding: "120px 8vw",
  background: "rgba(0,0,0,0.6)",
  position: "relative",
  zIndex: 2,
};

const sectionTag = {
  letterSpacing: 4,
  opacity: 0.5,
  fontSize: 12,
};

const aboutTitle = {
  fontSize: "clamp(30px, 5vw, 60px)",
  marginTop: 20,
  lineHeight: 1.2,
  maxWidth: 900,
};

const aboutText = {
  marginTop: 30,
  maxWidth: 900,
  lineHeight: 1.9,
  opacity: 0.75,
};

/* CONTACT */
const contactSection = {
  padding: "80px 8vw",
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  position: "relative",
  zIndex: 2,
};

const contactBtn = {
  padding: "14px 24px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.1)",
};

/* BUTTON */
const buttonStyle = {
  marginTop: 40,
  padding: "14px 28px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.15)",
  background: "linear-gradient(135deg, #B28A52, #7c3aed)",
  fontWeight: "bold",
  cursor: "pointer",
  color: "black",
};