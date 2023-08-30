import Card from 'react-bootstrap/esm/Card'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const Table = ({ table }) => {
	return (
		<Row>
			<Card className='border-0 border-bottom d-flex flex-row align-items-center justify-content-between'>
				<Card.Body className='d-flex flex-row align-items-center justify-content-start px-0'>
					<Card.Text as='h2'>Table {table.id}</Card.Text>
					<Card.Text className='px-3'>
						<span className='fw-bold'>Status: </span>
						{table.status}
					</Card.Text>
				</Card.Body>

				<Button variant='primary' as={NavLink} to={`/table/${table.id}`}>
					Show more
				</Button>
			</Card>
		</Row>
	)
}

export default Table
