
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAdded}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className='grid lg:grid-cols-2 gap-4 mt-5'>

            {
                blogs.map(blog => <Blog handleAdded={handleAdded} key={blog.id} blog={blog}></Blog> )
            }

        </div>
    );
};

export default Blogs;