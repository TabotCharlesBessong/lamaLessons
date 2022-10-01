import React , {useState} from 'react'
import images from '../../constant/images'
import { PermMedia, EmojiEmotions, Room, Label } from "@material-ui/icons";
import './share.css'

const Share = () => {
  const [file, setFile] = useState(null);
  return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img className="shareProfileImg" src={images.img1} alt='' />
					<input
						placeholder="Whats on your mind Charles"
						alt="post"
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<form className="shareBottom" onSubmit={() => console.log('Hello world')}>
					<div className="shareOptions">
						<label htmlFor="file" className="shareOption">
							<PermMedia htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
							<input
								style={{ display: "none" }}
								type="file"
								id="file"
								accept=".png,.jpeg,.jpg"
								onChange={(e) => setFile(e.target.files[0])}
							/>
						</label>
						<div className="shareOption">
							<Label htmlColor="blue" className="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room htmlColor="green" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
							<span className="shareOptionText">Feelings</span>
						</div>
					</div>
					<button className="shareButton" type="submit">
						Share
					</button>
				</form>
			</div>
		</div>
	);
}

export default Share