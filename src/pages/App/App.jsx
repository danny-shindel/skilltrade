import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Dashboard from '../Dashboard/Dashboard';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPost] = useState(['posts','posts2'])
  const [userPosts, setUserPosts] = useState(['userPost','userPost2'])
  
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/dashboard">
              < Dashboard posts={posts} userPosts={userPosts}/>
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
