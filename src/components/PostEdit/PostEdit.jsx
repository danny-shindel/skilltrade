import { useState } from 'react'
import * as postsAPI from '../../utilities/posts-api';
import './PostEdit.css'

export default function PostDetail({ detail, setDetail, categories, setUserPosts, setPosts, filter }) {
    const [newPost, setNewPost] = useState({
        title: detail.title,
        category: detail.category,
        description: detail.description,
    })

    function handleChange(evt) {
        setNewPost({ ...newPost, [evt.target.name]: evt.target.value });
    }

    async function handleUpdate(evt) {
        evt.preventDefault();
        const newUserPosts = await postsAPI.update({ ...detail, "title": newPost.title, "category": newPost.category, "description": newPost.description});
        const allFilteredPosts = await postsAPI.getFilteredPosts(filter);
        setDetail(false)
        setUserPosts(newUserPosts)
        setPosts(allFilteredPosts)
    }

    async function handleDelete(post) {
        const newUserPosts = await postsAPI.deletePost(post);
        const allFilteredPosts = await postsAPI.getFilteredPosts(filter);
        setDetail(false)
        setUserPosts(newUserPosts)
        setPosts(allFilteredPosts)
    }


    return (
        <div className="PostEdit" >
            <form autoComplete="off" onSubmit={handleUpdate}>
                <label>Title</label>
                <input type="text" name="title" onChange={handleChange} value={newPost.title} required />
                <label>Category</label>
                <select name="category" onChange={handleChange} value={newPost.category} required>
                    {categories.map(cat => (
                        <option value={cat}>{cat}</option>
                    ))}
                </select>
                <label>Description</label>
                <input type="text" name="description" onChange={handleChange} required value={newPost.description}/>
                <button type="submit">Update</button>
                <button type="submit" onClick={() => setDetail(false)}>Cancel</button>
                <div onClick={() => handleDelete(detail)}>DELETE</div>
            </form>
        </div>
    );
}
   