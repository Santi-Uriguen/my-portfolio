import { Container,Card } from "react-bootstrap";
import potreBanner from "../../../assets/potre.jpg";
export default function Banner() {
  return (
    <Container fluid>
      <Card>
        <Card.Img src={potreBanner}></Card.Img>
        <Card.ImgOverlay >
          <Card.Title as="h1" >Hola, soy Santiago Urigüen</Card.Title>
          <Card.Text>
            Desarrollador Web Front-End
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
}
