import {  Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

// img
import logo from '../Header/imgs/logo.svg'
import instagram from './icon/instagram.svg'
import facebook from './icon/facebook.svg'
import twitter from './icon/twitter.svg'
import youtube from './icon/youtube.svg'
import skrillVisa from './icon/skrillVisa.png'

// css
import './Footer.css'

function Footer() {
    return (
        <div className='p-0 m-0'>
            <div className='p-10 pr-24 bg-neutral-200 mb-0'>
                <Container>
                    <div className='flex content-center'>
                        <div className='w-96 mr-20'>
                            <Link>
                                <img src={logo} alt="Footer Logo" />
                            </Link>
                            <p className='mt-7 mb-5 w-96'>
                                We are a team of professional designers and developers
                                that create high quality wordpress plugins, Html, React Template.
                            </p>
                            <ul className='flex gap-3'>
                                <li className='w- h-7  rounded-full bg-white'>
                                    <Link to='/'>
                                        <img className='text-black-600' src={instagram} alt="Footer instagram" />
                                    </Link>
                                </li>
                                <li className='w-7 h-7 rounded-full bg-white'>
                                    <Link to='/'>
                                        <img src={youtube} alt="Footer youtube" />
                                    </Link>

                                </li>
                                <li className='w-7 h-7  rounded-full bg-white'>
                                    <Link to='/'>
                                        <img src={twitter} alt="Footer twitter" />
                                    </Link>
                                </li>
                                <li className='w-7 h-7  rounded-full bg-white'>
                                    <Link to='/'>
                                        <img src={facebook} alt="Footer facebook" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ul className='flex gap-6 content-center'>
                            <li>
                                <h2>Information</h2>
                                <div className='relative  bg-neutral-400 mt-4'>
                                    <hr className='w-44 h-0.5 border-0' />
                                    <span className='absolute top-0 block w-14 h-0.5 mx-auto bg-indigo-500'></span>
                                </div>
                                <ul className='mt-4'>
                                    <li>
                                        About us
                                    </li>
                                    <li className='mt-1 mb-1'>
                                        Payment
                                    </li>
                                    <li>
                                        Contact us
                                    </li>
                                    <li className='mt-1'>
                                        Stores
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h2>Social Links</h2>
                                <div className='relative  bg-neutral-400 mt-4'>
                                    <hr className='w-44 h-0.5 border-0' />
                                    <span className='absolute top-0 block w-14 h-0.5 mx-auto bg-indigo-500'></span>
                                </div>
                                <ul className='mt-4'>
                                    <li>
                                        New products
                                    </li>
                                    <li className='mt-1 mb-1'>
                                        Best sales
                                    </li>
                                    <li>
                                        Login
                                    </li>
                                    <li className='mt-1'>
                                        My account
                                    </li>
                                </ul>
                            </li>
                            <li >
                                <h2>Newsletter</h2>
                                <div className='relative  bg-neutral-400 mt-4'>
                                    <hr className='w-44 h-0.5 border-0' />
                                    <span className='absolute top-0 block w-14 h-0.5 mx-auto bg-indigo-500'></span>
                                </div>
                                <p className='mt-4 mb-4'>
                                    Subcribe to the TheFace mailing list to receive update on mnew arrivals,
                                    special offers and other discount information.
                                </p>
                                    <form className='flex'>
                                        <input className='py-2 px-5  footer-inp' type="text" placeholder='Your email address' />
                                        <button className='footer-btn py-2 px-5  bg-indigo-700 text-white w-32' type='submit'>Sign up</button>
                                    </form>
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <div className='bg-black'>
                <Container>
                    <div className='flex justify-between p-4'>
                        <p className='text-slate-100 font-normal'>
                            Copyright © <span className='text-blue-400 font-normal'>HasThemes</span>. All Rights Reserved
                        </p>
                        <div>
                            <img src={skrillVisa} alt="Plastic Card" />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer