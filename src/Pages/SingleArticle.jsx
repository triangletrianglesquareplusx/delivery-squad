import React from "react"
import {useParams} from "react-router-dom"
import { articles } from "../articles"
import { Link } from "react-router-dom"

export default function SingleArticle() {
    const {slack} = useParams();
    const SingleArticle = articles.find(el => el.slack === slack);
    
    return (
        <div className='container mt-8 mb-8 text-center'>
            <div className='details-img'>
                <img className="block mr-auto mb-8 ml-auto max-w-full" src={SingleArticle.Image} alt={SingleArticle.Title} />
            </div>
            <div className='details-info'>
                <h1 className="relative block mb-6 font-bold text-2xl md:text-4xl text-center after:block after:bg-[#fd6d61] after:mt-3 after:ml-auto after:mr-auto after:mb-0 after:w-20 md:after:w-28 after:h-1 md:after:h-1.5 after:rounded-md after:content-['']">{SingleArticle.Title}</h1>
                <p className="text-sm md:text-base">{SingleArticle.Description}</p>
            </div>
            <Link className="block mt-8 mr-auto ml-auto mb-8 p-3 w-56 bg-[#fd6d61] text-white font-medium text-base uppercase text-center rounded-[40px] transition-all hover:bg-black" to={`/articles`}>Back</Link>
        </div>
    )
}