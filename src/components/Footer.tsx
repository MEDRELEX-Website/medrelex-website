import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const COLS = [
  {
    title: "Platform",
    links: [
      ["How it works", "/platform"],
      ["The longitudinal record", "/platform#record"],
      ["Intelligence", "/intelligence"],
      ["Roadmap", "/platform#roadmap"],
    ],
  },
  {
    title: "For",
    links: [
      ["Individuals", "/membership"],
      ["Families", "/membership#family"],
      ["Physicians", "/physicians"],
      ["Family offices", "/membership#office"],
    ],
  },
  {
    title: "Trust",
    links: [
      ["Privacy & discretion", "/privacy"],
      ["Clinical boundary", "/intelligence#boundary"],
      ["Data ownership", "/privacy#ownership"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Vision", "/vision"],
      ["Request access", "/request-access"],
      ["Partner with us", "/physicians#partner"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} data-theme="dark" data-cta-stop>
      <div className="container">
        <div className={styles.disclaimer}>
          <p className={styles.dTitle}>Important information</p>
          <ol>
            <li>
              <strong>Development status.</strong> MEDRELEX is an early-stage health-technology product in active
              development. Capabilities described on this website represent the intended product; features are made
              available progressively and are not all available today.
            </li>
            <li>
              <strong>Not a medical device.</strong> MEDRELEX does not diagnose, treat or prevent any condition and does
              not replace the judgement of a qualified physician. Always consult your physician about your health.
            </li>
            <li>
              <strong>Illustrative content.</strong> Interface views, data and example insights shown on this website
              are illustrative and do not depict real individuals or real patient data.
            </li>
            <li>
              <strong>Integrations.</strong> Connections to specific providers, laboratories, pharmacies and devices are
              established progressively and depend on data availability, agreements and applicable requirements.
            </li>
          </ol>
        </div>

        <div className={styles.grid}>
          {COLS.map((c) => (
            <div key={c.title}>
              <h2 className={styles.colTitle}>{c.title}</h2>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.base}>
          <div>
            <Logo size={34} />
            <p className={styles.mission}>Your entire health ecosystem. One private health intelligence layer.</p>
          </div>
          <form className={styles.news} action="/request-access">
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input id="footer-email" name="email" type="email" placeholder="Receive private updates" required />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className={styles.legal}>
          <span>© {new Date().getFullYear()} MEDRELEX. All rights reserved.</span>
          <span>Photography: Unsplash</span>
        </div>
      </div>
    </footer>
  );
}
