import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../redux/actions/actionLogin'

const NavBar = () => {
    const dispatch = useDispatch()
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid className='d-flex' >
            <Navbar.Brand href="/"><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653327695/o3mt4pt8xdytmvrwddt5.png' alt='logo' style={{ maxHeight: '100px' }} /></Navbar.Brand>
            <Navbar.Brand href="/"><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1653164820/izctxtxey7bfiym2tzbc.png' alt='logo' style={{ maxHeight: '100px' }} /></Navbar.Brand>
            <Navbar.Collapse className='d-grid gap-2 d-md-flex justify-content-md-end' id="navbarScroll">
              <Button href='/' variant="warning border-primary">Pokemones</Button>     
              <Button href='/info' variant="warning border-primary">Historia Pokémon</Button>              
              <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <Button href='/login' variant="danger" onClick={() => dispatch(logoutAsync())}>Cerrar Sesión</Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }

export default NavBar