export default function Artists() {
  const artists = [
    {
      name: "Pabrik Seni Suara",
      role: "Curated Playlist",
    },
    {
      name: "Sound Laboratory",
      role: "Experimental Project",
    },
    {
      name: "Session Archive",
      role: "Production Works",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #151515 0%, #050505 70%)",
        color: "white",
        padding: "60px 30px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: 50 }}>
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.5,
            marginBottom: 10,
          }}
        >
          MUSIC COLLECTIVE
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Artists
          <br />
          & Sound Library
        </h1>

        <p
          style={{
            maxWidth: 650,
            marginTop: 24,
            opacity: 0.65,
            lineHeight: 1.8,
          }}
        >
          A curated ecosystem of music, collaborations,
          sonic experiments, and creative archives from
          Pabrik Seni Suara.
        </p>
      </div>

      {/* SPOTIFY */}
      <div
        style={{
          borderRadius: 28,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
          padding: 20,
          boxShadow: "0 10px 50px rgba(0,0,0,0.35)",
        }}
      >
        <iframe
          data-testid="embed-iframe"
          style={{
            borderRadius: "18px",
          }}
          src="https://open.spotify.com/embed/playlist/41z8RDW5bfky27qqKP5tBD?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {/* ARTIST CARDS */}
      <div
        style={{
          marginTop: 50,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}
      >
        {artists.map((artist, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: 28,
              borderRadius: 24,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              minHeight: 180,
            }}
          >
            {/* GLOW */}
            <div
              style={{
                position: "absolute",
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "rgba(178,138,82,0.15)",
                filter: "blur(60px)",
                top: -30,
                right: -30,
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <p
                style={{
                  opacity: 0.5,
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                PROJECT
              </p>

              <h2
                style={{
                  marginTop: 12,
                  fontSize: 28,
                  marginBottom: 10,
                }}
              >
                {artist.name}
              </h2>

              <p
                style={{
                  opacity: 0.65,
                  lineHeight: 1.7,
                }}
              >
                {artist.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}