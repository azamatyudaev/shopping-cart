import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Header() {
  const { openCart, closeCart, cartQuantity } = useShoppingCart()

  return (
    <Navbar className="shadow-sm mb-3 bg-white" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            className="rounded-circle d-flex align-items-center justify-content-center position-relative"
            style={{ width: '3rem', height: '3rem' }}
            variant="outline-primary"
            onClick={openCart}
          >
            <ShoppingBagIcon />

            <div
              className="position-absolute bottom-0 rounded-circle bg-danger d-flex align-items-center justify-content-center text-white"
              style={{ width: '1.5rem', height: '1.5rem', right: '-12px' }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbar>
  )
}

export default Header
