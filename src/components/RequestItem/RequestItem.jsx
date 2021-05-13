import './RequestItem.css';

export default function RequestItem({ request, setDetail }) {

    return (
        <div className="RequestItem" onClick={() => setDetail(request)}>
            {request.message}
        </div>
    );
}