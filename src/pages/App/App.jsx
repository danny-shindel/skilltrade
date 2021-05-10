import { useState, useEffect } from 'react';
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
  const [location, setLocation] = useState({})
  
  useEffect(function () {
    function getLocation() {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({ latitude:position.coords.latitude, longitude:position.coords.longitude })
      });
    }
    getLocation()
  }, []);

  

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/dashboard">
              < Dashboard />
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </>
        :
        location.latitude ? <AuthPage setUser={setUser} location={location}/> : <div>loading location</div>
      }
    </main>
  );
}
