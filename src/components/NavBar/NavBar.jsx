import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="NavBar">
      <div>
        <span id="title">SkillTrade</span>
      </div>
      <div id="userinfo">
        <span>{user.name}</span>
        {/* {user.profilepic ? <img src={user.profilepic} /> : <img src="https://i.imgur.com/ILgOcKo.png"/> } */}
        <Link to="" onClick={handleLogOut} id="picholder" style={{ "backgroundImage": user.profilepic ? `url(${user.profilepic}` : "url(https://i.imgur.com/ILgOcKo.png)" }}></Link>
      </div>
    </nav>
  );
}