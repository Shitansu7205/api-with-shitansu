import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        // w-full px-2 py-4 b
        <div className='chinu'>
            <div className="navbar  sticky top-0  bg-base-100 flex justify-between bg-purple-700 overflow-hidden">
                {/* <a className="btn btn-ghost normal-case text-xl">Shitansu-API</a> */}
                <h1 className='name font-bold text-gray-400'>

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        < div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    Shitansu-API</h1>
                <div className=' p-4 '>
                    <ul className='grid grid-cols-6 gap-x-6 font-bold'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/services">services</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>

                        <li>
                            
                        </li>
                    </ul>
                </div>
                {/* <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div> */}


                {
                    isAuthenticated ? (<li>
                        {/* <button  className=" bg-red-500"  onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button> */}

                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => logout({ returnTo: window.location.origin })}>
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




                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      image here
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>

        </div >
    )
}

export default Navbar