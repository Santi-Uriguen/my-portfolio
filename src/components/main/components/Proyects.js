import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Carousel,
} from "react-bootstrap";
import Gifos from "../../../assets/gifos1.png";
import Gifos2 from "../../../assets/gifos 2.png";
import Mauricio1 from "../../../assets/mauricio1.png";
import Mauricio2 from "../../../assets/mauricio2.png";
import Mauricio3 from "../../../assets/mauricio3.png";
import Periodic from "../../../assets/periodic.png";
import Podcast2 from "../../../assets/podcast 2.png";
import Podcast from "../../../assets/podcast.png";
import Reserva from "../../../assets/reserva.png";
import Rewards from "../../../assets/Rewards store.png";
import Rewards2 from "../../../assets/rewards2.png";
import AV1 from "../../../assets/av1.png";
import AV2 from "../../../assets/av2.png";
import AV3 from "../../../assets/av3.png";

export default function Proyects() {
  window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".proyectCard");
    for (let i = 0; i < elements.length; i++) {
      const individualElement = elements[i];
      const elementHeight = individualElement.getBoundingClientRect().top;
      const windowBottom = window.innerHeight;
      const windowTop = window.innerHeight * -0.65;
      if (elementHeight <= windowBottom && elementHeight > windowTop) {
        individualElement.className = "proyectCard list-group-item show";
      } else {
        individualElement.className = "proyectCard list-group-item";
      }
    }
  });

  return (
    <Container fluid id="proyects">
      <Row className="proyects">
        <Col>
          <h2>Proyectos</h2>
          <ListGroup horizontal>
            <ListGroup.Item className="proyectCard">
              <a
                href="https://santi-uriguen.github.io/store-uriguen-santiago/"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={Rewards} alt="Reward store" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Rewards2} alt="Reward store" />
                  </Carousel.Item>
                </Carousel>
                <h4>Rewards Store</h4>
                <p>
                  Aplicación e-commerce que le permite a usuarios/as canjear
                  puntos por productos de un catálogo.
                  <br /> Cuarto proyecto realizado en la carrera 'Desarrollo Web
                  Front-End' de Acamica.
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a
                href="https://santi-uriguen.github.io/Proyecto-Gifos/"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={Gifos} alt="Gifos" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Gifos2} alt="Gifos" />
                  </Carousel.Item>
                </Carousel>
                <h4>GIFOS</h4>
                <p>
                  Aplicación web interactiva para compartir, crear y descargar
                  GIFs animados, con obtención de datos de la API de Giphy.com
                  <br />
                  Segundo proyecto de la carrera 'Desarrollo Web Front-End' de
                  Acamica.
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a href="https://ry4e9.csb.app/" target="_blank" rel="noreferrer">
                <Image src={Reserva} alt="Reserva" />
                <h4>Reserva de alojamientos</h4>
                <p>
                  Aplicación de búsqueda hotelera.
                  <br />
                  Tercer proyecto de la carrera 'Desarrollo Web Front-End' de
                  Acamica.
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a
                href="http://mauricioruizvial.com/#/home"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={Mauricio1} alt="Mauricio Ruiz" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Mauricio2} alt="Mauricio Ruiz" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Mauricio3} alt="Mauricio Ruiz" />
                  </Carousel.Item>
                </Carousel>
                <h4>Mauricio Ruiz</h4>
                <p>
                  Landing Page para Mauricio Ruiz, empresa de transporte y
                  servicios viales.
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a
                href="https://santi-uriguen.github.io/AVRegionales/"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={AV1} alt="AV Regionales" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={AV2} alt="AV Regionales" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={AV3} alt="AV Rg}egionales" />
                  </Carousel.Item>
                </Carousel>
                <h4>AV Regionales</h4>
                <p>
                  Catálogo online y e-commerce para empresa de venta de
                  artículos regionales
                  <br />
                  <i>En proceso</i>
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a
                href="https://santi-uriguen.github.io/Podcast-Channel/"
                target="_blank"
                rel="noreferrer"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={Podcast} alt="Podcast Channel" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={Podcast2} alt="Podcast Channel" />
                  </Carousel.Item>
                </Carousel>
                <h4>Podcast Channel</h4>
                <p>
                  Landing page de un canal de podcast con reproducción de
                  contenidos y navegación. <br />
                  Primer proyecto de la carrera 'Desarrollo Web Front-End' de
                  Acamica
                </p>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="proyectCard">
              <a
                href="https://santi-uriguen.github.io/Tabla-Periodica/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Periodic} />
                <h4>Tabla Periódica</h4>
                <p>Tabla periódica interactiva online</p>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
