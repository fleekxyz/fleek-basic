import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fleek ⚡️ Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://fleek.xyz">Next.js on Fleek! ⚡️</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://docs.fleek.xyz" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Fleek ⚡️</p>
          </a>

          <a href="https://docs.fleek.xyz/docs" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Get started with learning everything about Fleek ⚡️</p>
          </a>

          <a
            href="https://github.com/fleekxyz"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js Fleek templates.</p>
          </a>

          <a
            href="https://docs.fleek.xyz/docs/Sites/managed"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Learn how to instantly deploy your Next.js site to Fleek.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://fleek.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by ⚡️
          Fleek
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
