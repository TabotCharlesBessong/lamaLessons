import React from 'react'
import './rightbar.css'
import images from '../../constant/images'
import data from '../../constant/data'
// import { Online } from '../index'
const Rightbar = () => {
  const users = data.Users
  return (
		<div>
			<div className="rightbarWra">
				<div className="birthdayContainer">
					<img className="birthdayImg" src={images.img24} alt="" />
					<span className="birthdayText">
						<b>George and 2 other friends</b> have a birthday today
					</span>
				</div>
				<img className="rightbarAd" src={images.img23} alt="" />
				<h4 className="rightbarTitle"> Online Friends </h4>
				<ul className="rightbarFriendList">
					{/* {users.map((u) => (
						<Online key={u.id} user={u} />
					))} */}
					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img3} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>

					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img4} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>

					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img6} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>

					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img8} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>

					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img9} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>

					<li className="rightbarFriend">
						<div className="rightbarProfileImgContainer">
							<img src={images.img10} alt="" className="rightbarProfileImg" />
							<span className="rightbarOnline"></span>
						</div>
						<span className="rightbarUsername">John Carter</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Rightbar