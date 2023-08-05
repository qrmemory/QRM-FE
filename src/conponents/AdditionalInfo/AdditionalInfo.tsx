import React from 'react'

const AdditionalInfo = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
      <div className='bg-white w-full sm:w-[46%] rounded-lg p-6'>
        <p className='text-black font-medium text-xl leading-6 tracking-wider uppercase'>
          Освіта
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2020-2024 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'> НЛТУУ</span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2020-2024 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'> НЛТУУ</span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2020-2024 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'> НЛТУУ</span>
          </li>
        </ul>
      </div>

      <div className='bg-white w-full sm:w-[46%] rounded-lg p-6'>
        <p className='text-black font-medium text-xl leading-6 tracking-wider uppercase'>
          Досягнення
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2022 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              Зварив буржуйку для ЗСУ
            </span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2023 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              задонатив 1000000 грн на дрони для ЗСУ
            </span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2003 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              Зробив двійню дітей
            </span>
          </li>
        </ul>
      </div>

      <div className='bg-white w-full sm:w-[46%] rounded-lg p-6'>
        <p className='text-black font-medium text-xl leading-6 tracking-wider uppercase'>
          Кар&apos;єра
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2002-2004 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              молодший спеціаліст - Маріупольський металургійний завод
            </span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2004 - 2007 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              середній спеціаліст - Криворізький металургійний завод
            </span>
          </li>
          <li>
            <span className='text-gray-400 text-base font-semibold leading-6'>
              2007 - 2011 -
            </span>
            <span className='text-slate-500 text-base font-medium leading-6'>
              {' '}
              бригадир - Кам&apos;янецький бетонний завод
            </span>
          </li>
        </ul>
      </div>

      <div className='bg-white w-full sm:w-[46%] rounded-lg p-6'>
        <p className='text-black font-medium text-xl leading-6 tracking-wider uppercase'>
          Захоплення
        </p>
        <ul className='list-disc ml-6 space-y-2'>
          <li>
            <span className='text-slate-500 text-base font-medium leading-6'>
              Любив викладати зварювання в бурсі
            </span>
          </li>
          <li>
            <span className='text-slate-500 text-base font-medium leading-6'>
              Любив рибалити
            </span>
          </li>
          <li>
            <span className='text-slate-500 text-base font-medium leading-6'>
              Любив проводити час з близькими
            </span>
          </li>
          <li>
            <span className='text-slate-500 text-base font-medium leading-6'>
              Любив прокидатися зі сходом сонця
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdditionalInfo
