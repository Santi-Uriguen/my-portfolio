import { Container } from "react-bootstrap";
import Proyects from "./components/EnProyects";
import About from "./components/EnAbout";
import Techs from "./components/EnTechs";
import Contact from "./components/EnContact";

export default function Main() {
  return (
    <main id="main">
      <Container fluid>
        <About />
        <Techs />
        <Proyects />
        <Contact />
      </Container>
    </main>
  );
}
