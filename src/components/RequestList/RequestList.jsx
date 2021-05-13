import { useState } from 'react';
import RequestItem from '../RequestItem/RequestItem';
import RequestDetail from '../RequestDetail/RequestDetail';
import * as requestAPI from '../../utilities/requests-api'
import './RequestList.css';

export default function RequestList({ accepted, setAccepted, pending, setPending, sent, setSent, setCrossReference }) {
    const [selected, setSelected] = useState('ACCEPTED')
    const [detail, setDetail] = useState(false)

    const requestItems = selected === 'ACCEPTED' ? accepted : selected === 'PENDING' ? pending : sent;
    const requestList = requestItems.map(request =>
        <RequestItem
            request={request}
            setDetail={setDetail}
        />
    );

    function handleSelection(tab) {
        setSelected(tab)
        setDetail(false)
    }

    async function handleStatus(status) {
        const requests = await requestAPI.updateStatus({'id':detail._id, 'status':status});
        setAccepted(requests.accepted)
        setPending(requests.pending)
        setSent(requests.sent)
        setCrossReference(requests.crossReference)
        setDetail(false)
    }

    async function handleDelete(requestId) {
        const requests = await requestAPI.deleteRequest(requestId);
        setSent(requests)
        setDetail(false)
    }

    return (
        <div className="RequestList">
            <div><button onClick={() => handleSelection('ACCEPTED')}>ACCEPTED</button>
                <button onClick={() => handleSelection('PENDING')}>PENDING</button>
                <button onClick={() => handleSelection('SENT')}>SENT</button>
            </div>
            { !detail ? <> {requestList} </> : <RequestDetail detail={detail} setDetail={setDetail} selected={selected} handleStatus={handleStatus} handleDelete={handleDelete}/> }
        </div>
    );
}