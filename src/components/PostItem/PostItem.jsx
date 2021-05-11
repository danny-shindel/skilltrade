import './PostItem.css';

export default function PostItem({ post, setDetail }) {

    return (
        <div className="PostItem" onClick={() => setDetail(post)}>
            {post.title}
        </div>
    );
}