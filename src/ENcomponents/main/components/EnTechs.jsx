import { Row, Col, ListGroup, Image } from "react-bootstrap";

import htmlIcon from "../../../assets/html-5.svg";
import cssIcon from "../../../assets/css.svg";
import javascriptIcon from "../../../assets/logo-javascript.svg";
import bootstrapIcon from "../../../assets/bootstrap-4.svg";
import gitIcon from "../../../assets/git.svg";
import reactIcon from "../../../assets/react.svg";
import sassIcon from "../../../assets/sass.svg";

export default function Techs() {
  return (
    <Row className="tech">
      <Col>
        <h2>Technologies and tools</h2>
        <ListGroup horizontal>
          <ListGroup.Item>
            <Image src={htmlIcon} />
            <h4>HTML 5</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={cssIcon} />
            <h4>CSS 3</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={javascriptIcon} />
            <h4>Javascript EC6+</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={reactIcon} />
            <h4>React.js</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={bootstrapIcon} />
            <h4>Bootstrap</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={gitIcon} />
            <h4>Git & Github</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image src={sassIcon} />
            <h4>Scss</h4>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
