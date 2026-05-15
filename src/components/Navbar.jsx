import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        padding: "24px 8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 999,
        backdropFilter: "blur(10px)",
        background: "rgba(0,0,0,0.35)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Pabrik Seni Suara
      </Link>

      <div
        style={{
          display: "flex",
          gap: 20,
          fontSize: 14,
        }}
      >
        <Link to="/works" style={linkStyle}>
          Works
        </Link>

        <Link to="/artists" style={linkStyle}>
          Artists
        </Link>

        <Link to="/playlists" style={linkStyle}>
          Playlists
        </Link>

        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  opacity: 0.7,
};