import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import './Header.scss'
import { DateRange } from 'react-date-range'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const Header = ({ type }) => {
	const [destination, setDestination] = useState('')
	const [openDate, setOpenDate] = useState(false)
	const [openOptions, setOpenOptions] = useState(false)
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	})
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	])

	const navigate = useNavigate()

	const { dispatch } = useContext(SearchContext)
	const { user } = useContext(AuthContext)

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === 'increase'
						? options[name] + 1
						: options[name] - 1 < 0
						? 0
						: options[name] - 1,
			}
		})
	}

	const handleSearch = () => {
		dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } })
		navigate('/hotels', { state: { destination, dates, options } })
	}

	return (
		<div className='header'>
			<div
				className={
					type === 'list' ? 'headerContainer listMode' : 'headerContainer'
				}
			>
				<div className='headerList'>
					<div className='headerListItem active'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentalks</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className='headerListItem'>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				{type !== 'list' && (
					<>
						<h1 className='headerTitle'>
							A lifetime of discounts? It's Genious.
						</h1>
						<p className='headerDesc'>
							Get rewarded for your travels - unlock instant saving of 10% or
							more with a free Ponochovnybooking account
						</p>
						{!user && (
							<button className='headerBtn' onClick={() => navigate('/login')}>
								Sign in / Register
							</button>
						)}
						<div className='headerSearch'>
							<div className='headerSearchItem'>
								<FontAwesomeIcon icon={faBed} className='headerIcon' />
								<input
									type='text'
									placeholder='Where are you going?'
									className='headerSearchInput'
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className='headerSearchItem'>
								<FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
								<span
									onClick={() => setOpenDate(!openDate)}
									className='headerSearchText'
								>{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
									dates[0].endDate,
									'MM/dd/yyyy'
								)}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDates([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={dates}
										minDate={new Date()}
										className='date'
									/>
								)}
							</div>
							<div className='headerSearchItem'>
								<FontAwesomeIcon icon={faPerson} className='headerIcon' />
								<span
									className='headerSearchText'
									onClick={() => setOpenOptions(!openOptions)}
								>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
								{openOptions && (
									<div className='options'>
										<div className='optionItem'>
											<span className='optionText'>Adult</span>
											<div className='optionCounter'>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('adult', 'decrease')}
												>
													-
												</button>
												<span className='optionCounterNumber'>
													{options.adult}
												</span>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('adult', 'increase')}
												>
													+
												</button>
											</div>
										</div>
										<div className='optionItem'>
											<span className='optionText'>Children</span>
											<div className='optionCounter'>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('children', 'decrease')}
												>
													-
												</button>
												<span className='optionCounterNumber'>
													{options.children}
												</span>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('children', 'increase')}
												>
													+
												</button>
											</div>
										</div>
										<div className='optionItem'>
											<span className='optionText'>Room</span>
											<div className='optionCounter'>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('room', 'increase')}
												>
													+
												</button>
												<span className='optionCounterNumber'>
													{options.room}
												</span>
												<button
													className='optionCounterButton'
													onClick={() => handleOption('room', 'decrease')}
												>
													-
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='headerSearchItem'>
								<div className='headerBtn' onClick={handleSearch}>
									Search
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
