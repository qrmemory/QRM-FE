import React from 'react'
import CustomCardMedia from '../CustomCardMedia/CustomCardMedia'
import FactsBlock from './FactsBlock/FactsBlock'

const MainInfo = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
      <CustomCardMedia
        src={'https://img.eurointegration.com.ua/images/doc/a/b/ab328da-460.jpg'}
        width={375}
        height={408}
        className='w-full sm:w-96'
      />

      <div className='bg-white p-6 rounded-lg flex flex-col gap-4 w-full sm:w-auto'>
        <p className='text-2xl font-semibold'>Петро Олександрович Шульга</p>
        <FactsBlock />
        <div>
          <p className='text-gray-700 font-medium text-lg leading-6 tracking-wider uppercase'>
            Інформація про родину
          </p>
          <p className='text-gray-600 font-Montserrat text-base leading-6'>
            Родина Гаррісонів - щаслива і злагоджена родина з трьома чудовими дітьми.
            Батько Джон - талановитий музикант, мама Лілі - відомий художник. Діти Джек,
            Емма і Олівер завжди підтримують один одного і мріють здійснити неймовірні
            подорожі разом.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainInfo
