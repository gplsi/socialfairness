import Bubbles from "./Bubbles";
import { Button } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="body-wrap boxed-container">
        <Header></Header>
        <main>
          <section className="hero text-center">
            <div className="container-sm">
              <div className="hero-inner">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">
                  SocialFairness
                </h1>
                <p className="hero-paragraph is-revealing">
                  Herramienta para el análisis de la confiabilidad y la
                  toxicidad en medios digitales
                </p>
                <Bubbles></Bubbles>
              </div>
            </div>
          </section>
        </main>
        <section id="hide" className="features section text-center"></section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
