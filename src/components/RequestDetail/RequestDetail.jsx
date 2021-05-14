import './RequestDetail.css';

export default function RequestDetail({ detail, setDetail, selected, handleStatus, handleDelete }) {

    return (
        <div className="RequestDetail">
            <div>{detail.skills[0].title} for {detail.post.title}</div>
            <div>message:{detail.message}</div>
            <div>{detail.distance} miles away</div>
            <div>status: {detail.status}</div>
            <button onClick={() => setDetail(false)}>BACK</button>
            { selected === 'ACCEPTED' ? <><button onClick={() => handleStatus('denied')}>DECLINE</button><button>MESSAGE</button></> 
            : selected === 'PENDING' ? <><button onClick={() => handleStatus('accepted')}>ACCEPT</button><button onClick={() => handleStatus('denied')}>DECLINE</button></>
            : <button onClick={() => handleDelete(detail._id)}>DELETE</button>}
        </div>
    );
}