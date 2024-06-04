import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../../Data/BlogData'

const SubBlog = () => {
    let { id } = useParams()

    let filtered = BlogData.filter((item, index) => (
        item.title === id
    ))

    let [blogPg] = filtered



    return (
        <>
            <div className="bg-black py-5 text-white">
                <img className='h-[30rem] w-full object-cover' src={blogPg.image} alt="" />
                <div className="max-w-[80rem] py-10 m-auto px-10 w-full ">
                    <h1 className='text-[2.8rem] font-medium'>{blogPg.title}</h1>
                    <h3 className='opacity-40'>{blogPg.subTitle}</h3> <br />
                    <p className='opacity-80'>{blogPg.description}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading2} </h2>
                    <p className='opacity-80'>{blogPg.description2}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading3}</h2>
                    <p className='opacity-80'>{blogPg.description3}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading4} </h2>
                    <p className='opacity-80'>{blogPg.description4}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading5}</h2>
                    <p className='opacity-80'>{blogPg.description5}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading6} </h2>
                    <p className='opacity-80'>{blogPg.description6}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading7}</h2>
                    <p className='opacity-80'>{blogPg.description7}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading8}</h2>
                    <p className='opacity-80'>{blogPg.description8}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading9}</h2>
                    <p className='opacity-80'>{blogPg.description9}</p> <br />
                    <h2 className='text-[1.7rem] '>{blogPg.heading10} </h2>
                    <p className='opacity-80'>{blogPg.description10}</p> <br />
                </div>
            </div>
        </>
    )
}

export default SubBlog