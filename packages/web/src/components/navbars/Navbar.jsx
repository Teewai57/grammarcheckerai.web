import React from 'react'
import Logo from "../../assets/logo/grittyGrammar.png"

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white mx-auto max-w-7xl">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
       <img src={Logo} alt="" />
      </div>

      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-[#393939] text-[16px] font-[600] transition hover:text-gray-500/75"
                href="/"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="text-[#393939] text-[16px] font-[600] transition hover:text-gray-500/75"
                href="/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-[#393939] text-[16px] font-[600] transition hover:text-gray-500/75"
                href="/"
              >
                FAQ
              </a>
            </li>

            <li>
              <a
                className="text-[#393939] text-[16px] font-[600] transition hover:text-gray-500/75"
                href="/"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                className="text-[#393939] text-[16px] font-[600] transition hover:text-gray-500/75"
                href="/"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:block hidden">
          <a
            className="rounded-[12px] bg-[#2FB087] hover:bg-[#37ad88] px-10 py-4 text-sm font-medium text-white shadow"
            href="/"
          >
            Get Started
          </a>

        </div>

        <div className="block md:hidden">
          <button
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default Navbar