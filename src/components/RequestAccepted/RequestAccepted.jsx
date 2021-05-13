import './RequestAccepted.css';

export default function RequestAccepted({ request, setAccepted }) {

    return (
        <div className="RequestAccepted">
            {request.message}
        </div>
    );
}