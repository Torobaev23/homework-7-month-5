import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/postsSlice.js";
import {useNavigate} from "react-router-dom";


const PostsPage = () => {

    const {data} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            {data && data.map((post) => (
                <li onClick={() => navigate(`/${post.id}`)} key={post.id}>
                    {post.title}
                </li>
            ))}
        </div>
    );
};


export default PostsPage;