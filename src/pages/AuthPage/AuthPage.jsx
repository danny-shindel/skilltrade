import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser, location }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} location={location} /> : <SignUpForm setUser={setUser} location={location}/>}
    </main>
  );
}