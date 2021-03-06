import { Navbar, Nav } from "react-bootstrap/";
import EN from "../../../assets/uk.png";

export default function NavbarComponent(props) {
  const handleNav = (e) => {
    let element = document.getElementById(e.target.name).offsetTop;
    element = element - element * 0.05;
    window.scrollTo({ top: element, behavior: "smooth" });
  };
  const handleClick = () => {
    props.setLanguage("EN");
  };
  return (
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand>
        <Nav.Link name="App" onClick={handleNav}>
          Mi portfolio
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link name="App" onClick={handleNav}>
            Inicio
          </Nav.Link>
          <Nav.Link name="proyects" onClick={handleNav}>
            Proyectos
          </Nav.Link>
          <Nav.Link name="Contact" onClick={handleNav}>
            Contacto
          </Nav.Link>
        </Nav>
        <div className="languageSwitch">
          <img src={EN} alt="english" onClick={handleClick} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
