
import React from 'react'
// import useFetch from "../../hooks/useFetch";
import "./featured.css";
import {images} from '../../constant/images'
const Featured = () => {
	// const { data, loading, error } = useFetch(
	// 	"/hotels/countByCity?cities=berlin,madrid,london"
	// );

	return (
		<div className="featured">
			{/* {loading ? (
				"Loading please wait"
			) : (
				<> */}
					<div className="featuredItem">
						<img src={images.img1} alt="" className="featuredImg" />
						<div className="featuredTitles">
							<h1>Berlin</h1>
							<h2>533 properties</h2>
						</div>
					</div>

					<div className="featuredItem">
						<img src={images.img2} alt="" className="featuredImg" />
						<div className="featuredTitles">
							<h1>Madrid</h1>
							<h2>121 properties</h2>
						</div>
					</div>
					<div className="featuredItem">
						<img src={images.img3} alt="" className="featuredImg" />
						<div className="featuredTitles">
							<h1>London</h1>
							<h2> properties</h2>
						</div>
					</div>
				{/* </> */}
			{/* )} */}
		</div>
	);
};

export default Featured;
