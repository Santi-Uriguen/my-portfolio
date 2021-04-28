import { Container } from "react-bootstrap";

import Proyects from "./components/Proyects";
import About from "./components/About";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
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
