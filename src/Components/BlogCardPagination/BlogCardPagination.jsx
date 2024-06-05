import React, { useEffect, useState } from 'react'
import { BlogData } from '../../Data/BlogData';
import './BlogCardPagination.css'
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const BlogCardPagination = () => {
    const [data, setData] = useState(BlogData);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const PageDataCount = Math.ceil(BlogData.length / 5);
        setPageCount(PageDataCount);
    }, [BlogData]);

    useEffect(() => {
        const LIMIT = 9;
        const skip = (page - 1) * LIMIT;
        const dataSkip = data.slice(skip, skip + LIMIT);
        setPageData(dataSkip);
    }, [page, data]);

    const handleNext = () => {
        if (page < pageCount) {
            setPage(page + 1);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };
    return (
        <>
            <div className="blogCard">
                {pageData.map(({ title, description, authorImage, image, authorName, category }, index) => (
                    <Link to={`/sub-blog/${title}`}>
                        <div key={index} className="blogMain">
                            <img src={image} alt="" />
                            <h1>{title.slice(0, 50)}...</h1>
                            <p>{description.slice(0, 96)}...</p>
                            <div className="blogCardProfile">
                                <img src={authorImage} alt="" />
                                <div className='blogCardProfileContent'>
                                    <h2>{authorName}</h2>
                                    <p>{category}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className="blogBtn">
                    <button onClick={handlePrev} disabled={page === 1}><GrFormPrevious /></button>
                    <button onClick={handleNext} disabled={page === pageCount}><MdNavigateNext /></button>
                </div>
            </div>
        </>
    )
}

export default BlogCardPagination