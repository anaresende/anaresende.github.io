import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={navStyles.navContainer}>
      <ul className={navStyles.ul}>
        <li className={navStyles.rotate}>
          <Link href="/#aboutme">
            <a className={navStyles.link}>
              <span>about me</span>
            </a>
          </Link>
        </li>
        <li className={navStyles.rotate}>
          <Link href="/#projects">
            <a className={navStyles.link}>
              <span>projects</span>
            </a>
          </Link>
        </li>
        <li className={navStyles.rotate}>
          <Link href="/#contacts">
            <a className={navStyles.link}>
              <span>contacts</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
