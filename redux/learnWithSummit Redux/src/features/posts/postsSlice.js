import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postsAPI"

const initialState ={
    posts: [],
    isLoading: false,
    isError: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const posts = await getPosts();
    return posts;
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            const text = action.payload
            state.posts = text.slice(0, 10);
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        });
    }
})

export default postsSlice.reducer;