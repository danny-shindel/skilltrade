import { useState, useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import PostList from '../../components/PostList/PostList';
import RequestList from '../../components/RequestList/RequestList';
import * as requestAPI from '../../utilities/requests-api'
import './Dashboard.css'

export default function Dashboard({ user}) {
  const [accepted, setAccepted] = useState([])
  const [pending, setPending] = useState([])
  const [sent, setSent] = useState([])


  useEffect(function () {
    async function getRequest() {
      const requests = await requestAPI.getAll()
      setAccepted(requests.accepted)
      setPending(requests.pending)
      setSent(requests.sent)
    }
    getRequest()
  }, []);

  return (
    <div className="Dashboard">
      <PostList user={user}/>
      <RequestList />
    </div>
  );
}