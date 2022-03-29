import { useNavigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavbarApp = () => {
  let navigate = useNavigate();

  function handleLogOut() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    
    fetch("http://localhost:5000/protected", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  
  },[]);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">El Pololito</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
          <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/petition">Nuevo aviso</Nav.Link>
            
            <Nav.Link href="/publications">Mis avisos</Nav.Link>
            <Nav.Link href="/pololitos">Mis pololitos</Nav.Link>
            <NavDropdown title="Nombre">
              <NavDropdown.Item>Perfil</NavDropdown.Item>
              <NavDropdown.Item>Ayuda</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogOut}>
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
