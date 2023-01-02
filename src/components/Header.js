import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://elements-cover-images-0.imgix.net/6359eb8d-2d31-4bea-a137-92baa4b68eb2?auto=compress%2Cformat&fit=max&w=2740&s=478a3e8e28b0c42eb79183d514a9406b"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Cafe Tonico
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header