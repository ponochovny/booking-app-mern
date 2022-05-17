import useFetch from '../../hooks/useFetch'
import './FeaturedProperties.scss'

const FeaturedProperties = () => {
	const { data, loading, error } = useFetch('/hotels/countByType')

	return (
		<div className="fp">
			<div className="fpItem">
				<img
					className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max300/313635032.webp?k=f2afe5153cc930d8b95a663a44554e6d9e70bfbdb50e440e27bfede174b256fb&o="
					alt=""
				/>
				<span className="fpName">The Grand Sandestin</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max300/313635032.webp?k=f2afe5153cc930d8b95a663a44554e6d9e70bfbdb50e440e27bfede174b256fb&o="
					alt=""
				/>
				<span className="fpName">The Grand Sandestin</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max300/313635032.webp?k=f2afe5153cc930d8b95a663a44554e6d9e70bfbdb50e440e27bfede174b256fb&o="
					alt=""
				/>
				<span className="fpName">The Grand Sandestin</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max300/313635032.webp?k=f2afe5153cc930d8b95a663a44554e6d9e70bfbdb50e440e27bfede174b256fb&o="
					alt=""
				/>
				<span className="fpName">The Grand Sandestin</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $120</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	)
}

export default FeaturedProperties
