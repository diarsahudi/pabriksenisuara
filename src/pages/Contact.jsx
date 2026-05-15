import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <h1 style={titleStyle}>
          Contact
        </h1>

        <p style={descStyle}>
          Open for collaboration, music production,
          artist development, creative partnership,
          and immersive artistic projects.
        </p>

        <div style={{ marginTop: 40 }}>
          <a
            href="mailto:pabriksenisuara@gmail.com"
            style={buttonStyle}
          >
            pabriksenisuara@gmail.com
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
  padding: "80px 8vw",
};

const titleStyle = {
  fontSize: "clamp(50px, 8vw, 100px)",
};

const descStyle = {
  opacity: 0.7,
  lineHeight: 1.8,
  maxWidth: 700,
  marginTop: 20,
};

const buttonStyle = {
  padding: "16px 28px",
  borderRadius: 999,
  background: "#B28A52",
  color: "black",
  textDecoration: "none",
  fontWeight: "bold",
};