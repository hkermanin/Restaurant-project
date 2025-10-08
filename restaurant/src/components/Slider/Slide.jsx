import React from 'react'

export default function Slide({comment}) {
  return (
    <div className='flex p-3 pb-4 flex-col gap-2 justify-center items-center'>
        <img className='w-35' src={comment.img} alt="" />
        <span className='text-2xl font-bold'>{comment.name}</span>
        <p className='text-gray-700 text-lg'>{comment.com}</p>
    </div>
  )
}
