import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        background:
          "radial-gradient(circle at top, #1b1b1b 0%, #050505 60%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* GLOW */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          background: "rgba(178,138,82,0.18)",
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <p
          style={{
            letterSpacing: 4,
            opacity: 0.6,
            marginBottom: 20,
          }}
        >
          MUSIC ECOSYSTEM
        </p>

        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            margin: 0,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          Pabrik
          <br />
          Seni Suara
        </h1>

        <p
          style={{
            maxWidth: 600,
            margin: "30px auto",
            opacity: 0.65,
            lineHeight: 1.8,
            fontSize: 16,
          }}
        >
          Production house, music collective, and sonic laboratory
          based in Indonesia.
        </p>

        <button
          onClick={() => navigate("/menu")}
          style={{
            marginTop: 10,
            padding: "16px 38px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "#B28A52",
            color: "black",
            fontWeight: "bold",
            fontSize: 15,
            cursor: "pointer",
            boxShadow: "0 10px 40px rgba(178,138,82,0.35)",
          }}
        >
          ENTER EXPERIENCE
        </button>
      </div>
    </div>
  );
}