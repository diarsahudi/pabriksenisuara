export default function Works() {
  const projects = [
    {
      title: "Secrets of The Mysterious Mind",
      category: "Spotify Release",
      desc: "An epic collaborative release from Diar Sahudi and Eross Candra, blending emotional songwriting with atmospheric guitar-driven soundscapes, cinematic ambience, experimental sonic exploration, and immersive modern instrumental textures inspired by alternative, ambient, and art-rock aesthetics.",
      link:
        "https://open.spotify.com/track/7bTZgmjEJOscg1q7SrZO9v?si=212c196b4e654fe4",
      embed:
        "https://open.spotify.com/embed/track/7bTZgmjEJOscg1q7SrZO9v?utm_source=generator",
    },

    {
      title: "Return",
      category: "Single Release",
      desc: "A modern rock composition from Alceena Inside, driven by atmospheric guitar layers, emotional intensity, and cinematic dynamics that blend reflective ambience with powerful alternative rock energy.",
      link:
        "https://open.spotify.com/track/1zxJag74JrR1CQmiqH7msN",
      embed:
        "https://open.spotify.com/embed/track/1zxJag74JrR1CQmiqH7msN?utm_source=generator",
    },

    {
      title: "I Can't Fight It Anymore",
      category: "Original Song",
      desc: "An intimate indie pop-folk ballad by Diar Sahudi, exploring emotional vulnerability, quiet longing, and personal reflection through warm acoustic textures, minimalist arrangements, and heartfelt melodic storytelling.",
      link:
        "https://open.spotify.com/track/2RXcziOsNBc9QygcLwhffT",
      embed:
        "https://open.spotify.com/embed/track/2RXcziOsNBc9QygcLwhffT?utm_source=generator",
    },

    {
      title: "Sound Experiments",
      category: "Creative Lab",
      desc: "Exploration of sonic textures, ambient layers, cinematic atmosphere, and modern sound identity developed through collaborative experimentation inside the creative ecosystem of Pabrik Seni Suara.",
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
      {/* CINEMATIC TEXTURE */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      {/* HEADER */}
      <div style={{ marginBottom: 60 }}>
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.5,
            marginBottom: 10,
          }}
        >
          SELECTED PROJECTS
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Works
        </h1>

        <p
          style={{
            maxWidth: 700,
            marginTop: 24,
            opacity: 0.65,
            lineHeight: 1.8,
          }}
        >
          A collection of music productions, sonic explorations,
          collaborations, and creative works from the ecosystem
          of Pabrik Seni Suara.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: 30,
              borderRadius: 28,
              minHeight: 260,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              transition: "all 0.4s ease",
              cursor: "pointer",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.border =
                "1px solid rgba(178,138,82,0.35)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(178,138,82,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.08)";
              e.currentTarget.style.boxShadow =
                "0 0 0 rgba(0,0,0,0)";
            }}
          >
            {/* GLOW */}
            <div
              style={{
                position: "absolute",
                width: 200,
                height: 200,
                background: "rgba(178,138,82,0.12)",
                borderRadius: "50%",
                filter: "blur(80px)",
                top: -50,
                right: -50,
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
                {project.category}
              </p>

              <h2
                style={{
                  marginTop: 16,
                  marginBottom: 18,
                  fontSize: 34,
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  opacity: 0.68,
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                {project.desc}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: 20,
                    padding: "10px 18px",
                    borderRadius: 999,
                    background: "#1DB954",
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  Open Spotify
                </a>
              )}

              {project.embed && (
                <div
                  style={{
                    marginTop: 24,
                    borderRadius: 18,
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={project.embed}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{
                      borderRadius: 18,
                    }}
                  ></iframe>
                </div>
              )}

              <div
                style={{
                  marginTop: 28,
                  opacity: 0.45,
                  letterSpacing: 2,
                  fontSize: 13,
                }}
              >
                ARCHIVE
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}