import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav class="bg-black p-4">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div class="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
        <Link to={"/"}>Admin</Link>
        </div>

        <div class="lg:hidden">
            <button class="text-white focus:outline-none">
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
        </div>

        <div class="lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
            <Link to={"/"} class="text-white  px-4 py-2  hover:text-orange-600">Projects</Link>
            <Link to={"/skill"} class="text-white  px-4 py-2  hover:text-orange-600">Skill</Link>
            <Link to={"/contact"} class="text-white  px-4 py-2  hover:text-orange-600">Contact Me</Link>
        </div>
    </div>

</nav>
  )
}

export default Header
