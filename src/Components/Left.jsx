import React from 'react'

const Left = () => {
  return (
    <div className='w-[30vw] p-4 flex flex-col gap-8'>
      <div className="logo">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
      </div>
      <div className="menu ">
        <ul className='flex flex-col gap-4 justify-start'>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">search</span>Explore</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">home</span> Home</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">notifications</span>Notifications</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">person_add</span>Follow</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">mail</span>Chat</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">home</span>Grok</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">person</span>Profile</li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">more_horiz</span>More</li>
        </ul>
      </div>
      <button className='bg-black text-white font-bold rounded-2xl py-1 cursor-pointer'>Post</button>
    </div>
  )
}

export default Left
