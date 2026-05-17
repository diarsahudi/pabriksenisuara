import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <p style={subtitle}>
          CONTACT
        </p>

        <h1 style={titleStyle}>
          Let’s Build Something
          Meaningful Together
        </h1>

        <p style={descStyle}>
          Open for collaboration, music production,
          artist development, creative partnership,
          live events, and immersive artistic projects.
        </p>

        <div style={buttonWrapper}>
          <a
            href="mailto:pabriksenisuara@gmail.com"
            style={buttonStyle}
          >
            ✉ Email
          </a>

          <a
            href="https://wa.me/6289988331158"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            💬 WhatsApp
          </a>

          <a
            href="https://instagram.com/pabriksenisuara"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "sans-serif",
};

const containerStyle = {
  padding: "100px 8vw",
  maxWidth: 1000,
};

const subtitle = {
  letterSpacing: 4,
  opacity: 0.5,
  fontSize: 12,
};

const titleStyle = {
  fontSize: "clamp(50px, 8vw, 100px)",
  lineHeight: 1.1,
  marginTop: 20,
};

const descStyle = {
  opacity: 0.72,
  lineHeight: 1.9,
  fontSize: 18,
  maxWidth: 760,
  marginTop: 30,
};

const buttonWrapper = {
  display: "flex",
  gap: 20,
  flexWrap: "wrap",
  marginTop: 60,
};

const buttonStyle = {
  padding: "16px 28px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(10px)",
};