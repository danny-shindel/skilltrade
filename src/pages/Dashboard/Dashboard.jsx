import * as userService from '../../utilities/users-service';
import PostList from '../../components/PostList/PostList';
import RequestList from '../../components/RequestList/RequestList';
import './Dashboard.css'

export default function Dashboard({ user}) {

  return (
    <div className="Dashboard">
      <PostList user={user}/>
      <RequestList />
    </div>
  );
}