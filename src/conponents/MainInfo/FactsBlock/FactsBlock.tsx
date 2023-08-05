import React from 'react'

const FactsBlock = () => {
  return (
    <div className={'flex flex-wrap gap-4'}>
      <div className={'py-[10px] px-[16px] rounded-lg border border-blue-300 w-fit '}>
        <p
          className={
            'text-blue-500 font-medium text-sm leading-4 tracking-wider uppercase'
          }
        >
          Вік: 35
        </p>
      </div>

      <div className={'py-[10px] px-[16px] rounded-lg border border-blue-300 w-fit'}>
        <p
          className={
            'text-blue-500 font-medium text-sm leading-4 tracking-wider uppercase'
          }
        >
          Дата Народження: 20.12.1960
        </p>
      </div>

      <div className={'py-[10px] px-[16px] rounded-lg border border-blue-300 w-fit'}>
        <p
          className={
            'text-blue-500 font-medium text-sm leading-4 tracking-wider uppercase'
          }
        >
          Дата Смерті: 20.12.1960
        </p>
      </div>
      <div className={'py-[10px] px-[16px] rounded-lg border border-blue-300 w-fit'}>
        <p
          className={
            'text-blue-500 font-medium text-sm leading-4 tracking-wider uppercase'
          }
        >
          Місце Народження: село Мартинівка
        </p>
      </div>
      <div className={'py-[10px] px-[16px] rounded-lg border border-blue-300 w-fit'}>
        <p
          className={
            'text-blue-500 font-medium text-sm leading-4 tracking-wider uppercase'
          }
        >
          Професія : зварювальник
        </p>
      </div>
    </div>
  )
}

export default FactsBlock
