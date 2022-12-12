import React from 'react'
import { Link } from 'react-router-dom'
import './head.css'
import { useAuth0 } from "@auth0/auth0-react";

function Head() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            <header class=" zzz text-gray-600 body-font bg-purple-100">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg> */}
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            < div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <span class="ml-3 text-xl text-black">Shitansu-API</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-black">
                        {/* <a class="mr-5 hover:text-gray-900">First Link</a>
                        <a class="mr-5 hover:text-gray-900">Second Link</a>
                        <a class="mr-5 hover:text-gray-900">Third Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a>
                        <a class="mr-5 hover:text-gray-900">Fourth Link</a> */}
                        <ul className='grid grid-cols-6 gap-x-6 font-bold'>
                            <li>
                                <Link to="/" class="mr-5 text-black hover:text-blue-900 ">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" class="mr-5 text-black hover:text-blue-900">About</Link>
                            </li>
                            <li>
                                <Link to="/contact" class="mr-5 text-black hover:text-blue-900">Contact</Link>
                            </li>
                            {/* <li>
                                <Link to="/weather" class="mr-5 text-black hover:text-gray-900">Weather</Link>

                            </li> */}

                            <li>
                                <Link to="/services" class="mr-5 text-black hover:text-blue-900  dropdown dropdown-hover">Services

                                    <ul className="dropdown-content menu p-2 shadow rounded-box w-15 bg-white">
                                        <li><Link to='/weather' className='text-black'>Weather</Link></li>
                                        <li><Link to='/news' className='text-black'>News</Link></li>
                                        <li><Link to='/images' className='text-black'>Image</Link></li>
                                        {/* <li><Link to='/dishes' className='text-black'>Dishes</Link></li> */}
                                        <li><Link to='/textutils' className='text-black'>TextUtils</Link></li>



                                    </ul>
                                </Link>
                            </li>

                        </ul>



                    </nav>

                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg> */}
                    {
                        isAuthenticated ? (<li>
                            {/* <button  className=" bg-red-500"  onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button> */}

                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={
                                () => logout(
                                    { returnTo: window.location.origin }
                                )

                            }
                            >
                                Log-out
                            </button>
                        </li>) : (
                            <li>
                                {/* <button className=" bg-green-400" onClick={() => loginWithRedirect()}>Log In</button> */}
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => loginWithRedirect()}>
                                    Log-in
                                </button>
                            </li>)
                    }

                </div>
            </header>
        </div>
    )
}

export default Head