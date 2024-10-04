import { singlePostData, userData } from "../../lib/dumdata"
import Map from "../../components/map/map"
import Slider from "../../components/slider/slider"
import "./singlePage.scss"

function SinglePage() {
	return (
		<div className="singlePage">
			<div className="details">
				<div className="wrapper">
					<Slider images={singlePostData.images} />
					<div className="info">
						<div className="top">
							<div className="post">
								<h1>{singlePostData.title}</h1>
								<div className="address">
									<img src="/pin.png" alt="pin" />
									<span>{singlePostData.address}</span>
								</div>
								<div className="price">${singlePostData.price}</div>
							</div>
							<div className="user">
								<img src={userData.img} alt="user img" />
								<span>{userData.name}</span>
							</div>
						</div>
						<div className="bottom">{singlePostData.description}</div>
					</div>
				</div>
			</div>
			<div className="features">
				<div className="wrapper">
					<p className="title">General</p>
					<div className="listVertical">
						<div className="feature">
							<img src="/utility.png" alt="utility" />
							<div className="featureText">
								<span>Utilities</span>
								<p>renter is responsible</p>
							</div>
						</div>
						<div className="feature">
							<img src="/pet.png" alt="pet" />
							<div className="featureText">
								<span>Pet Policy</span>
								<p>pets allowed</p>
							</div>
						</div>
						<div className="feature">
							<img src="/fee.png" alt="fee" />
							<div className="featureText">
								<span>Property Fees</span>
								<p>must have 3x the rent in total household income</p>
							</div>
						</div>
					</div>
					<p className="title">Room Sizes</p>
					<div className="sizes">
						<div className="size">
							<img src="/size.png" alt="size" />
							<span>80 sqft</span>
						</div>
						<div className="size">
							<img src="/bed.png" alt="bed" />
							<span>2 bedrooms</span>
						</div>
						<div className="size">
							<img src="/bath.png" alt="bath" />
							<span>1 bathroom</span>
						</div>
					</div>
					<p className="title">Nearby Places</p>
					<div className="listHorizontal">
						<div className="feature">
							<img src="/school.png" alt="school" />
							<div className="featureText">
								<span>School</span>
								<p>250m away</p>
							</div>
						</div>
						<div className="feature">
							<img src="/bus.png" alt="bus" />
							<div className="featureText">
								<span>Bus Stop</span>
								<p>100m away</p>
							</div>
						</div>
						<div className="feature">
							<img src="/restaurant.png" alt="restaurant" />
							<div className="featureText">
								<span>Restaurant</span>
								<p>200m away</p>
							</div>
						</div>
					</div>
					<p className="title">Location</p>
					<div className="mapContain">
						<Map items={[singlePostData]} />
					</div>
					<div className="buttons">
						<button>
							<img src="/chat.png" alt="chat" />
							Send a Message
						</button>
						<button>
							<img src="/save.png" alt="save" />
							Save the Place
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SinglePage
