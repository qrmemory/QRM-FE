import React from 'react'
import MainInfo from '../MainInfo/MainInfo'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import RelativesWords from '../RelativesWords/RelativesWords'

const HumanCard = () => {
  return (
    <div className='container mx-auto max-w-screen-lg p-[40px] rounded-[40px] bg-gray-100 flex flex-col gap-6'>
      <MainInfo />
      <AdditionalInfo />
      <RelativesWords />
    </div>
  )
}

export default HumanCard
