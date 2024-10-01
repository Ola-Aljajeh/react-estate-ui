import SearchBar from "../../components/searchBar/searchBar"
import "./homepage.scss"

function HomePage() {
	return (
		<div className="homePage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">Find Real Estate & Get Your Dream Place</h1>
					<p>
						Find Real Estate & Get Your Dream Place - Find Real Estate & Get
						Your Dream Place - Find Real Estate & Get Your Dream Place - Find
						Real Estate & Get Your Dream Place
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>years of experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>awards gained</h2>
						</div>
						<div className="box">
							<h1>1200+</h1>
							<h2>property ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imgContainer">
				<img src="/bg.png" alt="bg" />
			</div>
		</div>
	)
}

export default HomePage
