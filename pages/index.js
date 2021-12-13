import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import meImage from "../media/images/eu.jpg";
import classnames from "classnames";
import { Parallax } from "react-scroll-parallax";
import project1 from "../media/images/project1.jpg";
import project2 from "../media/images/project2.jpg";
import project3 from "../media/images/project3.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>hello!</h1>
          <h4>my name is Ana and this is my portfolio</h4>
        </div>
      </section>
      <section id="aboutme">
        <div className={classnames(styles.container, styles.about)}>
          <h2>
            I'm Ana, <br />
            nice to meet you<span>!</span>
          </h2>
          <div className={styles.photo}>
            <Parallax y={[-10, 20]} tagOuter="figure">
              <Image
                src={meImage}
                alt="Picture of the author"
                height="582"
                width="515"
              />
            </Parallax>
          </div>
          <Parallax y={[20, -10]}>
            <div className={styles.bio}>
              <p>I’m a dance teacher going into tech!</p>
              <p>
                Coming from a creative field, and with a background in design,
                I’m keen on building clean code and looking for the pixel
                perfect to match the design on my implementations.
              </p>
              <p>
                I'm very passion about visual arts so frontend web development
                comes as second nature to me — as a designer I understand the
                importance of creating the best experience for your users, so as
                web developer I will make my mission to accomplish that.
              </p>
              <p>
                When I'm not coding you can be sure that I'll be working on some
                photography or video project — as I said before, visuals arts
                run in my blood.
              </p>
            </div>
          </Parallax>
        </div>
      </section>
      <section id="projects">
        <div className={styles.container}>
          <h2>
            do you wanna <br /> know more about <br /> my work?
          </h2>
          <Parallax y={[20, -10]}>
            <div className={styles.works}>
              <Link href="/project/project1">
                <a className={styles.projectCard}>
                  <Image
                    src={project1}
                    alt="Picture of the author"
                    height="245"
                    width="333"
                  />
                  <div className={styles.coverup}>
                    <h4>
                      Wanna be a <br />
                      Globtrotter?
                    </h4>
                  </div>
                </a>
              </Link>
              <Link href="/project/project2">
                <a className={styles.projectCard}>
                  <Image
                    src={project2}
                    alt="Picture of the author"
                    height="245"
                    width="333"
                  />
                  <div className={styles.coverup}>
                    <h4>Popcorn</h4>
                  </div>
                </a>
              </Link>
              <Link href="/project/project3">
                <a className={styles.projectCard}>
                  <Image
                    src={project3}
                    alt="Picture of the author"
                    height="245"
                    width="333"
                  />
                  <div className={styles.coverup}>
                    <h4>
                      Turning <br />
                      Point
                    </h4>
                  </div>
                </a>
              </Link>
            </div>
          </Parallax>
        </div>
      </section>
      <section id="contacts">
        <div className={classnames(styles.container, styles.contacts)}>
          <h2>liked what you seen?</h2>
          <a href="mailto:anaresende93@gmail.com">
            <h4>let's get in touch</h4>
          </a>
        </div>
      </section>
    </>
  );
}
