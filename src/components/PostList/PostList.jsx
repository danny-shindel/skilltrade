import { useState } from 'react';
import PostItem from '../PostItem/PostItem';
import './PostList.css';

export default function PostList({ posts, userPosts}) {
    const [selected, setSelected] = useState('SKILLS')

    const miles = [1,5,10,15,30,50,100]
    const postItems = selected === 'SKILLS' ? posts : userPosts;
    const list = postItems.map(item =>
        <PostItem
            post={item}
        />
    );

    return (
       <div className="PostList">
            <div>
                <button onClick={(evt) => setSelected(evt.target.innerHTML)}>SKILLS</button>
                <button onClick={(evt) => setSelected(evt.target.innerHTML)}>MANAGE</button>
            </div>
            <div className={selected === 'MANAGE' ? 'display-none' : ''}>
                <input type="text" />
                <select>
                    {miles.map(mile => 
                        <option value={mile}>{mile}</option>
                    )}
                </select>
                <select></select>
                <button>SEARCH</button>
            </div>
            <div className={selected === 'SKILLS' ? 'display-none' : 'addNew'}>
                <div>ADD A NEW POST</div>
            </div>
           {list}
        </div>
    );
}