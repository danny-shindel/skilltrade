import './RequestDetail.css';

export default function RequestDetail({ detail, setDetail, selected, handleStatus, handleDelete }) {

    return (
        <div className="RequestDetail">
            {detail.message}
            <div onClick={() => setDetail(false)}>BACK</div>
            { selected === 'ACCEPTED' ? <><button onClick={() => handleStatus('denied')}>DECLINE</button><button>MESSAGE</button></> 
            : selected === 'PENDING' ? <><button onClick={() => handleStatus('accepted')}>ACCEPT</button><button onClick={() => handleStatus('denied')}>DECLINE</button></>
            : <button onClick={() => handleDelete(detail._id)}>DELETE</button>}
        </div>
    );
}