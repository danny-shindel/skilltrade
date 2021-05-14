import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import './PostCreate.css';

export default function PostCreate({ setCreate, setUserPosts, categories, setPosts, filter }) {
    const [newPost, setNewPost] = useState({
        title: "",
        category: "Arts/Crafts",
        description: "",
    })

    function handleChange(evt) {
        setNewPost({ ...newPost, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        const newUserPosts = await postsAPI.create(newPost);
        const allFilteredPosts = await postsAPI.getFilteredPosts(filter);
        setCreate(false)
        setUserPosts(newUserPosts)
        setPosts(allFilteredPosts)
    }

    return (
        <div className="PostCreate" >
            <form autoComplete="off" onSubmit={handleSubmit} id="PostCreateForm">
                <input type="text" name="title" onChange={handleChange} required />
                <label>Title</label>
                <textarea type="text" name="description" onChange={handleChange} required />
                <label>Description</label>
                <select name="category" onChange={handleChange} required>
                    {categories.map(cat => (
                        <option value={cat}>{cat}</option>
                        ))}
                </select>
                <label>Category</label>
                <div id="PostCreateButtons">
                    <button type="submit">CREATE</button>
                    <button type="submit" onClick={() => setCreate(false)}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}