import React from 'react'
import ControlButton from '../utilities/ControlButton'
import InfoCard from '../utilities/InfoCard'
import {GiForkKnifeSpoon} from 'react-icons/gi'
function NearbySection() {
  return (
    <section className="flex flex-col items-center w-10/12 gap-10 p-3 mx-auto">
    <ControlButton name="Nearby" className="w-2/12 px-2 py-2 font-bold border-b-4 md:w-1/12 border-b-primaryRed"/>
    <div className="flex flex-col gap-2 md:flex-row md:justify-around">
        <InfoCard title="Restaurant"><GiForkKnifeSpoon/></InfoCard>
        <InfoCard title="Hangouts"><GiForkKnifeSpoon/></InfoCard>
        <InfoCard title="Utilities"><GiForkKnifeSpoon/></InfoCard>
        <InfoCard title="Shopping"><GiForkKnifeSpoon/></InfoCard>
    </div>
    </section>
  )
}

export default NearbySection