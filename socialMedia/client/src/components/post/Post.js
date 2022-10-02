import React from 'react'
import images from '../../constant/images'
import data from '../../constant/data'
import './post.css'
import { MoreVert   } from '@material-ui/icons'

const Post = () => {
  const datas = data.post
  return (
		<div className="post">
			{datas.map((post) => (
				<div key={post.id} className="postWrapper">
					<div className="postTop">
						<div className="postTopLeft">
							<img className="postProfileImg" src={post.profile} alt="" />
							<span className="postUsername">{post.username}</span>
							<span className="postDate">5 min ago</span>
						</div>
						<div className="postTopRight">
							<MoreVert />
						</div>
					</div>
					<div className="postCenter">
						<span className="postText">{post?.desc}</span>
						<img className="postImg" src={post.img} alt="" />
					</div>
					<div className="postBottom">
						<div className="postBottomLeft">
							<img
								className="likeIcon"
								src={images.img25}
								onClick={() => console.log("hello")}
								alt=""
							/>
							<img
								className="likeIcon"
								src={images.img26}
								onClick={() => console.log("hello")}
								alt=""
							/>
							<span className="postLikeCounter">{post.like} people like it</span>
						</div>
						<div className="postBottomRight">
							<span className="postCommentText">{post.comment} comments</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Post