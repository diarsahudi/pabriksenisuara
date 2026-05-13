export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #1a1a1a 0%, #050505 70%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* AMBIENT GLOW */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          background: "rgba(178,138,82,0.16)",
          borderRadius: "50%",
          filter: "blur(140px)",
          top: -250,
          right: -150,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: -200,
          left: -100,
        }}
      />

      {/* TEXTURE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.12,
        }}
      />

      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "22px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,0.28)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: 18,
          }}
        >
          Pabrik Seni Suara
        </div>

        <nav
          style={{
            display: "flex",
            gap: 28,
            fontSize: 14,
          }}
        >
          <a href="/services" style={linkStyle}>
            Services
          </a>

          <a href="/works" style={linkStyle}>
            Works
          </a>

          <a href="/artists" style={linkStyle}>
            Artists
          </a>

          <a href="/contact" style={linkStyle}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 8vw 80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: 900,
          }}
        >
          <p
            style={{
              letterSpacing: 5,
              opacity: 0.5,
              marginBottom: 20,
              fontSize: 13,
            }}
          >
            MUSIC • ART • COLLABORATION • CULTURE
          </p>

          <h1
            style={{
              fontSize: "clamp(68px, 11vw, 170px)",
              lineHeight: 0.9,
              margin: 0,
              fontWeight: 900,
              letterSpacing: -5,
            }}
          >
            Pabrik
            <br />
            Seni
            <br />
            Suara
          </h1>

          <p
            style={{
              marginTop: 30,
              maxWidth: 620,
              lineHeight: 1.9,
              fontSize: 18,
              opacity: 0.72,
            }}
          >
            A creative music ecosystem from Yogyakarta,
            connecting artists, sound, visuals, collaboration,
            and immersive musical experiences into one evolving
            artistic movement.
          </p>

          <div
            style={{
              display: "flex",
              gap: 18,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <a href="/works" style={primaryButton}>
              Explore Works
            </a>

            <a href="/artists" style={secondaryButton}>
              Discover Artists
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING SPOTIFY PLAYER */}
      <div
        style={{
          position: "absolute",
          right: "5vw",
          bottom: 60,
          width: 340,
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/41z8RDW5bfky27qqKP5tBD?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  transition: "0.3s",
};

const primaryButton = {
  padding: "16px 28px",
  borderRadius: 999,
  background: "#B28A52",
  color: "black",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
};

const secondaryButton = {
  padding: "16px 28px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  textDecoration: "none",
  fontWeight: 700,
  display: "inline-block",
  backdropFilter: "blur(10px)",
};