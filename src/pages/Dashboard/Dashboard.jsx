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
  const [crossReference, setCrossReference] = useState([])


  useEffect(function () {
    async function getRequest() {
      const requests = await requestAPI.getAll()
      setAccepted(requests.accepted)
      setPending(requests.pending)
      setSent(requests.sent)
      setCrossReference(requests.crossReference)
    }
    getRequest()
  }, []);

  return (
    <div className="Dashboard">
      <PostList user={user} crossReference={crossReference} setCrossReference={setCrossReference} setSent={setSent}/>
      <RequestList accepted={accepted} setAccepted={setAccepted} pending={pending} setPending={setPending} sent={sent} setSent={setSent} setCrossReference={setCrossReference}/>
    </div>
  );
}