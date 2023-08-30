import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const TableForm = ({ action, ...props }) => {
	const [status, setStatus] = useState(props.status || '')
	const [maxPeople, setMaxPeople] = useState(props.maxPeople || '')
	const [peopleAmount, setPeopleAmount] = useState(props.people || '')
	const [bill, setBill] = useState(props.bill || '')

	return (
		<Form>
			<Row>
				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>Status</Form.Label>
						<Form.Select aria-label='Status' value={status} onChange={e => setStatus(e.target.value)}>
							{status.map((status, i) => {
								return <option key={i}>{status}</option>
							})}
						</Form.Select>
					</Form.Group>
				</Col>

				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>People</Form.Label>
						<Form.Control as='number' value={peopleAmount} onChange={e => setPeopleAmount(e.target.value)} />
					</Form.Group>
				</Col>
				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Control as='number' value={maxPeople} onChange={e => setMaxPeople(e.target.value)} />
					</Form.Group>
				</Col>
				<Col xs='12'>
					<Form.Group className='mb-3'>
						<Form.Label>Bill:</Form.Label>
						<Form.Control as='number' value={bill} onChange={e => setBill(e.target.value)} />
					</Form.Group>
				</Col>
			</Row>

			<Button variant='primary'>Update</Button>
		</Form>
	)
}

export default TableForm
