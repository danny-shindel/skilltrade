import './RequestItem.css';

export default function RequestItem({ request, setDetail }) {

    return (
        <div className="RequestItem" onClick={() => setDetail(request)}>
            <div>{request.skills[0].title} for {request.post.title}</div>
        </div>
    );
}