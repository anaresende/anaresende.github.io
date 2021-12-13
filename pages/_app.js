import Nav from "../components/Nav";
import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
}

export default MyApp;
