import * as userService from '../../utilities/users-service';
import PostList from '../../components/PostList/PostList';
import RequestList from '../../components/RequestList/RequestList';
import './Dashboard.css'

export default function Dashboard({ posts, userPosts}) {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <div className="Dashboard">
      <PostList posts={posts} userPosts={userPosts}/>
      <RequestList />
    </div>
    // <>
    //   <h1>OrderHistoryPage</h1>
    //   <button onClick={handleCheckToken}>Check When My Login Expires</button>
    // </>
  );
}