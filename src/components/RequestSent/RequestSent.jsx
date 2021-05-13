import './RequestSent.css';

export default function RequestSent({ request, setAccepted }) {

    return (
        <div className="RequestSent">
            {request.message}
        </div>
    );
}