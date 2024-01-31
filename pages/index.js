import styles from "../styles/Home.module.css";
import classnames from "classnames";
import { Parallax } from "react-scroll-parallax";
import { prefix } from "../prefix";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <h1 className={styles.title}>hello!</h1>
          <h4>my name is Ana and I&apos;m a frontend developer</h4>
        </div>
      </section>
      <section id="aboutme">
        <div className={classnames(styles.container, styles.about)}>
          <h2>
            I&apos;m Ana, <br />
            nice to meet you<span>!</span>
          </h2>
          <div className={styles.photo}>
            <Parallax y={[-10, 20]} tagOuter="figure">
              <img
                src={`${prefix}/images/eu.jpg`}
                alt="Picture of the author"
                height="582"
                width="515"
              />
            </Parallax>
          </div>
          <Parallax y={[20, -10]}>
            <div className={styles.bio}>
              <p>I&apos;m a dance teacher that switched the thrill of dancing for the art of coding!</p> 
              <p>
                Coming from a creative field, and with a background in design,
                I&apos;m keen on building clean code and looking for the pixel
                perfect to match the design on my implementations.
              </p>
              <p>
                I&apos;m very passion about visual arts so frontend web
                development comes as second nature to me - as a designer I
                understand the importance of creating the best experience for
                your users, so as web developer I will make my mission to
                accomplish that.
              </p>
              <p>
                When I&apos;m not coding you can be sure that I&apos;ll be
                working on some photography or video project - as I said before,
                visuals arts run in my blood.
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
              <a
                href="https://anaresende.github.io/wanna-be-a-globtrotter/"
                className={styles.projectCard}
              >
                <img
                  src={`${prefix}/images/project1.jpg`}
                  alt="Project Globtrotter"
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
              <a
                href="https://github.com/anaresende/project-popcorn"
                className={styles.projectCard}
              >
                <img
                  src={`${prefix}/images/project2.jpg`}
                  alt="Project Popcorn"
                  height="245"
                  width="333"
                />
                <div className={styles.coverup}>
                  <h4>Popcorn</h4>
                </div>
              </a>
              <a
                href="https://turningpoint.dance/"
                className={styles.projectCard}
              >
                <img
                  src={`${prefix}/images/project3.jpg`}
                  alt="Project Turning Point"
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
            </div>
          </Parallax>
        </div>
      </section>
      <section id="contacts">
        <div className={classnames(styles.container, styles.contacts)}>
          <h2>liked what you&apos;ve seen?</h2>
          <a href="mailto:anaresende93@gmail.com">
            <h4>let&apos;s get in touch</h4>
          </a>
        </div>
      </section>
    </>
  );
}
