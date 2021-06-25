import { Row, Col } from "react-bootstrap";
import Linkedin from "../../../assets/linkedin.svg";
import Github from "../../../assets/github.svg";
import CV from "../../../assets/cv.svg";
import CVSpanish from "../../../assets/CV Santiago Urigüen - Español.pdf";
import CVEnglish from "../../../assets/CV Santiago Urigüen - English.pdf";
import spanish from "../../../assets/spain.png";
import english from "../../../assets/uk.png";
export default function About() {
  const handleClick = (e) => {
    if (e.target.className === "imgShow") {
      e.target.className = "imgClicked";
      setTimeout(() => {
        document.getElementById("language").className = "language show";
      }, 200);
    } else {
      document.getElementById("language").className = "language hidden";
      setTimeout(() => {
        document.getElementById("cvimage").className = "imgShow";
      }, 200);
    }
  };
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
        <a
          href="https://www.linkedin.com/in/santiago-uriguen"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/Santi-Uriguen"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="Github logo" />
        </a>
        <div className="cvContainer">
          <img
            src={CV}
            alt="Curriculum vitae"
            className="imgShow"
            onClick={handleClick}
            id="cvimage"
          />
          <div className="language hidden" id="language" onClick={handleClick}>
            <div className="int">
              <a href={CVSpanish} target="_blank" rel="noreferrer">
                <img src={spanish} alt="spanish flag" />
              </a>
              <a href={CVEnglish} target="_blank" rel="noreferrer">
                <img src={english} alt="english flag" />
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
