import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <h4>
              Made by{" "}
              <a href="https://github.com/Santi-Uriguen">Santiago Urigüen</a>
            </h4>
          </Col>
          <Col>
            <div>
              Icons by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.es/" title="Flaticon">
                www.flaticon.es
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
