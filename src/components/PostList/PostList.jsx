import { useState, useEffect } from 'react';
import PostItem from '../PostItem/PostItem';
import PostCreate from '../PostCreate/PostCreate';
import PostDetail from '../PostDetail/PostDetail';
import PostEdit from '../PostEdit/PostEdit';
import * as postsAPI from '../../utilities/posts-api';
import './PostList.css';

export default function PostList() {
    const [deleted, setDeleted] = useState(false)
    const [selected, setSelected] = useState('SKILLS')
    const [create, setCreate] = useState(false)
    const [posts, setPosts] = useState(['posts', 'posts2'])
    const [userPosts, setUserPosts] = useState([])
    const [detail, setDetail] = useState(false)
    const [filter, setFilter] = useState({
        distance: 5,
        category: "",
        title: "",
    })

    const categories = ['Arts/Crafts', 'Automotive', 'Computer', 'Writing/Editing/Translation', 
        'Film/Photography', 'Food/Drink', 'Games', 'Gardening', 'Health', 'Labor', 'Languages', 
        'Music', 'Pets', 'Spiritual/Mental', 'Sports/Outdoors', 'Tutoring']
    const miles = [1,5,10,15,30,50,100,300]

    const postItems = selected === 'SKILLS' ? posts : userPosts;
    const list = postItems.map(item =>
        <PostItem
            post={item}
            setDetail={setDetail}
        />
    );

    useEffect(function() {
        async function getPosts() {
            const allUserPosts = await postsAPI.getUserPosts();
            const allFilteredPosts = await postsAPI.getFilteredPosts(filter);
            setUserPosts(allUserPosts);
            setPosts(allFilteredPosts);
            setDeleted(false)
        }
        getPosts();
    },[deleted])

    function handleChange(evt) {
        setFilter({ ...filter, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        const filterSearch = await postsAPI.getFilteredPosts(filter);
        setPosts(filterSearch)
    }

    async function handleDelete(post) {
        const deletedPost = await postsAPI.deletePost(post);
        setDetail(false)
        setDeleted(true)
    }

    return (
       <div className="PostList">
            { !create ?
                !detail ? <>
                    <div>
                        <button onClick={(evt) => setSelected(evt.target.innerHTML)}>SKILLS</button>
                        <button onClick={(evt) => setSelected(evt.target.innerHTML)}>MANAGE</button>
                    </div>
                    <div className={selected === 'MANAGE' ? 'display-none' : ''}>
                        <input type="text" name="title" onChange={handleChange} required/>
                        <select name="distance" onChange={handleChange} value={filter.distance} required>
                            {miles.map(mile =>
                                <option value={mile}>{mile}</option>
                            )}
                        </select>
                        <select name="category" onChange={handleChange} required>
                            <option value="">None</option>
                            {categories.map(cat => (
                                <option value={cat}>{cat}</option>
                            ))}
                        </select>
                        <button onClick={handleSubmit}>SEARCH</button>
                    </div>
                    <div className={selected === 'SKILLS' ? 'display-none' : 'addNew'} onClick={() => setCreate(true)}>
                        <div>ADD A NEW POST</div>
                    </div>
                    {list}
                </> : selected === 'SKILLS' ? <PostDetail detail={detail} setDetail={setDetail} /> : <PostEdit detail={detail} setDetail={setDetail} handleDelete={handleDelete}/>
                :
                <PostCreate setCreate={setCreate} setUserPosts={setUserPosts} userPosts={userPosts} categories={categories} setPosts={setPosts}/>
            }
        </div>
    );
}