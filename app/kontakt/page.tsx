import Link from "next/link";
import styles from "./Kontakt.module.css";

export default function Kontakt() {
  return (
    <main className={styles.mainContainer}>

      <section className={styles.contactSection}>
        <h1 className={styles.title}>Kontaktirajte Nas</h1>
        <p className={styles.subtitle}>
          Zajedno kreirajmo napredak za sjajan posao i super ideje
        </p>

        <div className={styles.infoGrid}>

          <div className={styles.infoCard}>
            <h3>Naš centar:</h3>
            <p>Ulica Stevana Nemanje br 2, Novi Pazar</p>
            <p>2. Osmana Dervišnurovića 33, Novi Pazar</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Naša email adresa:</h3>
            <a href="mailto:office@centarnit.com">
              office@centarnit.com
            </a>
          </div>

          <div className={styles.infoCard}>
            <h3>Kontakt brojevi:</h3>
            <div className={styles.phoneList}>
              <a href="tel:+381600390702">+381 60 0390702</a>
              <a href="tel:+381603907000">+381 60 3907000</a>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2>Spremni za jednostavnu budućnost?</h2>
          <button className={styles.ctaButton}>Krenimo onda!</button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>

          <div className={styles.footerLeft}>
            <h3>Centar NIT</h3>
            <p className={styles.footerSubtitle}>Biznis Inkubator</p>
            <p className={styles.footerText}>
              Inkubacija - Stvaranje odgovarajućeg okruženja za razvoj novih startapova
            </p>
            <Link href="/prijava" className={styles.footerLinkBtn}>
              Prijavi se
            </Link>
          </div>

          <div className={styles.footerRight}>
            <h4>Budite obavešteni o svim dešavanjima</h4>
            <p>Ne brinite, nećemo biti dosadni.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Vaša email adresa" />
              <button type="submit">Prijavi se</button>
            </form>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2015 Centar NIT. All rights reserved.
        </div>
      </footer>
    </main>
  );
}