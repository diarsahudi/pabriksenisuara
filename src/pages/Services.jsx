export default function Services() {
  const services = [
    {
      title: "Music Production",
      desc: "Songwriting, arrangement, recording, and full music production.",
    },
    {
      title: "Recording Studio",
      desc: "Professional vocal tracking, instruments, and audio sessions.",
    },
    {
      title: "Artist Development",
      desc: "Creative direction, branding, and long-term artist growth.",
    },
    {
      title: "Sound Design",
      desc: "Experimental textures, cinematic sound, and sonic identity.",
    },
    {
      title: "Event & Performance",
      desc: "Live music support, creative events, and collaboration spaces.",
    },
    {
      title: "Label & Distribution",
      desc: "Music release support and digital distribution ecosystem.",
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
      <div style={{ marginBottom: 60 }}>
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.5,
            marginBottom: 10,
          }}
        >
          CREATIVE ECOSYSTEM
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Services
        </h1>

        <p
          style={{
            maxWidth: 700,
            marginTop: 24,
            opacity: 0.65,
            lineHeight: 1.8,
          }}
        >
          Pabrik Seni Suara provides a complete ecosystem
          for music production, artist growth, and creative collaboration.
        </p>
      </div>

      {/* SERVICE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: 30,
              borderRadius: 28,
              minHeight: 240,

              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(10px)",
            }}
          >
            {/* GLOW */}
            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                background: "rgba(178,138,82,0.12)",
                borderRadius: "50%",
                filter: "blur(70px)",
                top: -40,
                right: -40,
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
                SERVICE
              </p>

              <h2
                style={{
                  marginTop: 14,
                  marginBottom: 18,
                  fontSize: 30,
                  lineHeight: 1.1,
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  opacity: 0.68,
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}