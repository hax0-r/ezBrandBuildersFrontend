import React, { useEffect, useState } from 'react';
import "./Blog.css";
import { BlogData } from '../../Data/BlogData';
import BlogCardPagination from '../../Components/BlogCardPagination/BlogCardPagination';

const Blog = () => {


    return (
        <div className="blog">
            <div className="page1">
                <div className="main">
                    <h1>Blog</h1>
                    <p>Your premier destination for innovative software solutions tailored to elevate your business to new heights.</p>
                </div>
            </div>
            <div className="page2">
                <div className="main">
                    <h1>Stay ahead of the curve with our blog - your source for digital insights and inspiration & delivering unparalleled expertise </h1>
                </div>
            </div>
            <div className="page3">
                <BlogCardPagination />
            </div>

        </div>
    );
};

export default Blog;
