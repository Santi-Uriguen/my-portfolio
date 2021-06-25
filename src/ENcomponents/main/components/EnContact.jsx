import { Container, Form, Row, Col } from "react-bootstrap";
import Gmail from "../../../assets/gmail.svg";
import Whatsapp from "../../../assets/whatsapp.svg";
import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState({
    nombre: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (event) => {
    const templateId = "template_tphavaf";
    sendFeedback(templateId, {
      message: state.message,
      from_name: state.nombre,
      reply_to: state.email,
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_v1kasql", templateId, variables)
      .then(() => {
        alert("Email enviado satisfactoriamente!");
      })
      .catch((err) => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        alert("Ha ocurrido un error inesperado al enviar el mail");
      });
  };
  return (
    <Container fluid className="Contact formSection" id="Contact">
      <Row>
        <Col>
          <Form className="Form">
            <h2>Let's talk!</h2>
            <Form.Row className="inputs">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  placeholder="Email..."
                  required
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="text"
                  placeholder="Name..."
                  name="nombre"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="textarea">
              <textarea
                type="text"
                className="textarea form-control"
                id="textarea"
                required
                name="message"
                placeholder="Enter message..."
                onChange={handleChange}
              />
            </Form.Row>
            <input
              type="button"
              value="Send"
              onClick={handleSubmit}
              className="btn sendBtnShow btn-primary"
            ></input>
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
