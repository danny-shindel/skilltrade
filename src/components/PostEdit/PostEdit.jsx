import './PostEdit.css'

export default function PostDetail({ detail, setDetail, handleDelete }) {
    
    return (
        <div className="PostDetail">
            <div>PostEdit</div>
            <div>{detail.title}</div>
            <div>{detail.title}</div>
            <div>{detail.title}</div>
            <div onClick={() => setDetail(false)}>BACK</div>
            <div onClick={() => handleDelete(detail)}>DELETE</div>
        </div>
    )
}