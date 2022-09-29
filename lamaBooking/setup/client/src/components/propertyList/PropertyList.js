import React from 'react'
import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import image from '../../constant/images'

const PropertyList = () => {
	const { data, loading, error } = useFetch("/hotels/countByType");

	const images = [
		image.img1,
image.img2,
image.img3,
image.img4,
image.img1,
	];
	return (
		<div className="pList">
			{loading ? (
				"loading"
			) : (
				<>
					{data &&
						images.map((img, i) => (
							<div className="pListItem" key={i}>
								<img src={img} alt="" className="pListImg" />
								<div className="pListTitles">
									<h1>{data[i]?.type}</h1>
									<h2>
										{data[i]?.count} {data[i]?.type}
									</h2>
								</div>
							</div>
						))}
				</>
			)}
		</div>
	);
};

export default PropertyList;
