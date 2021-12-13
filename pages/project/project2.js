import { server } from "../../config/index";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Project2() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container}>
          <h1>Popcorn</h1>
          <p>get your popcorn on!</p>
          <br />
          <Link href="/#projects">Go back</Link>
        </div>
      </section>
    </>
  );
}

export default Project2;
