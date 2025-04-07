
import React from 'react';
// import { FaBeer } from "react-icons/fa";
import { IoPersonAddSharp } from "react-icons/io5";

const Blog = ({blog}) => {
    
    const {name, cover_img, author_img} = blog;
    // console.log(name, id, title)

    return (
        <div className='mb-5'>
            <div className="card bg-base-100 w-96 shadow-sm">
             <figure>
                    <img
                    src={cover_img}
                    alt="Shoes" />
                </figure>
                <div className="card-body">

                    <div className='flex justify-between align center items-center'>
                        <h2 className="card-title">{name}</h2>

                        <button> <IoPersonAddSharp size={24} /> </button>

                        <img className='w-8 rounded-full ring ring-offset-2 ring-primary ring-offset-base-100' src={author_img} alt="" />
                    </div>

                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Show more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;