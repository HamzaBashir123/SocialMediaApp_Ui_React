import { MoreVert } from "@mui/icons-material"
import "./post.css"

export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Hamza Bashir</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">This is my first post!</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt="" />
                        <img className="likeIcon" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">25 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">7 comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}