import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const blogPosts = [
        { title: 'Blog Post #0'},
        { title: 'Blog Post #1'}
    ];

    return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
    );
};

export default BlogContext;