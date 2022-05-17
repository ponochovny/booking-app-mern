import { Link } from 'react-router-dom'
import './SearchItem.scss'

const SearchItem = (outerItem) => {
	const item = outerItem.item

	return (
		<div className="searchItem">
			<img
				src={item && item.photos && item.photos[0]}
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">{item?.name}</h1>
				<span className="siDistance">{item?.distance}m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<div className="siFeatures">{item?.desc}</div>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				{item?.rating && (
					<div className="siRating">
						<span>Excellent</span>
						<button>{item?.rating}</button>
					</div>
				)}
				<div className="siDetailTexts">
					<span className="siPrice">${item?.cheapestPrice}</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<Link to={`/hotels/${item?._id}`}>
						<button className="siCheckButton">See availabillity</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SearchItem
