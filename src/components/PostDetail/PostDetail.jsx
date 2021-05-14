import * as requestsAPI from '../../utilities/requests-api';
import { useState } from 'react'
import './PostDetail.css'

export default function PostDetail({ detail, setDetail, user, userPosts, crossReference, setCrossReference, setSent }){
    const [barter, setBarter] = useState(false);
    const [requestInfo, setRequestInfo] = useState({
        post: detail,
        skills: [],
        message: null,
    })

    const handleChange = (evt) => {
        setRequestInfo({ ...requestInfo, [evt.target.name]: evt.target.value });
    }
    const handleSelectChange = (e) => {
        let newSkillsArray = Array.from(e.target.selectedOptions, option => option.value);
        setRequestInfo({ ...requestInfo, skills: newSkillsArray })
    }

    async function handleBarter() {
        const newSent = await requestsAPI.create(requestInfo);
        setBarter(false)
        setDetail(false)
        setCrossReference([...crossReference, detail._id])
        setSent(newSent)
    }

    return (
    <div className="PostDetail">
        { !barter ?  <> 
        <div>{detail.title}</div>
        <div>{detail.category}</div>
        <div>{detail.description}</div>
        <div id="PostDetailButtons">
            <button onClick={() => setDetail(false)}>BACK</button>
            <button className={ crossReference.includes(detail._id) && 'display-none' } onClick={() => setBarter(true)}>BARTER</button>
        </div>
            </> : <>
            <select name="skills" onChange={handleSelectChange} required multiple>
                {userPosts.map(post => (
                    <option value={post._id}>{post.title}</option>
                ))}
            </select>
            <label>Choose Skill To Barter</label>
            <textarea name="message" onChange={handleChange} />
           <label>Message</label>
            <div id="PostDetailButtons">
                <button onClick={handleBarter}>SEND</button>
                <button onClick={() => setBarter(false)}>CANCEL</button> 
            </div>
            </> }
    </div>
    )
}