import { Navbar, Nav, Container } from "react-bootstrap";
import { JAM, NavLink } from "@/components";
import { useAppContext } from "@/context";
import { useState } from "react"; // Import useState

export default function Header() {
  const { darkMode, setExpanded } = useAppContext();
  const [expanded, setLocalExpanded] = useState(false); // Add local state for expanded

  function toggleHandler() {
    setExpanded((prevExpanded) => !prevExpanded);
    setLocalExpanded((prevExpanded) => !prevExpanded);
  }

  function handleNavLinkClick() {
    setLocalExpanded(false);
  }

  return (
    <header className="pb-0 z-index-1">
      <Navbar
        expand="md"
        className={`py-0 ${darkMode ? "navbar-dark" : "navbar-light"}`}
        expanded={expanded}
      >
        <Container fluid>
          <JAM />
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleHandler}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav onSelect={handleNavLinkClick}>
              <NavLink route="/" text="home" icon="icon-home3" />
              <NavLink route="/about" text="about" icon="icon-accessibility" />
              <NavLink
                route="/contact"
                text="contact"
                icon="icon-address-book"
              />
              <NavLink route="/shows" text="shows" icon="icon-calendar" />
              <NavLink route="/support" text="support" icon="icon-heart" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
