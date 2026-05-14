export default function Artists() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "120px 8vw",
        fontFamily: "sans-serif",
      }}
    >
      <p
        style={{
          letterSpacing: 4,
          opacity: 0.5,
        }}
      >
        CREATIVE COLLECTIVE
      </p>

      <h1
        style={{
          fontSize: "120px",
          margin: "20px 0",
          lineHeight: 0.9,
        }}
      >
        Artists
      </h1>

      <div
        style={{
          display: "grid",
          gap: 30,
          marginTop: 60,
        }}
      >
        <div style={cardStyle}>
          <p style={roleStyle}>
            Singer • Songwriter • Producer
          </p>

          <h2 style={titleStyle}>Diar Sahudi</h2>

          <p style={descStyle}>
            Emotional songwriting, cinematic ambience,
            indie pop exploration, and immersive sonic
            storytelling.
          </p>
        </div>

        <div style={cardStyle}>
          <p style={roleStyle}>Modern Rock Project</p>

          <h2 style={titleStyle}>Alceena Inside</h2>

          <p style={descStyle}>
            Atmospheric modern rock with alternative energy,
            cinematic textures, and emotional intensity.
          </p>
        </div>

        <div style={cardStyle}>
          <p style={roleStyle}>Creative Ecosystem</p>

          <h2 style={titleStyle}>Collaborative Artists</h2>

          <p style={descStyle}>
            Musicians, producers, and creators connected
            through the evolving ecosystem of Pabrik Seni
            Suara.
          </p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: 40,
  borderRadius: 28,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const roleStyle = {
  opacity: 0.5,
  letterSpacing: 3,
  marginBottom: 12,
};

const titleStyle = {
  fontSize: 42,
  margin: 0,
};

const descStyle = {
  marginTop: 18,
  opacity: 0.7,
  lineHeight: 1.8,
  maxWidth: 700,
};
