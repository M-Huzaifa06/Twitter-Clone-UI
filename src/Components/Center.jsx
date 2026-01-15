import React from "react";

const Center = () => {
  return (
    <div className="w-full border-x border-gray-300">
        
      <div className="nav border-y flex gap-5 border-gray-300">
        <button className="w-1/2 text-xl py-2">For You</button>
        <button className="w-1/2 text-xl py-2">Following</button>
      </div>

      <div className="search flex p-2 border-b border-gray-300">
        <div className="img w-[5vw]">
          <img
            src="https://pbs.twimg.com/profile_images/2003157076454047745/hc7utpCS_bigger.png"
            alt=""
            className="p-2 rounded-full"
          />
        </div>

        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="What's is happening"
            className="text-xl py-3"
          />
          <div className="flex flex-col w-full">
            <div className="globe flex gap-2 text-sky-400">
              <span class="material-symbols-outlined">globe</span>
              <span>Everyone can reply</span>
            </div>
          </div>

          <div className="icons  mt-2 border-t border-gray-400 flex justify-between pt-2">
            <div className="text-sky-400">
              <span class="material-symbols-outlined">gif_box</span>
              <span class="material-symbols-outlined">image</span>
              <span class="material-symbols-outlined">sentiment_satisfied</span>
              <span class="material-symbols-outlined">calendar_clock</span>
              <span class="material-symbols-outlined">location_on</span>
            </div>

            <button className="bg-black text-white font-bold rounded-2xl py-1 px-6 cursor-pointer ">
              Post
            </button>
          </div>
        </div>
      </div>

      <div className="posts border-b border-gray-300">
        <div className="post flex gap-2">
          <div className="img w-[5vw] shrink-0">
            <img
              src="https://pbs.twimg.com/profile_images/2003157076454047745/hc7utpCS_bigger.png"
              alt=""
              className="p-2 rounded-full"
            />
          </div>

          <div className="content pr-3">
            <span className="text-xl">unusual_whales </span> <span>@unusual_whales·5h</span>
            <p className="mb-2">
              Tesla, $TSLA, is up more than 2.5% today. Numerous analysts have a
              buy rating on TSLA. In fact, 54% recommend buy from the last two
              months.
            </p>
            <img src="https://pbs.twimg.com/media/G8yielbXEAIaCX_?format=jpg&name=900x900" alt="" className="rounded-xl"/>
            <div className="icons flex justify-between py-2">
                <span><span class="material-symbols-outlined">chat_bubble</span>332</span>
                <span><span class="material-symbols-outlined">repeat</span>332</span>
                <span><span class="material-symbols-outlined">favorite</span>332</span>
                <span><span class="material-symbols-outlined">bar_chart_4_bars</span>332</span>
            </div>
          </div>
        </div>
      </div>
      <div className="posts border-b border-gray-300">
        <div className="post flex gap-2">
          <div className="img w-[5vw] shrink-0">
            <img
              src="https://pbs.twimg.com/profile_images/2003157076454047745/hc7utpCS_bigger.png"
              alt=""
              className="p-2 rounded-full"
            />
          </div>

          <div className="content pr-3">
            <span className="text-xl">unusual_whales </span> <span>@unusual_whales·5h</span>
            <p className="mb-2">
              Tesla, $TSLA, is up more than 2.5% today. Numerous analysts have a
              buy rating on TSLA. In fact, 54% recommend buy from the last two
              months.
            </p>
            <img src="https://pbs.twimg.com/media/G8yielbXEAIaCX_?format=jpg&name=900x900" alt="" className="rounded-xl"/>
            <div className="icons flex justify-between py-2">
                <span><span class="material-symbols-outlined">chat_bubble</span>332</span>
                <span><span class="material-symbols-outlined">repeat</span>332</span>
                <span><span class="material-symbols-outlined">favorite</span>332</span>
                <span><span class="material-symbols-outlined">bar_chart_4_bars</span>332</span>
            </div>
          </div>
        </div>
      </div>
      <div className="posts border-b border-gray-300">
        <div className="post flex gap-2">
          <div className="img w-[5vw] shrink-0">
            <img
              src="https://pbs.twimg.com/profile_images/2003157076454047745/hc7utpCS_bigger.png"
              alt=""
              className="p-2 rounded-full"
            />
          </div>

          <div className="content pr-3">
            <span className="text-xl">unusual_whales </span> <span>@unusual_whales·5h</span>
            <p className="mb-2">
              Tesla, $TSLA, is up more than 2.5% today. Numerous analysts have a
              buy rating on TSLA. In fact, 54% recommend buy from the last two
              months.
            </p>
            <img src="https://pbs.twimg.com/media/G8yielbXEAIaCX_?format=jpg&name=900x900" alt="" className="rounded-xl"/>
            <div className="icons flex justify-between py-2">
                <span><span class="material-symbols-outlined">chat_bubble</span>332</span>
                <span><span class="material-symbols-outlined">repeat</span>332</span>
                <span><span class="material-symbols-outlined">favorite</span>332</span>
                <span><span class="material-symbols-outlined">bar_chart_4_bars</span>332</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Center;
