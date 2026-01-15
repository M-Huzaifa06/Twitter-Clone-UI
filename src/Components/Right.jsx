import React from 'react'

const Right = () => {
  return (
    <div className='w-[60vw] px-5 py-2 sm:flex sm:flex-col gap-6 hidden'>

      <div className="search-box flex gap-3 border border-gray-300 rounded-2xl px-4 py-1">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder='Search'/>
      </div>

      <div className="sub flex flex-col gap-3 border border-gray-300 rounded-2xl px-4 py-2">
        <h1 className='font-bold text-xl'>Subscribe to Premium</h1>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className='bg-sky-400 text-white rounded-xl py-0.5'>Subscribe</button>
      </div>

      <div className="news flex flex-col gap-2 border border-gray-300 rounded-2xl px-4 py-2">
        <h1 className='font-bold text-xl p-2'>Today's News</h1>
        <p>Thunder Crush Heat by 34 Runs in BBL15 Opener Win</p>
        <h1 className='font-bold text-xl p-2'>Today's News</h1>
        <p>Thunder Crush Heat by 34 Runs in BBL15 Opener Win</p>
        <h1 className='font-bold text-xl p-2'>Today's News</h1>
        <p>Thunder Crush Heat by 34 Runs in BBL15 Opener Win</p>
        <h1 className='font-bold text-xl p-2'>Today's News</h1>
        <p>Thunder Crush Heat by 34 Runs in BBL15 Opener Win</p>
      </div>

    </div>
  )
}

export default Right
