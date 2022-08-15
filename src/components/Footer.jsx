import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import ControlButton from '../utilities/ControlButton'

function Footer() {
  return (
    <section className="flex flex-col bg-scaledDownWhite">
            <div className="flex justify-between w-10/12 py-10 mx-auto">
                <ControlButton name="Download App Now"/>
                <div className="flex">
                    <ControlButton name="Trending" className="px-4"/>
                    <ControlButton name="Resources" className="px-4"/>
                    <ControlButton name="Nearby" className="px-4"/>
                    <ControlButton name="Hackatons" className="px-4"/>
                </div>
            </div>
            

        
            <p className="px-5 py-10 whitespace-nowrap">Made with <AiFillHeart/> by VinovateIT</p>
    </section>
  )
}

export default Footer