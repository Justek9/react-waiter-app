import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'

const TableForm = ({ action, actionText, ...props }) => {
	const [status, setStatus] = useState(props.status || '')
	const [maxPeople, setMaxPeople] = useState(props.maxPeople || '')
	const [people, setPeopleAmount] = useState(props.people || '')
	const [bill, setBill] = useState(props.bill || '')
	const [id] = useState(props.id)

	const statusArr = ['Free', 'Busy', 'Cleaning', 'Reserved']

	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		if (status === 'Free' || status === 'Cleaning') {
			setBill(0)
			setPeopleAmount(0)
		}

		if (maxPeople >= 0 && people > maxPeople) {
			setPeopleAmount(maxPeople)
		}
	}, [status, people, maxPeople])

	const handleSubmit = () => {
		action({ status, people, maxPeople, bill, id })
	}

	return (
		<Form onSubmit={validate(handleSubmit)}>
			<Col xs='3'>
				<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-between'>
					<Form.Label>Status</Form.Label>
					<Form.Select aria-label='Status' className='w-75' value={status} onChange={e => setStatus(e.target.value)}>
						<option value=''>--Please choose an option--</option>
						{statusArr.map((status, i) => {
							return (
								<option key={i} value={status}>
									{status}
								</option>
							)
						})}
					</Form.Select>
				</Form.Group>
			</Col>

			<Col xs='3'>
				<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-between'>
					<Form.Label className='mr-2'>People:</Form.Label>
					<Form.Control
						{...register('people', { min: 0, max: { maxPeople } })}
						type='number'
						className='w-25'
						value={people}
						onChange={e => setPeopleAmount(e.target.value)}
					/>

					<span> / </span>
					<Form.Control
						{...register('maxPeople', { min: 0, max: 10 })}
						type='number'
						className='w-25'
						value={maxPeople}
						onChange={e => setMaxPeople(e.target.value)}
					/>
				</Form.Group>
				{errors.people && (
					<small className='d-block form-text text-danger my-2'>
						Number of people can not be lower than 0 and greater than max table amunt
					</small>
				)}
				{errors.maxPeople && <small className='d-block form-text text-danger my-2'>Min value is 0, max 10</small>}
			</Col>
			<Col xs='3'>
				{status === 'Busy' && (
					<Form.Group className='mb-3 d-flex flex-row align-items-center justify-content-around'>
						<Form.Label>Bill:</Form.Label>
						<div className='d-flex flex-row align-items-center'>
							<span> $ </span>
							<Form.Control
								{...register('bill', { min: 0 })}
								type='number'
								className='w-50'
								value={bill}
								onChange={e => setBill(e.target.value)}
							/>
						</div>
					</Form.Group>
				)}
				{errors.bill && <small className='d-block form-text text-danger my-2'>Min value is 0</small>}
			</Col>
			<Button variant='primary' type='submit'>
				{actionText}
			</Button>
		</Form>
	)
}

TableForm.propTypes = {
	action: PropTypes.func.isRequired,
	actionText: PropTypes.string.isRequired,
	status: PropTypes.string,
	id: PropTypes.number,
	maxPeople: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	people: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	bill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TableForm
