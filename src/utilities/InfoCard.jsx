import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

import ControlButton from './ControlButton'
function InfoCard({children, title}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-2/12 p-4 rounded-lg shadow-lg bg-mutedGray hover:bg-selectedBlue text-selectedBlue hover:text-white">
      {children}
      </div>
    
      <div className="flex flex-col items-start gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <div className="flex items-center gap-1 text-sm text-primaryRed">
            <ControlButton name="Checkout"/>
            <BsArrowRight/>
          </div>
          

      </div>
    </div>
    
  )
}

export default InfoCard