import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  // TEMPORARY DATA
  const posts = [
    {
      id: 1,
      name: "Toby Mac",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "This is the beautiful Mountains that are located.",
      img: "https://images.pexels.com/photos/28513110/pexels-photo-28513110/free-photo-of-scenic-mountain-road-in-aglasun-burdur.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Toby Mac",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "This is Unstoppable."
    }
  ];

  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;

// import Post from "../post/Post"
// import "./posts.scss"

// const Posts = () => {
//   //TEMPORARY DATA
//   const posts = [
//     {
//       id:1,
//       name:"Toby Mac",
//       userId:1,
//       profilePic: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       desc:"This is the beautiful Mountains that are located.",
//       img:"https://images.pexels.com/photos/28513110/pexels-photo-28513110/free-photo-of-scenic-mountain-road-in-aglasun-burdur.jpeg?auto=compress&cs=tinysrgb&w=600"
//     },
//     {
//       id:2,
//       name: "Toby Mac",
//       userId: 1,
//       profilePic:"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       desc:"This is Unstopabble"
//     }
//   ]
//   return <div className="posts">
//     {posts.map(post=>(
//       <Post posts={post} key={posts.id}/>
//     ))}
//   </div>;
// };
  
