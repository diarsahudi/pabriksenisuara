import { useNavigate } from "react-router-dom";

export default function Menu() {
  const nav = useNavigate();

  const cards = [
    {
      title: "Services",
      desc: "Production, recording, arrangement, and creative development.",
      path: "/services",
    },
    {
      title: "Works",
      desc: "Selected projects, collaborations, and sonic experiments.",
      path: "/works",
    },
    {
      title: "Artists",
      desc: "Music collective and curated Spotify sound library.",
      path: "/artists",
    },
    {
      title: "Contact",
      desc: "Start your next sound journey with us.",
      path: "/contact",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #161616 0%, #050505 65%)",
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
          ECOSYSTEM
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Explore
        </h1>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => nav(card.path)}
            style={{
              padding: 30,
              minHeight: 220,
              borderRadius: 28,
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",

              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",

              backdropFilter: "blur(12px)",

              transition: "0.3s",
            }}
          >
            {/* GLOW */}
            <div
              style={{
                position: "absolute",
                width: 180,
                height: 180,
                background: "rgba(178,138,82,0.15)",
                borderRadius: "50%",
                filter: "blur(60px)",
                top: -40,
                right: -40,
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <h2
                style={{
                  fontSize: 30,
                  marginBottom: 16,
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  opacity: 0.65,
                  lineHeight: 1.8,
                  fontSize: 15,
                }}
              >
                {card.desc}
              </p>

              <div
                style={{
                  marginTop: 30,
                  opacity: 0.5,
                  fontSize: 14,
                  letterSpacing: 2,
                }}
              >
                ENTER
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}