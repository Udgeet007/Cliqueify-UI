// import "./post.scss";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
// import { useState } from "react";

// const Post = ({ post }) => {
//   const [commentOpen, setCommentOpen] = useState(false);

//   //TEMPORARY
//   const liked = false;

//   return (
//     <div className="post">
//       <div className="container">
//         <div className="user">
//           <div className="userInfo">
//             {/* <img src={post.profilePic} alt="" /> */}
//             <img src={post?.profilePic || ""} alt="Profile" />
//             <div className="details">
//               <Link
//                 to={`/profile/${post.userId}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <span className="name">{post.name}</span>
//               </Link>
//               <span className="date">1 min ago</span>
//             </div>
//           </div>
//           <MoreHorizIcon />
//         </div>
//         <div className="content">
//           <p>{post.desc}</p>
//           <img src={post.img} alt="" />
//         </div>
//         <div className="info">
//           <div className="item">
//             {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
//             12 Likes
//           </div>
//           <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
//             <TextsmsOutlinedIcon />
//             12 Comments
//           </div>
//           <div className="item">
//             <ShareOutlinedIcon />
//             Share
//           </div>
//         </div>
//         {commentOpen && <Comments />}
//       </div>
//     </div>
//   );
// };

// export default Post;

import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img
              src={
                post?.profilePic ||
                "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
            />
            <div className="details">
              <Link
                to={`/profile/${post?.userId || "1"}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post?.name || "Toby Mac"}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post?.desc || "lorem25"}</p>
          {post?.img && <img src={post.img} alt="Post image" />}
        </div>
        <div className="info">
          <div className="item" onClick={() => setLiked(!liked)}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {liked ? "13 Likes" : "12 Likes"}
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
