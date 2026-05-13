export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#070707",
      color: "white",
      fontFamily: "sans-serif"
    }}>

      {/* NAVBAR */}
      <header style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        zIndex: 10
      }}>
        <div style={{ fontWeight: "bold" }}>
          Pabrik Seni Suara
        </div>

        <nav style={{ display: "flex", gap: 20, fontSize: 14, opacity: 0.8 }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#works" style={{ color: "white", textDecoration: "none" }}>Works</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 40,
        paddingTop: 120
      }}>
        <div style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "rgba(178,138,82,0.25)",
          marginBottom: 20
        }} />

        <h1 style={{
          fontSize: 56,
          fontWeight: 900,
          margin: 0
        }}>
          Pabrik Seni Suara
        </h1>

        <p style={{
          maxWidth: 520,
          marginTop: 20,
          opacity: 0.7,
          lineHeight: 1.6
        }}>
          Creative music ecosystem untuk produksi, rekaman, dan kolaborasi karya.
        </p>

        <button style={{
          marginTop: 30,
          padding: "14px 28px",
          borderRadius: 999,
          border: "none",
          background: "#B28A52",
          color: "black",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Start
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding: "100px 20px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}>
        <h2 style={{ fontSize: 40 }}>
          Ecosystem
        </h2>

        <p style={{ opacity: 0.6 }}>
          Studio • Label • Workshop • Artist Development
        </p>
      </section>

      {/* WORKS */}
      <section id="works" style={{
        padding: "100px 20px",
        textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}>
        <h2 style={{ fontSize: 40 }}>
          Works
        </h2>

        <p style={{ opacity: 0.6 }}>
          Music production • Sound design • Collaboration projects
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
  padding: "100px 20px",
  textAlign: "center",
  borderTop: "1px solid rgba(255,255,255,0.08)"
}}>
  <h2 style={{ fontSize: 40 }}>
    Contact
  </h2>

  <p style={{ opacity: 0.6, marginTop: 10 }}>
    Let's build your next sound project together
  </p>

  <div style={{
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 15,
    alignItems: "center"
  }}>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/628988331158"
      target="_blank"
      style={{
        padding: "12px 20px",
        borderRadius: 999,
        background: "#25D366",
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
        width: 220,
        textAlign: "center"
      }}
    >
      WhatsApp
    </a>

    {/* EMAIL */}
    <a
      href="mailto:pabriksenisuara@gmail.com"
      style={{
        padding: "12px 20px",
        borderRadius: 999,
        background: "#ffffff",
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
        width: 220,
        textAlign: "center"
      }}
    >
      Email
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://instagram.com/pabriksenisuara"
      target="_blank"
      style={{
        padding: "12px 20px",
        borderRadius: 999,
        background: "#E1306C",
        color: "white",
        fontWeight: "bold",
        textDecoration: "none",
        width: 220,
        textAlign: "center"
      }}
    >
      Instagram
    </a>

  </div>
</section>