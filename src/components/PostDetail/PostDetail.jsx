import * as requestsAPI from '../../utilities/requests-api';
import { useState } from 'react'
import './PostDetail.css'

export default function PostDetail({ detail, setDetail, user, userPosts, crossReference, setCrossReference }){
    const [barter, setBarter] = useState(false);
    const [requestInfo, setRequestInfo] = useState({
        post: detail,
        skills: [],
        message: null,
    })

    console.log(crossReference)

    const handleChange = (evt) => {
        setRequestInfo({ ...requestInfo, [evt.target.name]: evt.target.value });
    }
    const handleSelectChange = (e) => {
        let newSkillsArray = Array.from(e.target.selectedOptions, option => option.value);
        setRequestInfo({ ...requestInfo, skills: newSkillsArray })
    }

    async function handleBarter() {
        await requestsAPI.create(requestInfo);
        setBarter(false)
        setDetail(false)
        setCrossReference([...crossReference, detail._id])
    }

    return (
    <div className="PostDetail">
        { !barter ?  <> 
        <div>PostDetail</div>
        <div>{detail.title}</div>
        <div>{detail.title}</div>
        <div>{detail.title}</div>
        <div onClick={() => setDetail(false)}>BACK</div>
        <div className={ crossReference.includes(detail._id) && 'display-none' } onClick={() => setBarter(true)}>BARTER</div>
            </> : <>
                <select name="skills" onChange={handleSelectChange} required multiple>
                {userPosts.map(post => (
                    <option value={post._id}>{post.title}</option>
                ))}
            </select>
            <input name="message" onChange={handleChange}></input>
            <div onClick={handleBarter}>SEND BARTER REQUEST</div>
            <div onClick={() => setBarter(false)}>CANCEL</div> 
            </> }
    </div>
    )
}