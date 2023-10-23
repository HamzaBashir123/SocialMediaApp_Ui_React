import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLike] = useState(false);
  const [isLiked1, setIsLike1] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLike(!isLiked);
  };
  const likeHandler1 = () => {
    setLike(isLiked1 ? like - 1 : like + 1);
    setIsLike1(!isLiked1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              style={{
                border: isLiked ? "2px solid red" : "2px solid transparent",
              }}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              style={{
                border: isLiked1 ? "2px solid red" : "2px solid transparent",
              }}
              onClick={likeHandler1}
              alt=""
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
