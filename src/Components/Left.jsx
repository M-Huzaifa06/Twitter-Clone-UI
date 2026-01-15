import React from 'react'

const Left = () => {
  return (
    <div className='w-[10vw] sm:w-[30vw] p-4 flex flex-col gap-8'>
      <div className="logo">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"><g><path d="M21.742 21.75l-7.563-11.179 7.056-8.321h-2.456l-5.691 6.714-4.54-6.714H2.359l7.29 10.776L2.25 21.75h2.456l6.035-7.118 4.818 7.118h6.191-.008zM7.739 3.818L18.81 20.182h-2.447L5.29 3.818h2.447z"></path></g></svg>
      </div>
      <div className="menu ">
        <ul className='flex flex-col gap-4 justify-start'>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">search</span> <span className='hidden sm:block'>Explore</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">home</span> <span className='hidden sm:block'>Home</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">notifications</span><span className='hidden sm:block'>Notifications</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">person_add</span><span className='hidden sm:block'>Follow</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">mail</span><span className='hidden sm:block'>Chat</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">home</span><span className='hidden sm:block'>Grok</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">person</span><span className='hidden sm:block'>Profile</span></li>
            <li className='flex gap-4 items-center size-9 cursor-pointer'><span class="material-symbols-outlined">more_horiz</span><span className='hidden sm:block'>More</span></li>
        </ul>
      </div>
      <button className='bg-black text-white font-bold rounded-2xl py-1 cursor-pointer hidden sm:block'>Post</button>
    </div>
  )
}

export default Left
