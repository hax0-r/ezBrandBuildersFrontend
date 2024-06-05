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
            <div className=" bg-gradient-to-t from-[#171022] from-10% via-[#1d0d39] via-30% to-[#000] to-90% py-5 text-white">
                <img className='h-[30rem] w-full object-cover' src={blogPg.image} alt="" />
                <div className="max-w-[80rem] subBlog py-10 m-auto px-10 w-full ">
                    <h1 className='text-[2.8rem] font-medium'>{blogPg.title}</h1>
                    <h3 className='opacity-40'>{blogPg.subTitle}</h3> <br />
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 py-3'>{blogPg.heading2} </h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description2}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading3}</h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description3}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading4} </h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description4}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading5}</h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description5}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading6} </h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description6}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading7}</h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description7}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading8}</h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description8}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading9}</h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description9}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading10} </h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description10}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.heading11} </h2>
                    <p className='opacity-80 tracking-wider text-[1.05rem]'>{blogPg.description11}</p> <br />
                    <h2 className='text-[1.7rem] py-3 pt-5 '>{blogPg.Conclusion} </h2>
                    <p className='opacity-80'>{blogPg.ConclusionDescription}</p> <br />
                </div>
            </div>
        </>
    )
}

export default SubBlog