import { useState } from "react"
import "./slider.scss"

function Slider({ images }) {
	const [imgIndex, setImgIndex] = useState(null)

	const changeSlide = (direction) => {
		if (direction === "left") {
			if (imgIndex === 0) {
				setImgIndex(images.length - 1)
			} else {
				setImgIndex(imgIndex - 1)
			}
		} else {
			if (imgIndex === images.length - 1) {
				setImgIndex(0)
			} else {
				setImgIndex(imgIndex + 1)
			}
		}
	}

	return (
		<div className="slider">
			{imgIndex !== null && (
				<div className="fullSlider">
					<div className="arrow" onClick={() => changeSlide("left")}>
						<img src="/arrow.png" alt="arrow" />
					</div>
					<div className="imgCon">
						<img src={images[imgIndex]} alt="img" />
					</div>
					<div className="arrow" onClick={() => changeSlide("right")}>
						<img src="/arrow.png" className="right" alt="arrow" />
					</div>
					<div className="close" onClick={() => setImgIndex(null)}>
						X
					</div>
				</div>
			)}
			<div className="bigImg">
				<img src={images[0]} alt="img" onClick={() => setImgIndex(0)} />
			</div>
			<div className="smallImgs">
				{images.slice(1).map((image, index) => (
					<img
						key={index}
						src={image}
						alt="img"
						onClick={() => setImgIndex(index + 1)}
					/>
				))}
			</div>
		</div>
	)
}

export default Slider
