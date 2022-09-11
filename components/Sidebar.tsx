import { Collapse, Nav } from 'react-bootstrap'
import styles from '../styles/components/Sidebar.module.scss'

interface Props {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: Props) => {
  return (
    <Collapse className={styles.sidebar} in={ isOpen } dimension="width" >
      <Nav className="flex-column">
        <Nav.Item>Inicio</Nav.Item>
      </Nav>
    </Collapse>
  )
}

export default Sidebar