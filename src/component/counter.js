// import React, { useState, usesEffect } from "react" allows you to make use of the hooks in react;
import React, { useState,useEffect }  from 'react';
import { Navbar, Container, Nav, NavDropdown ,Dropdown } from 'react-bootstrap';

// Overall, this component appears to be a navigation bar that can change its appearance based on whether the user has scrolled the page. The active link and scroll state are managed with hooks, and an event listener is set up to track scrolling behavior. The component may render the navigation elements and style them based on the scrolled state.

function NavBar() {
  //  making use of the useState Hooks
    const[activeLink,setactiveLink]=useState('home');
    const[scrolled,seScrolled]=useState(false);
    const[IsNavOpen,setIsNavOpen] = useState(false);
  

    useEffect(()=>{
      const onScroll = () =>{
        if (window.scrollY > 50){
          seScrolled(true);
        }
        else{
          seScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    },[]);

    const onUpdateLink=(value)=> {
      setactiveLink(value)
    }

    const Truetoggle = () => {
      setIsNavOpen(!IsNavOpen);
    }

  return (
    <div className="">  
        {/* NavBar section as a logo,product,Solution(dropdown),Problem(dropdown),community(dropdown),open source(dropdown),and Pricing  */}
         <Navbar expand="lg" className={`${IsNavOpen ? 'navbar-open' : ''} ${scrolled ? 'scrolled' : ''}`} >                        {/* The className prop is being used to conditionally apply a CSS class based on the scrolled state. The expression {scrolled ? "scrolled" : ""} is a ternary operator. It checks the value of the scrolled state. If scrolled is true, it sets the class to "scrolled," and if it's false, it sets it to an empty string (no class).              */}
          <Container>

            <Navbar.Brand href="#home">
              <img src={""} alt='logo'/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={Truetoggle} >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
              {/* <span className='navbar-toggle-icon'></span> */}
            </Navbar.Toggle>


            <Navbar.Collapse id="basic-navbar-nav" className={`me-auto ${IsNavOpen ? 'navbar-collapse-custom' : ''}`}>
              <Nav className="me-auto"  >
                <Nav.Link href="#product" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateLink('home')}>Product</Nav.Link>
                {/* <Nav.Link href="#solution">Solution</Nav.Link> */}
                
                <NavDropdown title='Solution' id="nav-dropdown-white-example" className="custom-dropdown" >
                  <Dropdown title='Solution' id="basic-nav-dropdown" >
                    <Dropdown.Item  href="#/action-1" >Contribute</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">General participation </Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown>
                </NavDropdown>
                {/* <Nav.Link href="#solution"> */}
                <NavDropdown title='Problems' id="basic-nav-dropdown" className="custom-dropdown">
                  <Dropdown id="basic-nav-dropdown" >
                    <Dropdown.Item href="#/action-1">Post Error</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown>
                </NavDropdown>
                {/* </Nav.Link> */}
                <NavDropdown title='Community' id="basic-nav-dropdown" className="custom-dropdown">
                  <Dropdown id="basic-nav-dropdown" >
                    <Dropdown.Item href="#/action-1">comment</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">cloud review</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Join Community</Dropdown.Item>
                  </Dropdown>
                </NavDropdown>
                <NavDropdown title='Open Source' id="basic-nav-dropdown" className="custom-dropdown">
                  <Dropdown id="basic-nav-dropdown" >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item><Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown>
                </NavDropdown>
               
                {/* <Nav.Link href="#open-source">Open Source</Nav.Link> */}
                <Nav.Link href="#pricing"  className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateLink('pricing')}>Pricing</Nav.Link>
              </Nav>
              <span className='navbar-text'>
              {/* <Button className='buttonjoinC' variant="primary" onClick={handleShow}><span> </span> </Button> */}

               <button className='btnn' onClick={() => (console.log('connect'))} >Join Community<span> </span> </button>
              </span>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;