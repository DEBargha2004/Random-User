import React from 'react'

function card({ data, id, setActive, active }) {
  return (
    <div className={`flex justify-around items-center h-20 w-full p-4 rounded-md  ${active ? 'bg-purple-500' : 'bg-slate-200'}`} onClick={() => setActive(id)}>
      <div className='w-[20%] flex justify-center items-center'>
        <img src={data.picture.medium} alt="avatar" className='rounded-[50%] object-cover' />
      </div>
      <div className='w-[80%] ml-4'>
        <p className={`${active ? 'text-white' : 'text-slate-400'} text-[13px]`}>{data.gender} {data.nat}</p>
        <p className={`${active ? 'text-white' : 'text-slate-800'} text-xl font-semibold`}>{data.name.title} {data.name.first} {data.name.last}</p>
        <p className={`${active ? 'text-white' : 'text-red-400'} text-[14px]`}>{data.email}</p>
      </div>
    </div>
  )
}

export default card;