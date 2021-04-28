import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Gmail from "../../../assets/gmail.svg";
import Whatsapp from "../../../assets/whatsapp.svg";
export default function Contact() {
  return (
    <Container fluid className="Contact" id="Contact">
      <Row>
        <Col>
          <Form className="Form">
            <h2>Contactame!</h2>
            <Form.Row className="inputs">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Email..." />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Nombre..." />
              </Form.Group>
            </Form.Row>
            <Form.Row className="textarea">
              <textarea placeholder="Escribir mensaje..."></textarea>
            </Form.Row>
            <Button variant="secondary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col className="datos">
          <div className="a">
            <img src={Gmail} alt="Gmail" />
            <h4>santiuriguen@gmail.com</h4>
          </div>
          <a
            href=" https://wa.me/5492615431092"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
