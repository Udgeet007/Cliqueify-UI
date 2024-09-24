
import Post from '../../componets/post/Post';
import Stories from '../../componets/stories/Stories';
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Post />
    </div>
  )
}

export default Home;
