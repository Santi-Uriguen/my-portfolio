import { Container, Card } from "react-bootstrap";
import potreBanner from "../../../assets/potre.jpg";
import { useState } from "react";

export default function Banner() {
  const [state, setState] = useState("loading");
  const handleLoad = () => {
    setTimeout(() => {
      setState("");
    }, 500);
  };
  return (
    <Container fluid onLoad={handleLoad}>
      <Card>
        <Card.Img src={potreBanner}></Card.Img>
        <Card.ImgOverlay>
          <Card.Title as="h1" className={state}>
            Hola, soy Santiago Urigüen
          </Card.Title>
          <Card.Text className={state}>Desarrollador Web Front-End</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}
