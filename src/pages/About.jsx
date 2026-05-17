import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language";

export default function About() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div style={pageStyle}>
      <Navbar />

      <div style={container}>

        {/* HEADER */}
        <p style={sub}>ABOUT</p>

        <h1 style={title}>
          Pabrik Seni Suara
        </h1>

        <p style={lead}>
          {t.aboutDesc}
        </p>

        {/* CORE */}
        <Section title="CORE MOVEMENT">
          <p>
            Pabrik Seni Suara is a creative home that supports musical expression from idea to release,
            building strong artistic identity through collaboration and long-term creative development.
          </p>
        </Section>

        {/* SERVICES */}
        <Section title="CORE SERVICES">
          <List
            items={[
              "Music production & songwriting",
              "Arrangement & sonic development",
              "Professional recording",
              "Artist management",
              "Event organizing",
              "Free record label support",
              "Spotify playlist curation",
            ]}
          />
        </Section>

        {/* PROGRAMS */}
        <Section title="CREATIVE PROGRAMS">
          <List
            items={[
              "Arisan rilisan (release circulation system)",
              "Music workshops",
              "New artist incubation",
              "Cross-disciplinary collaboration",
              "Opportunity to become producer",
            ]}
          />
        </Section>

        {/* ECOSYSTEM */}
        <Section title="EXPANDING ECOSYSTEM">
          <List
            items={[
              "Live streaming projects",
              "Merchandising development",
              "Publishing & licensing",
              "Creative community network",
            ]}
          />
        </Section>

        {/* WHO WE WORK WITH */}
        <Section title="WHO WE WORK WITH">
          <List
            items={[
              "Independent musicians",
              "Brands & creative businesses",
              "Schools & institutions",
              "Event organizers",
              "Individual creators",
            ]}
          />
        </Section>

        {/* PHILOSOPHY */}
        <Section title="PHILOSOPHY">
          <p>
            We believe music is not just a product, but a long-term creative identity.
            Every work is designed to be meaningful, sustainable, and emotionally connected to its audience.
          </p>

          <p>
            Pabrik Seni Suara exists as a partner in building artistic value that lasts beyond trends.
          </p>
        </Section>

      </div>
    </div>
  );
}

/* COMPONENT */
function Section({ title, children }) {
  return (
    <div style={{ marginTop: 60 }}>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={{ opacity: 0.85, lineHeight: 1.9, fontSize: 18 }}>
        {children}
      </div>
    </div>
  );
}

function List({ items }) {
  return (
    <ul style={{ paddingLeft: 20 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 10 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* STYLE */
const pageStyle = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "sans-serif",
};

const container = {
  padding: "100px 8vw",
  maxWidth: 1000,
};

const sub = {
  letterSpacing: 4,
  opacity: 0.5,
};

const title = {
  fontSize: "clamp(50px, 8vw, 110px)",
  marginTop: 20,
  lineHeight: 1.1,
};

const lead = {
  marginTop: 30,
  fontSize: 18,
  lineHeight: 1.8,
  opacity: 0.8,
  maxWidth: 800,
};

const sectionTitle = {
  fontSize: 22,
  marginBottom: 16,
  color: "#B28A52",
};