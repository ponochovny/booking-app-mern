import './SearchItem.scss'

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/308190732.webp?k=080a4d23b56f36196cf400fd533167ebf0f37313698b2e780b48095ff2fd92da&o=&s=1"
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">500m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<div className="siFeatures">
					Entire studio 1 bathroom 21m 1 full bed
				</div>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>8.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">$123</span>
					<span className="siTaxOp">Includes taxes and fees</span>
					<button className="siCheckButton">See availabillity</button>
				</div>
			</div>
		</div>
	)
}

export default SearchItem
