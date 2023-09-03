import { useState } from 'react'
import Card from 'react-bootstrap/esm/Card'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import DeleteModal from './DeleteModal'

const Table = ({ table, i }) => {
	const [modalShow, setModalShow] = useState(false)

	return (
		<Row>
			<Card className='border-0 border-bottom d-flex flex-row align-items-center justify-content-between'>
				<Card.Body className='d-flex flex-row align-items-center justify-content-start px-0'>
					<Card.Text as='h2'>Table {i + 1}</Card.Text>
					<Card.Text className='px-3'>
						<span className='fw-bold'>Status: </span>
						{table.status}
					</Card.Text>
				</Card.Body>

				<Button variant='primary' className='mr-1' as={NavLink} to={`/tables/${table.id}`}>
					Show more
				</Button>
				<Button variant='danger' onClick={() => setModalShow(true)}>
					Delete
				</Button>
				<DeleteModal table={table} show={modalShow} onHide={() => setModalShow(false)} />
			</Card>
		</Row>
	)
}

export default Table
