import './RequestPending.css';

export default function RequestPending({ request, setAccepted }) {

    return (
        <div className="RequestPending" >
            {request.message}
        </div>
    );
}