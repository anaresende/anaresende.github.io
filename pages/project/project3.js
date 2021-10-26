import { server } from "../../config/index";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

function Project3() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container}>
          <h1>Wanna be a Globtrotter ?</h1>
          <p>do you have what it takes to make the team ?</p>
          <br />
          <Link href="/">Go back</Link>
        </div>
      </section>
    </>
  );
}

export default Project3;
