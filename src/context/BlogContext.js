import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addPost':
            return [...state, { title: `Blog Post ${state.length + 1 }` }]
        default:
            return state;
    }
};

const addBlogPosts = () => {
    dispatch({ type: 'addPost' });
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPosts }, []);