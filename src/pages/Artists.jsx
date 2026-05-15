import Navbar from "../components/Navbar";

export default function Artists() {
  return (
    <div style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <h1 style={titleStyle}>
          Artists
        </h1>

        <div style={gridStyle}>
          {/* ARTIST 1 */}
          <div style={cardStyle}>
            <div style={imageStyle}></div>

            <h2>
              Diar Sahudi
            </h2>

            <p style={descStyle}>
              Emotional storytelling through indie pop,
              cinematic ambience, and immersive sonic
              exploration.
            </p>
          </div>

          {/* ARTIST 2 */}
          <div style={cardStyle}>
            <div style={imageStyle}></div>

            <h2>
              Alceena Inside
            </h2>

            <p style={descStyle}>
              Atmospheric modern rock with cinematic
              textures, alternative energy, and emotional
              intensity.
            </p>
          </div>

          {/* ARTIST 3 */}
          <div style={cardStyle}>
            <div style={imageStyle}></div>

            <h2>
              Collaborative Artists
            </h2>

            <p style={descStyle}>
              Musicians and creators collaborating
              across genres, visuals, and immersive
              artistic experiences.
            </p>
          </div>
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(300px,1fr))",
  gap: 30,
  marginTop: 50,
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 30,
  padding: 24,
};

const imageStyle = {
  height: 320,
  borderRadius: 24,
  background:
    "linear-gradient(135deg,#2b2b2b,#111111)",
  marginBottom: 24,
};

const descStyle = {
  opacity: 0.7,
  lineHeight: 1.8,
};