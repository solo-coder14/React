import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/posts/postsSlice';

function Posts() {
    const {posts, isLoading, isError, error} = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    //decide what to render
    let content;
    if (isLoading){
        content = <h4>Loading posts..</h4>
    }
    if(!isLoading && isError){
        content = <h1>{error}</h1>
    }
    if(!isLoading && !isError && posts.length === 0){
        content = <h1>No posts found!</h1>
    }
    if(!isLoading && !isError && posts.length > 0){
        content = <ul>{posts.map((item)=>(<li key={item.id}>{item.title}</li>))}</ul>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Posts
