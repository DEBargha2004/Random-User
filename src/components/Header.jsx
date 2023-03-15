import React from 'react'

function Header({ index, results }) {
  return (
    <div className='h-[150px] flex justify-center items-center mb-10 w-full'>
      <div className='max-w-fit rounded-md flex justify-around items-center p-4 bg-slate-200'>
        <div className='w-[128px] flex justify-center items-center'>
          <img src={results[index].picture.large} alt="avatar" className='rounded-[50%] object-cover' />
        </div>
        <div className='w-fit ml-5'>
          <p className='text-red-500 text-[32px] font-bold underline underline-offset-1'>{results[index].name.title} {results[index].name.first} {results[index].name.last}</p>
          <p className='text-[16px] text-slate-800'><span className='text-slate-400'>{results[index].location.street.number}</span> {results[index].location.street.name}, {results[index].location.city}, {results[index].location.state}, <span className='font-bold'>{results[index].location.country}</span>, {results[index].location.postcode}
          <p className='text-[16px] text-slate-800'>{results[index].location.timezone.offset} {results[index].location.timezone.description}</p>
          <p className='text-slate-400'>{results[index].gender}</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header;

