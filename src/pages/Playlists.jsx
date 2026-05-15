import Navbar from "../components/Navbar";

export default function Playlists() {
  return (
    <div style={pageStyle}>
      <Navbar />

      <div style={containerStyle}>
        <h1 style={titleStyle}>
          Curated Playlists
        </h1>

        <p style={descStyle}>
          Carefully curated selections from the universe
          of Pabrik Seni Suara — exploring emotional
          ambience, cinematic textures, indie discoveries,
          alternative energy, and immersive listening
          experiences.
        </p>

        <div style={gridStyle}>
          {/* PLAYLIST 1 */}
          <div style={cardStyle}>
            <iframe
              src="https://open.spotify.com/embed/playlist/4B682vrPZw01jPVWSTsrVy?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                border: 0,
                borderRadius: 20,
              }}
            ></iframe>

            <h2>
              Curated Atmospheres
            </h2>

            <p style={descStyle}>
              A collection of immersive sounds,
              emotional textures, cinematic ambience,
              and atmospheric discoveries for deep
              listening sessions.
            </p>
          </div>

          {/* PLAYLIST 2 */}
          <div style={cardStyle}>
            <iframe
              src="https://open.spotify.com/embed/playlist/2sXrYDm0JJTKwGcrJzFmmq?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                border: 0,
                borderRadius: 20,
              }}
            ></iframe>

            <h2>
              Alternative Motion
            </h2>

            <p style={descStyle}>
              Modern alternative energy, emotional
              movement, late-night atmosphere, and
              cinematic rock explorations selected by
              Pabrik Seni Suara.
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
    "repeat(auto-fit,minmax(320px,1fr))",
  gap: 30,
  marginTop: 50,
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 30,
  padding: 20,
};

const descStyle = {
  opacity: 0.7,
  lineHeight: 1.8,
  marginTop: 20,
};