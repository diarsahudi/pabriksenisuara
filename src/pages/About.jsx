import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div style={pageStyle}>
      <Navbar />

      {/* HERO */}
      <div style={heroStyle}>
        <p style={tag}>ABOUT</p>

        <h1 style={title}>
          Pabrik Seni Suara
        </h1>

        <p style={subtitle}>
          A creative music ecosystem based in Yogyakarta, Indonesia.
        </p>
      </div>

      {/* CONTENT */}
      <div style={content}>

        <section style={block}>
          <h2 style={h2}>Who We Are</h2>
          <p style={text}>
            Pabrik Seni Suara is an independent creative collective dedicated
            to supporting all forms of musical expression. We accompany the
            journey from an initial idea to a fully realized work ready to be
            shared with audiences worldwide.
          </p>
        </section>

        <section style={block}>
          <h2 style={h2}>What We Do</h2>
          <p style={text}>
            Our core services include music production, songwriting, arrangement,
            professional recording, artist development, event organization,
            free record label support, and curated Spotify playlists.
            We help musicians, brands, and individuals create works that are
            unique, professional, and strongly defined in identity.
          </p>
        </section>

        <section style={block}>
          <h2 style={h2}>Creative Programs</h2>
          <p style={text}>
            Beyond production, we build programs for artistic growth such as
            music workshops, new artist incubation, collaborative cross-arts
            projects, and a release-sharing system designed to support emerging
            creators.
          </p>
        </section>

        <section style={block}>
          <h2 style={h2}>Expanding Ecosystem</h2>
          <p style={text}>
            Our future direction includes live streaming sessions, merchandising,
            publishing and licensing services, and a growing creative community
            that connects artists, producers, and collaborators across disciplines.
          </p>
        </section>

        <section style={block}>
          <h2 style={h2}>Vision</h2>
          <p style={text}>
            We believe music is not just something to be heard, but something
            to be experienced, shared, and remembered. Our mission is to build
            a long-lasting creative ecosystem where sound, emotion, and identity
            merge into meaningful artistic works.
          </p>
        </section>

      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const pageStyle = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "sans-serif",
  overflowX: "hidden",
};

/* HERO */
const heroStyle = {
  padding: "120px 8vw 60px",
  textAlign: "center",
};

const tag = {
  letterSpacing: 4,
  opacity: 0.5,
  fontSize: 12,
};

const title = {
  fontSize: "clamp(42px, 7vw, 90px)",
  marginTop: 20,
  lineHeight: 1.1,
};

const subtitle = {
  marginTop: 20,
  opacity: 0.7,
  fontSize: 18,
};

/* CONTENT */
const content = {
  padding: "60px 8vw 120px",
  maxWidth: 900,
  margin: "0 auto",
};

const block = {
  marginBottom: 60,
};

const h2 = {
  fontSize: 28,
  marginBottom: 16,
};

const text = {
  lineHeight: 1.9,
  opacity: 0.75,
  fontSize: 16,
};