import { useState } from 'react';
import RequestAccepted from '../RequestAccepted/RequestAccepted';
import RequestPending from '../RequestPending/RequestPending';
import RequestSent from '../RequestSent/RequestSent';
import './RequestList.css';

export default function RequestList({ accepted, setAccepted, pending, setPending, sent, setSent }) {
    const [selected, setSelected] = useState('ACCEPTED')

    const acceptedRequests = accepted.map(request =>
        <RequestAccepted
            request={request}
            setAccepted={setAccepted}
        />
    );

    const pendingRequests = pending.map(request =>
        <RequestPending
            request={request}
            setPending={setPending}
        />
    );

    const sentRequests = sent.map(request =>
        <RequestSent
            request={request}
            setSent={setSent}
        />
    );

    return (
        <div className="RequestList">
            <div><button onClick={() => setSelected('ACCEPTED')}>ACCEPTED</button>
                <button onClick={() => setSelected('PENDING')}>PENDING</button>
                <button onClick={() => setSelected('SENT')}>SENT</button>
            </div>
            { selected==='ACCEPTED' && acceptedRequests}
            { selected==='PENDING' && pendingRequests}
            { selected==='SENT' && sentRequests}
        </div>
    );
}