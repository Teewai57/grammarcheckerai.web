import React from 'react'
import Grit from "../../assets/logo/gritFooter.png"

const Footer = () => {
  return (
    <>
<footer aria-label="Site Footer" className="bg-[#0B303E]">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-between">
    <div className="flex justify-start items-center">
      <img src={Grit} alt="" />
    </div>

    <div className='items-center space-y-2 px-3 md:space-y-5'>
        <div><a href="" className='text-white font-[500] text-[1rem]'>Help</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>FAQ</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>Safety</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>Privacy</a></div>
    </div>
    <div className='items-center space-y-2 px-3 md:space-y-5'>
        <div><a href="" className='text-white font-[500] text-[1rem]'>About Grit Grammar</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>About us</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>Terms</a></div>
        <div><a href="" className='text-white font-[500] text-[1rem]'>Contact Us</a></div>
        
    </div>

    </div>



  </div>
</footer>
<footer aria-label="Site Footer" className="bg-[#185A71]">
  <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8 items-center">

    <nav aria-label="Footer Nav" className="bg-[#185A71] text-white">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 items-center">
        <li>
          <a className=" transition " href="/">
            @2022 Gritgrammar
          </a>
        </li>

        <li>
          <a className=" transition " href="/">
            help
          </a>
        </li>

        <li>
          <a className=" transition " href="/">
            safety
          </a>
        </li>

        <li>
          <a className=" transition " href="/">
            privacy
          </a>
        </li>

        <li>
          <a className=" transition " href="/">
            terms
          </a>
        </li>

        <li>
          <a className=" transition " href="/">
            about us
          </a>
        </li>
      </ul>
    </nav>

  </div>
</footer>
</>
  )
}

export default Footer