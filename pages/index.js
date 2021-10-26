import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container}>
          <h1 className={styles.title}>hello!</h1>
          <h4>my name is Ana and this is my portfolio</h4>
        </div>
      </section>
      <section className={styles.container} id="aboutme">
        <div className={styles.container}>
          <h2>
            I'm Ana, <br />
            nice to meet you!
          </h2>
        </div>
      </section>
      <section className={styles.container} id="projects">
        <div className={styles.container}>
          <h3>
            do you wanna <br /> know more about <br /> my work?
          </h3>
        </div>
      </section>
      <section className={styles.container} id="contacts">
        <div className={styles.container}>
          <h2>liked what you seen?</h2>
          <h4>let's get in touch</h4>
        </div>
      </section>
    </>
  );
}
