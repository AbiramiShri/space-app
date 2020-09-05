import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap'

class HeaderComponent extends Component {
  render() {
    return (
      <>

        <Navbar bg="dark" variant="dark">
          <div className="container">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>

            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home">Dummy 1</Nav.Link>
              <Nav.Link href="#home">Dummy 2</Nav.Link>


            </Nav>
          </div>
        </Navbar>

      </>
    );
  }
}

export default HeaderComponent;
