import React from 'react'
import ExpandedProductCard from '../utilities/ExpandedProductCard'
import ControlButton from '../utilities/ControlButton'

function TrendingSection() {
  return (
    <div className="flex flex-col items-center gap-10 p-3">
        <ControlButton name="Trending" className="w-1/12 px-2 py-2 font-bold border-b-4 border-b-primaryRed"/>
        <section className="flex justify-around w-10/12">
            <ExpandedProductCard className="relative w-5/12 max-w-sm mt-10 mb-0 overflow-hidden rounded-lg shadow-md md:w-4/12 lg:w-3/12" src={'https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg'}/>
            <ExpandedProductCard className="w-5/12 max-w-sm mb-10 overflow-hidden rounded-lg shadow-md md:w-4/12 lg:w-3/12" src={'https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg'}/>
            <ExpandedProductCard className="relative w-5/12 max-w-sm mt-10 mb-0 overflow-hidden rounded-lg shadow-md md:w-4/12 lg:w-3/12" src={'https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg'}/>
        </section>

    </div>
  )
}

export default TrendingSection