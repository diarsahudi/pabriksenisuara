export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #151515 0%, #050505 70%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          padding: "24px 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backdropFilter: "blur(10px)",
          background: "rgba(0,0,0,0.35)",
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          Pabrik Seni Suara
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 14 }}>
          <a href="#services" style={linkStyle}>
            Services
          </a>

          <a href="#works" style={linkStyle}>
            Works
          </a>

          <a href="#artists" style={linkStyle}>
            Artists
          </a>

          <a href="#playlists" style={linkStyle}>
            Playlists
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          padding: "140px 8vw",
          textAlign: "center",
        }}
      >
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.5,
            marginBottom: 20,
          }}
        >
          MUSIC • ART • COLLABORATION
        </p>

        <h1
          style={{
            fontSize: "clamp(50px, 8vw, 120px)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Pabrik <br />
          Seni Suara
        </h1>

        <p
          style={{
            marginTop: 20,
            opacity: 0.7,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.8,
            fontSize: 18,
          }}
        >
          A creative music ecosystem from Yogyakarta —
          connecting artists, sound, and storytelling into a
          modern cinematic music experience.
        </p>

        <button
          style={{
            marginTop: 30,
            padding: "14px 28px",
            borderRadius: 999,
            border: "none",
            background: "#B28A52",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Works
        </button>
      </div>

      {/* SERVICES */}
      <div id="services" style={sectionStyle}>
        <p style={sectionLabel}>
          ECOSYSTEM
        </p>

        <h2 style={sectionTitle}>
          Services
        </h2>

        <p style={sectionDesc}>
          Music production, artist development,
          recording sessions, creative collaboration,
          sound design, visual identity, and immersive
          artistic exploration.
        </p>
      </div>

      {/* WORKS */}
      <div
        id="works"
        style={{
          padding: "120px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.5,
            marginBottom: 20,
          }}
        >
          SELECTED WORKS
        </p>

        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            marginTop: 0,
          }}
        >
          Featured Releases
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 30,
            marginTop: 50,
          }}
        >
          {/* WORK 1 */}
          <div style={workCard}>
            <iframe
              src="https://open.spotify.com/embed/track/7bTZgmjEJOscg1q7SrZO9v?utm_source=generator"
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

            <h3 style={workTitle}>
              Secrets of The Mysterious Mind
            </h3>

            <p style={workDesc}>
              An epic collaboration between Diar Sahudi
              and Eross Candra — blending emotional
              songwriting, cinematic ambience, and
              atmospheric alternative textures inspired by
              modern experimental rock.
            </p>
          </div>

          {/* WORK 2 */}
          <div style={workCard}>
            <iframe
              src="https://open.spotify.com/embed/track/1zxJag74JrR1CQmiqH7msN?utm_source=generator"
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

            <h3 style={workTitle}>
              Return
            </h3>

            <p style={workDesc}>
              A powerful modern rock release by Alceena
              Inside, driven by emotional intensity,
              atmospheric guitar layers, and cinematic
              energy.
            </p>
          </div>

          {/* WORK 3 */}
          <div style={workCard}>
            <iframe
              src="https://open.spotify.com/embed/track/2RXcziOsNBc9QygcLwhffT?utm_source=generator"
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

            <h3 style={workTitle}>
              I Can't Fight It Anymore
            </h3>

            <p style={workDesc}>
              An intimate indie pop-folk composition by
              Diar Sahudi, combining warm acoustic
              textures, emotional storytelling, and
              reflective cinematic ambience.
            </p>
          </div>
        </div>
      </div>

      {/* ARTISTS */}
      <div
        id="artists"
        style={{
          padding: "120px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p style={sectionLabel}>
          CREATIVE COLLECTIVE
        </p>

        <h2 style={sectionTitle}>
          Artists
        </h2>

        <p style={sectionDesc}>
          A growing collective of musicians, producers,
          visual artists, and collaborators connected
          through the evolving ecosystem of Pabrik Seni
          Suara.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: 30,
            marginTop: 60,
          }}
        >
          {/* ARTIST 1 */}
          <div style={artistCard}>
            <div style={artistImage}></div>

            <p style={artistRole}>
              Singer • Songwriter • Producer
            </p>

            <h3 style={artistName}>
              Diar Sahudi
            </h3>

            <p style={artistDesc}>
              Emotional storytelling through indie pop,
              cinematic ambience, and immersive sonic
              exploration.
            </p>
          </div>

          {/* ARTIST 2 */}
          <div style={artistCard}>
            <div style={artistImage}></div>

            <p style={artistRole}>
              Modern Rock Project
            </p>

            <h3 style={artistName}>
              Alceena Inside
            </h3>

            <p style={artistDesc}>
              Atmospheric modern rock with cinematic
              textures, alternative energy, and emotional
              intensity.
            </p>
          </div>

          {/* ARTIST 3 */}
          <div style={artistCard}>
            <div style={artistImage}></div>

            <p style={artistRole}>
              Creative Ecosystem
            </p>

            <h3 style={artistName}>
              Collaborative Artists
            </h3>

            <p style={artistDesc}>
              Musicians and creators collaborating across
              genres, visuals, and immersive artistic
              experiences.
            </p>
          </div>
        </div>
      </div>

      {/* PLAYLISTS */}
      <div
        id="playlists"
        style={{
          padding: "120px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <p style={sectionLabel}>
          CURATED PLAYLISTS
        </p>

        <h2 style={sectionTitle}>
          Sounds We Love
        </h2>

        <p style={sectionDesc}>
          Carefully curated selections from the universe
          of Pabrik Seni Suara — exploring emotional
          ambience, cinematic textures, indie discoveries,
          alternative energy, and immersive listening
          experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 30,
            marginTop: 60,
          }}
        >
          {/* PLAYLIST 1 */}
          <div style={workCard}>
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

            <h3 style={workTitle}>
              Curated Atmospheres
            </h3>

            <p style={workDesc}>
              A collection of immersive sounds,
              emotional textures, cinematic ambience,
              and atmospheric discoveries for deep
              listening sessions.
            </p>
          </div>

          {/* PLAYLIST 2 */}
          <div style={workCard}>
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

            <h3 style={workTitle}>
              Alternative Motion
            </h3>

            <p style={workDesc}>
              Modern alternative energy, emotional
              movement, late-night atmosphere, and
              cinematic rock explorations selected by
              Pabrik Seni Suara.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={sectionStyle}>
        <p style={sectionLabel}>
          CONTACT
        </p>

        <h2 style={sectionTitle}>
          Let's Build Something Together
        </h2>

        <p style={sectionDesc}>
          Open for collaboration, production,
          artist development, and creative projects.
        </p>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  opacity: 0.7,
};

const sectionStyle = {
  padding: "120px 8vw",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const sectionLabel = {
  letterSpacing: 4,
  opacity: 0.5,
};

const sectionTitle = {
  fontSize: "clamp(40px, 6vw, 80px)",
  marginTop: 20,
};

const sectionDesc = {
  maxWidth: 700,
  opacity: 0.7,
  lineHeight: 1.8,
  fontSize: 18,
};

const workCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 30,
  padding: 20,
  backdropFilter: "blur(10px)",
};

const workTitle = {
  marginTop: 24,
  fontSize: 28,
};

const workDesc = {
  opacity: 0.7,
  lineHeight: 1.8,
};

const artistCard = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 30,
  padding: 24,
  backdropFilter: "blur(10px)",
};

const artistImage = {
  height: 320,
  borderRadius: 24,
  background:
    "linear-gradient(135deg,#2b2b2b,#111111)",
  marginBottom: 24,
};

const artistRole = {
  letterSpacing: 3,
  opacity: 0.5,
  fontSize: 12,
};

const artistName = {
  fontSize: 34,
  marginTop: 12,
};

const artistDesc = {
  opacity: 0.7,
  lineHeight: 1.8,
};