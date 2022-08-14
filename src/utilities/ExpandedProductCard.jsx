import React from 'react'
import ControlButton from './ControlButton'

function ExpandedProductCard({className, src}) {
  return (
    <div className={`container rounded-md ${className}`}>
        <img src={src} className="object-fill"></img>
        <div className="flex flex-col items-start gap-3 p-3">
            <div className="flex flex-col gap-1">
                <p className="text-sm">Open Hours : Reliance Trends</p>
                <p className="text-sm">RS 800 for 2 people</p>
                <p className="text-sm">ETA 5 minutes</p>
            </div>
            <ControlButton name={"Explore"} className="px-2 py-1 text-sm text-blue-600 border border-blue-600 rounded-md"/>
        </div>
        
    </div>
  )
}

export default ExpandedProductCard