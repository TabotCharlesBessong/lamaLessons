import React from 'react'
import { Share ,Post } from '../../components/index'
import './feed.css'

const Feed = () => {
  return (
		<div className="feed">
			<div className="feedWrapper"> 
        <Share/>
        <Post/>
      </div>
		</div>
	);
}

export default Feed