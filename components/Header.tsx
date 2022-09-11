import Link from 'next/link'
import { Button, Image, Nav, Navbar, NavLink } from 'react-bootstrap'
import styles from '../styles/components/Header.module.scss'

interface Props {
  toggle: () => void
}

const Header = ({ toggle }: Props) => {

  const hi = () => {
    console.log('hi')
  }

  return (
    <Navbar className={ styles.navbarAdmin } bg="dark" variant="dark" sticky="top">
      <Navbar.Brand className='m-0 text-center'>
        <Button className='mr-2 p-1 pb-2 d-inline-block' variant='dark' onClick={ toggle }>
          <span className='navbar-toggler-icon'></span>
        </Button>
        <NavLink className='d-inline-block' href="/">
          <Image className={ styles.img } alt='Logo' src='img/Logo.png' width="38"></Image>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className='justify-content-end flex-grow-1 pe-3'>
          <Nav.Link onClick={ hi }>Cerrar Sesión</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header