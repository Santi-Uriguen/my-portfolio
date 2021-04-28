import { Row, Col } from "react-bootstrap";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github.svg";
export default function About() {
  return (
    <Row className="about" id="about">
      <Col>
        <h2>Sobre mí</h2>
        <p>
          Soy un Desarrollador Web Front-End de Mendoza, Argentina, con ganas de
          despegar al mundo.
        </p>
        <p>
          Disfruto mucho la programación, crear aplicaciones y páginas web.
          Estoy siempre expandiendo y poniendo en práctica mis conocimientos del
          mundo IT, probando y aprendiendo tecnologías nuevas y siempre con
          algún proyecto activo y en proceso.
        </p>
      </Col>
      <Col className="icons">
        <a href="www.linkedin.com/in/santiago-uriguen">
          <img src={Linkedin} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/Santi-Uriguen">
          <img src={Github} alt="Github logo" />
        </a>
      </Col>
    </Row>
  );
}
