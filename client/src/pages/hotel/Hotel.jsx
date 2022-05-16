import './Hotel.scss'
import NavBar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {
	const [slideNumber, setSliderNumber] = useState(0)
	const [open, setOpen] = useState(false)
	const photos = [
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/195308888.jpg?k=1e3f3678f3f9e59077ae4bd0ab1044e62c2483c94adeb908b238306faf5bd807&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/335752991.jpg?k=08ccfb0f95d507558b6fcc1a91d275323de44c90213f905f7d06c8e0df4b3388&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/270410417.jpg?k=6c7ce086f9987569aaa55b01327df6acbf6c876fd999dbfc0cf8b7be16ccb9b1&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/286072183.jpg?k=cf24ee7087a066ebdf5fbe4924f79bd91102da955b7a9c96e6af150171cb582d&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/298172491.jpg?k=99cb4f2f65b9a24c08f7eaf1db7299d1e5e39e4816f2e090eefa8db6e7047695&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/255649687.jpg?k=84b89c322748a0e6479cd2d71263e56f2eb9771d4010cc30d3018488d7ccc671&o=&hp=1',
		},
	]

	const handleOpen = (i) => {
		setSliderNumber(i)
		setOpen(true)
	}

	const handleMove = (direction) => {
		let newSlideNumber

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
		}

		setSliderNumber(newSlideNumber)
	}

	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="hotelContainer">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove('l')}
						/>
						<div className="sliderWrapper">
							<img src={photos[slideNumber].src} alt="" className="sliderImg" />
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove('r')}
						/>
					</div>
				)}
				<div className="hotelWrapper">
					<button className="bookNow">Reserve or Book Now!</button>
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New York</span>
					</div>
					<span className="hotelDistance">
						Excellent location - 500m from center
					</span>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get a free airport taxi
					</span>
					<div className="hotelImages">
						{photos.map((photo, i) => (
							<div className="hotelImgWrapper">
								<img
									src={photo.src}
									alt=""
									className="hotelImg"
									onClick={() => handleOpen(i)}
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsTexts">
							<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
							<p className="hotelDesc">
								Located in Madrid, 601 m from Puerta del Sol, Pestana Plaza
								Mayor Madrid offers amenities including rooftop bar and a
								fitness center. Less than 0.6 mi from Mercado San Miguel and a
								13-minute walk from Puerta de Toledo, the property offers a
								terrace and a bar. The accommodations provides a 24-hour front
								desk, spa and free WiFi is available.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this propery has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	)
}

export default Hotel
