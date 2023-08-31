import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<Nav className='me-auto d-flex justify-content-between align-items-center bg-primary rounded mb-4'>
			<Nav.Link className='text-white' as={NavLink} to='/'>
				Waiter.app
			</Nav.Link>
			<Nav.Link className='text-white active' as={NavLink} to='/'>
				Home
			</Nav.Link>
		</Nav>
	)
}

export default NavBar
