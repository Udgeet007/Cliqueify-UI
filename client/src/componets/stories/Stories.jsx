import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  //Temporary Data
  const stories = [
    {
      id: 1,
      name: "Udgeet Bhatt",
      img: "https://images.pexels.com/photos/14353624/pexels-photo-14353624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 2,
      name: "Udgeet Bhatt",
      img: "https://images.pexels.com/photos/20646812/pexels-photo-20646812/free-photo-of-vintage-building-and-water-tower-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      name: "Udgeet Bhatt",
      img: "https://images.pexels.com/photos/28206098/pexels-photo-28206098/free-photo-of-a-small-boat-with-a-green-canopy-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 4,
      name: "Udgeet Bhatt",
      img: "https://images.pexels.com/photos/27834823/pexels-photo-27834823/free-photo-of-bi-u-t-ng-phu-yen-2.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
