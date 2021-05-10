import './PostItem.css';

export default function PostItem({ post }) {

    return (
        <div className="PostItem" >
            {post.title}
        </div>
    );
}