import Nav from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
