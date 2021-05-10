import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import './PostCreate.css';

export default function PostCreate({ setCreate, setUserPosts, userPosts, categories }) {
    const [newPost, setNewPost] = useState({
        title: "",
        category: "",
        description: "",
    })

    function handleChange(evt) {
        setNewPost({ ...newPost, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        const newUserPost = await postsAPI.create(newPost);
        setCreate(false)
        setUserPosts([...userPosts, newUserPost])
    }

    return (
        <div className="PostCreate" >
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} required />
                        <label>Category</label>
                        <select name="category" onChange={handleChange} required>
                            {categories.map(cat => (
                                <option value={cat}>{cat}</option>
                            ))}
                        </select>
                        <label>Description</label>
                        <input type="text" name="description" onChange={handleChange} required />
                        <button type="submit">Create Post</button>
                        <button type="submit" onClick={() => setCreate(false)}>Cancel</button>
                    </form>
        </div>
    );
}