import { Navbar, Nav } from "react-bootstrap/";
export default function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#main">Mi portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" bg="dark"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#App">Inicio</Nav.Link>
          <Nav.Link href="#proyects">Proyectos</Nav.Link>
          <Nav.Link href="#Contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
