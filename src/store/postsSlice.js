import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        const response = await axios.get('https://dummyjson.com/posts?limit=25')
        return response.data.posts
    }
)

export const getPost = createAsyncThunk(
    "post/getPost",
    async (id) => {
        try {
            const response = await axios.get(`https://dummyjson.com/posts/${id}`)
            return response.data
        } catch (e) {
            if (e.message === "Request failed with status code 404") {
                alert('Ошибка 404, пост с таким id не существует')
            }
        }
    }
)
export const addComment = createAsyncThunk(
    "posts/addComment",
    async (data) => {
        try {
            const response = await axios.post(`https://dummyjson.com/comments/add`, data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const deleteComment = createAsyncThunk(
    "posts/deleteComment",
    async (id) => {
        try {
            const response = await axios.delete(`https://dummyjson.com/comments/${id}`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getComments = createAsyncThunk(
    "posts/getComments",
    async (id) => {
        try {
            const response = await axios.get(`https://dummyjson.com/comments/post/${id}`)
            return response.data.comments
        } catch (e) {
            console.log(e)
        }
    }
)


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: [],
        onePost: {},
        comments: []
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.onePost = action.payload
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload
            })
    }
})

export default postsSlice