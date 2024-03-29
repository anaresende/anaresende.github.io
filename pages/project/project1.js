import { server } from "../../config/index";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import project1styles from "../../styles/Project1.module.css";
import classnames from "classnames";

function Project1() {
  return (
    <>
      <section className={project1styles.full}>
        <div className={styles.container}>
          <h1>Wanna be a Globtrotter ?</h1>
          <p>do you have what it takes to make the team ?</p>
          <br />
          <Link href="/#projects">Go back</Link>
        </div>
      </section>
    </>
  );
}

export default Project1;
