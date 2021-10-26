import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={navStyles.navContainer}>
      <ul className={navStyles.ul}>
        <li className={navStyles.rotate}>
          <Link href="/#aboutme">
            <a className={navStyles.link}>
              <h5>about me</h5>
            </a>
          </Link>
        </li>
        <li className={navStyles.rotate}>
          <Link href="/#projects">
            <a className={navStyles.link}>
              <h5>projects</h5>
            </a>
          </Link>
        </li>
        <li className={navStyles.rotate}>
          <Link href="/#contacts">
            <a className={navStyles.link}>
              <h5>contacts</h5>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
