import React from 'react'
import Blog1 from './blog2-1.jpg'
import Blog2 from './blog2-2.jpg'

const Blog = () => {
  return (
    <div>
<div class="max-w-4xl pt-[120px] px-4  lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div class="max-w-2xl pt-[85px] ">
    <div class="flex justify-between items-center mb-6">
      <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        {/* <div class="flex-shrink-0">
          <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
        </div> */}

        <div class="grow">
          <div class="grid sm:flex sm:justify-between sm:items-center gap-2">
            <div>
              <div class="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                <div class="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                  <span class="font-semibold text-gray-800 ">
                  ......
                  </span>

                  <div class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl" role="tooltip">
                    <div class="p-4 sm:p-5">
                      <div class="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                        <div class="flex-shrink-0">
                          <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
                        </div>

                        <div class="grow">
                          <p class="text-lg font-semibold text-gray-200">
                            ......
                          </p>
                        </div>
                      </div>
                      <p class="text-sm text-gray-400">
                        Leyla is a Customer Success Specialist at Preline and spends her time speaking to in-house recruiters all over the world.
                      </p>
                    </div>
                    
                    <div class="flex justify-between items-center px-4 py-3 sm:px-5">
                      <ul class="text-xs space-x-3">
                        <li class="inline-block">
                          <span class="font-semibold text-gray-200">56</span>
                          <span class="text-gray-400">articles</span>
                        </li>
                        <li class="inline-block">
                          <span class="font-semibold text-gray-200">1k+</span>
                          <span class="text-gray-400">followers</span>
                        </li>
                      </ul>

                      <div>
                        <button type="button" class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs">
                          <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="text-xs text-gray-500">
                <li class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                  Jan 18
                </li>
                <li class="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full ">
                  8 min read
                </li>
              </ul>
            </div>

            {/* <div>
              <button type="button" class="py-1.5 px-2.5 sm:py-2 sm:px-3 inline-flex justify-center items-center gap-x-1.5 sm:gap-x-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs sm:text-sm ">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Tweet
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    
    <div class="space-y-5 md:space-y-8">
      <div class="space-y-3">
        {/* <h2 class="text-2xl font-bold md:text-3xl tracking-tighter">Unleashing the Power of Student Feedback</h2> */}

        <p class="text-lg text-gray-800">In the dynamic landscape of education, coaching institutes play a pivotal role in shaping students' academic endeavors. These institutes promise to be the guiding stars, illuminating the path towards success in various spheres. However, selecting the right coaching institute from the myriad of options can often feel like navigating a complex labyrinth of promises and claims.</p>
      </div>

      <p class="text-lg text-gray-800 ">Enter <span className='text-blue-600'> RateYourInstitute</span>, a groundbreaking platform that is set to redefine how students choose their coaching institutes. Built by students, for students, this innovative platform offers a unique space for candid and impartial reviews. Bid farewell to the uncertainty and confusion that typically accompanies the selection process, and embrace a world of well-informed decisions founded on genuine experiences.</p>

      <figure>
        <img class="w-full object-cover rounded-xl shadow-md" src={Blog1} alt="Blog 1 image"/>
       
      </figure>

      <p class="text-lg text-gray-800 ">Navigating the RateYourInstitute platform is as intuitive as it is enlightening. Here's how it works: Begin by searching for your desired coaching institute or explore the institutes available in your vicinity. Immerse yourself in comprehensive reviews penned by students who've walked the same path. Dive deep into insights regarding teaching methodologies, faculty competence, study materials, and more. If you find yourself torn between options, the platform's comparison tool empowers you to evaluate the strengths and weaknesses of different coaching institutes side by side. And if you're ready to contribute your own experience, RateYourInstitute welcomes your insights with open arms. Your review could be the guiding light for another student's life-altering decision.</p>


      <blockquote class="text-center p-4 sm:px-7">
        <p class="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
        <span className='text-blue-600'>RateYourInstitute</span> - a platform that amplifies student voices, fosters transparency, and helps shape the future of educational institutions.
        </p>
        
      </blockquote>

      <figure>
        <img class="w-full object-cover rounded-xl shadow-md" src={Blog2} alt="Blog 2 image"/>
        
      </figure>

      <div class="space-y-3">
        <h3 class="text-2xl font-semibold ">RateYourInstitute Redefines Educational Reviews</h3>

        <p class="text-lg text-gray-800">By connecting with like-minded individuals and industry experts, students can gain guidance, build professional networks, and explore new avenues for growth.</p>
      </div>

     

      <p class="text-lg text-gray-800">In this age of information, RateYourInstitute has emerged as a beacon of clarity, guiding students through the intricate realm of coaching institutes. It's a community where voices are heard, experiences are shared, and dreams are nurtured. Join us in reimagining how students select their coaching institutes. Embrace the power of unbiased reviews and let your journey to academic excellence begin. Your educational journey deserves nothing less.</p>

      <div>
        <a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 " href="#">
          Reviews
        </a>
        <a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 " href="#">
          IIT
        </a>
        <a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 " href="#">
          JEE
        </a>
        <a class="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 " href="#">
          NEET
        </a>
      </div>
    </div>
  </div>
</div>

{/* <div class="sticky bottom-6 inset-x-0 text-center">
  <div class="inline-block bg-white shadow-md rounded-full py-3 px-4 ">
    <div class="flex items-center gap-x-1.5">
      <div class="hs-tooltip inline-block">
        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
          875
          <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm " role="tooltip">
            Like
          </span>
        </button>
      </div>

      <div class="block h-3 border-r border-gray-300 mx-3 "></div>

      <div class="hs-tooltip inline-block">
        <button type="button" class="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
          </svg>
          16
          <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm " role="tooltip">
            Comment
          </span>
        </button>
      </div>

      <div class="block h-3 border-r border-gray-300 mx-3 "></div>

      <div class="hs-dropdown relative inline-flex">
        <button type="button" id="blog-article-share-dropdown" class="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
            <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
          Share
        </button>
        <div class="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2" aria-labelledby="blog-article-share-dropdown">
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
            Copy link
          </a>
          <div class="border-t border-gray-600 my-2"></div>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            Share on Twitter
          </a>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            Share on Facebook
          </a>
          <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            Share on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default Blog