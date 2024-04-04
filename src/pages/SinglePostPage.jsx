import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {deleteComment, getComments, getPost} from "../store/postsSlice.js";
import {addComment} from "../store/postsSlice.js";

const SinglePostPage = () => {

    const dispatch = useDispatch()
    const {onePost, comments} = useSelector(state => state.posts)
    const {id} = useParams()
    const [input, setInput] = useState('')

    console.log(comments)

    useEffect(() => {
        dispatch(getPost(id))
        dispatch(getComments(id))
    }, []);

    const handleComment = () => {
        dispatch(addComment({
            postId: id,
            body: input,
            userId: 5
        }))
    }

    const handleDeleteComment = (id) => {
        dispatch(deleteComment(id))
    }


    return (
        <div>
            <h2>{onePost.title}</h2>
            <p>{onePost.body}</p>
            <div>
                <span>Добавьте комментарий</span>
                <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
                <button onClick={handleComment}>Отправить</button>
            </div>

            <div>
                {comments.map((item) => (
                     (
                        <div key={item.id}>
                            <p>{item.body}</p>
                            <button onClick={() => handleDeleteComment(item.id)}>удалить</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default SinglePostPage;