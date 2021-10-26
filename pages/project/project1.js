import { server } from "../../config/index";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Project1() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container}>
          <h1>Turning Point — Escola de Dança</h1>
          <p>cenas aqui</p>
          <br />
          <Link href="/">Go back</Link>
        </div>
      </section>
    </>
  );
}

export default Project1;
