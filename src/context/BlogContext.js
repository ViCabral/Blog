import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {

        case 'deletePost':
            return state.filter((blogPost) => blogPost.id !== action.payload);

        case 'addPost':
            return [...state, {
                    id: Math.floor(Math.random() * 9999),  
                    title: `Blog Post ${state.length + 1 }` }]
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'addPost' });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'deletePost', payload: id})
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []);