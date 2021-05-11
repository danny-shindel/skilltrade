import './PostDetail.css'

export default function PostDetail({ detail, setDetail }){
    return (
    <div className="PostDetail">
        <div>PostDetail</div>
        <div>{detail.title}</div>
        <div>{detail.title}</div>
        <div>{detail.title}</div>
        <div onClick={() => setDetail(false)}>BACK</div>
    </div>
    )
}