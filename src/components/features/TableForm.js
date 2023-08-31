import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const TableForm = ({ action, ...props }) => {
	const [status, setStatus] = useState(props.status || '')
	const [maxPeople, setMaxPeople] = useState(props.maxPeople || '')
	const [people, setPeopleAmount] = useState(props.people || '')
	const [bill, setBill] = useState(props.bill || '')
	const [id] = useState(props.id)

	const statusArr = ['Busy', 'Cleaning', 'Free', 'Reserved']

	const handlePeopleAmountChange = e => {
		if (e.target.value > maxPeople) {
			setPeopleAmount(people)
		} else setPeopleAmount(e.target.value)
	}

	const handleMaxPeopleAmountChange = e => {
		if (e.target.value > 10) {
			setMaxPeople(maxPeople)
		} else setMaxPeople(e.target.value)
	}

	const handleSubmit = () => {
		// e.preventDefault()
		action({ status, people, maxPeople, bill, id })
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Col xs='2'>
				<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-between'>
					<Form.Label>Status</Form.Label>
					<Form.Select aria-label='Status' className='w-75' value={status} onChange={e => setStatus(e.target.value)}>
						{statusArr.map((status, i) => {
							return <option key={i}>{status}</option>
						})}
					</Form.Select>
				</Form.Group>
			</Col>

			<Col xs='3'>
				<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-between'>
					<Form.Label className='mr-2'>People:</Form.Label>
					<Form.Control type='number' className='w-25' min='0' value={people} onChange={handlePeopleAmountChange} />
					<span> / </span>
					<Form.Control
						type='number'
						className='w-25'
						min='0'
						max='10'
						value={maxPeople}
						onChange={handleMaxPeopleAmountChange}
					/>
				</Form.Group>
			</Col>
			<Col xs='3'>
				{status === 'Busy' && (
					<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-between'>
						<Form.Label>Bill:</Form.Label>
						<div className='d-flex flex-row align-items-center'>
							<span> $ </span>
							<Form.Control
								type='number'
								className='w-50'
								min='0'
								value={bill}
								onChange={e => setBill(e.target.value)}
							/>
						</div>
					</Form.Group>
				)}
			</Col>
			<Button variant='primary' type='submit'>
				Update
			</Button>
		</Form>
	)
}

TableForm.propTypes = {
	action: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	maxPeople: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	people: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TableForm
