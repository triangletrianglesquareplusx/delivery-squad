import React from 'react'

import ControlButton from './ControlButton'
function InfoCard({children, title}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-2/12 p-4 bg-blue-500 rounded-lg shadow-lg max-w-2/12">
      {children}
      </div>
    
      <div className="flex flex-col items-start gap-2">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <ControlButton name="Checkout" className="text-sm text-primaryRed"/>

      </div>
    </div>
    
  )
}

export default InfoCard