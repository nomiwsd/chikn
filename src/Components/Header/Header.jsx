import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { GiSpeakerOff } from 'react-icons/gi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
function Header() {
  return (
    <div  className='cont pb-2 m-0 position-fixed w-100'>
      <Navbar collapseOnSelect expand="lg" className='navbar d-flex justify-content-center py-3 m-0' variant="dark">
        <Container className='d-flex m-0' >
          <img src='chiknlogo.png' className='col-lg-1 col-md-2 col-4' />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='col-lg-11'>
            <Nav className="ms-auto  ms-3 d-flex  text-start justify-content-lg-end">
              <Nav.Link className='links  mx-2 '>Home</Nav.Link>
              <div class="dropdown">
                <button class="dropbtn my-2 mx-2 links">Chikn</button>
                <div class="dropdown-content">
                  <a href="#">Roost</a>
                  <a href="#">LeaderBoard</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn my-2  mx-2 links">Roostr</button>
                <div class="dropdown-content">
                  <a href="#">Roost</a>
                  <a href="#">LeaderBoard</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn my-2  mx-2 links">FarmLand</button>
                <div class="dropdown-content">
                  <a href="#">LP Farm</a>
                  <a href="#">Tiles /Traits</a>
                  <a href="#">Leaderboard</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn my-2  mx-2 links">Wallet</button>
                <div class="dropdown-content">
                  <a href="#">Chikn</a>
                  <a href="#">Roostr</a>
                  <a href="#">FarmLand</a>
                </div>
              </div>
              <div class="dropdown">
                <button class="dropbtn my-2  mx-2 links">Market</button>
                <div class="dropdown-content">
                  <a href="#">Chikn</a>
                  <a href="#">Roostr</a>
                  <a href="#">FarmLand</a>
                </div>
              </div>
              <div className="ms-lg-5">
                <Button className='navbarbtn'><GiSpeakerOff className='fs-4' /></Button>
                <Button className='walletbtn mx-3 px-2 links'>Connect Wallet</Button>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row justify-content-end m-0">
        <div className="col-lg-8 col-xl-6 col-12 me-2 me-lg-5">
          <span className='spand px-1 d-inline-block mx-1 my-1'>EGG 0.245<RiArrowDropDownFill className='fs-5  mx-0 text-danger' /></span>
          <span className='spand px-1 mx-1 py-0 d-none d-md-inline-block'>FEED 0.000543<RiArrowDropDownFill className=' fs-5   mx-0 text-danger' /></span>
          <span className='spand px-1 mx-1  d-none d-md-inline-block'>FERT 0.0216 <RiArrowDropDownFill className=' fs-5 mx-0 text-danger' /></span>
          <span className='spand px-1 d-inline-block mx-1 my-1'>AVAX 18.5 <RiArrowDropDownFill className='fs-5 mx-0 text-danger' /></span>
          <span className='spand px-1 d-inline-block mx-1 my-1'>GAS25<BsCheck className=' fs-5 text-success'/></span>
        </div>
      </div>
    </div>
  )
}

export default Header
