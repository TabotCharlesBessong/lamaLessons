import React , {useState} from 'react'
// import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import datas from '../../constant/data'

const FeaturedProperties = () => {
	// const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
	const [loading,setLoading] = useState(false)
	const data = datas.featured

	return (
		<div className="fp">
			{loading ? (
				"Loading"
			) : (
				<>
					{data.map((item) => (
						<div className="fpItem" key={item._id}>
							<img src={item.photos[0]} alt="" className="fpImg" />
							<span className="fpName">{item.name}</span>
							<span className="fpCity">{item.city}</span>
							<span className="fpPrice">
								Starting from ${item.price}
							</span>
							{item.rating && (
								<div className="fpRating">
									<button>{item.rating}</button>
									<span>Excellent</span>
								</div>
							)}
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default FeaturedProperties;
