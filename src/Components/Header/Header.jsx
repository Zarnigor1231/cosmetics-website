import React from 'react'
import { Badge, Container, IconButton } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

// img 
import facebook from './imgs/facebook.svg'
import flag from './imgs/flag.svg'
import instagram from './imgs/instagram.svg'
import tel from './imgs/tel.svg'
import twitter from './imgs/twitter.svg'
import youtube from './imgs/youtube.svg'
import logo from './imgs/logo.svg'
import bag from './imgs/bag.svg'
import search from './imgs/search.svg'
import shape from './imgs/shape.svg'
import shuffle from './imgs/shuffle.svg'

// css
import './header.css'

export const Header = () => {
    const { count } = useSelector((state) => state.productSlice)
    
    return (
        <>
            <div className='header'>
                <Container>
                    <div className='header-top'>
                        <div className='header-left'>
                            <ul className='header-top-list'>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img hover:opacity-75' src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img hover:opacity-75' src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img hover:opacity-75' src={youtube} alt="youtube" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link hover:opacity-75'>
                                        <img className='header-top-img' src={instagram} alt="instagram" />
                                    </Link>
                                </li>
                            </ul>
                            <Link className='header-top-phone hover:opacity-80' to='/'>
                                <img className='header-top-phone-img' src={tel} alt="make a call" />
                                <p className='header-top-phone-text'>(+123)4567890</p>
                            </Link>
                        </div>

                        <div className='header-right'>
                            <ul className='header-right-list'>
                                <li className='header-right-item'>
                                    <Link className='header-right-link hover:opacity-80' to='/'>
                                        Setting
                                    </Link>
                                </li>
                                <li className='header-right-item'>
                                    <Link className='header-right-link hover:opacity-80' to='/'>
                                        USD $
                                    </Link>
                                </li>
                                <li className='header-right-item'>
                                    <Link className='header-right-link hover:opacity-80' to='/'>
                                        <img className='header-right-img' src={flag} alt="USD Flag" />
                                        English
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <>
                <Container>
                    <div className='header-bottom pb-5'>
                        <Link className='header-bottom-logo hover:opacity-80 '>
                            <img src={logo} alt="Header Logo" />
                        </Link>
                        <nav className='header-nav'>
                            <ul className='flex justify-between gap-4'>
                                <li className='header-nav-item'>
                                    <NavLink to={"/"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal" : "hover:text-indigo-600 font-normal"} >Home</NavLink>
                                </li>
                                <li className='header-nav-item'>
                                    <NavLink to={"/shop"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal" : "hover:text-indigo-600 font-normal"} >Shop</NavLink>
                                </li>
                                <li className='header-nav-item'>
                                    <NavLink to={"/pages"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal" : "hover:text-indigo-600 font-normal"} >Pages</NavLink>
                                </li>
                                <li className='header-nav-item'>
                                    <NavLink to={"/blog"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal" : "hover:text-indigo-600 font-normal"} >Blog</NavLink>
                                </li>
                                <li className='header-nav-item'>
                                    <NavLink to={"/adminPanel"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal" : "hover:text-indigo-600 font-normal"} >Admin Panel</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className='header-bottom-nav'>
                            <div className='header-bottom-nav-img p-0.5'>
                                <IconButton>
                                    <img src={search} alt="search" />
                                </IconButton>
                            </div>
                            <ul className='header-bottom-list'>
                                <li className='header-bottom-item p-0.5'>
                                    <Badge badgeContent={4} color="error" overlap="circular">
                                        <IconButton>
                                            <Link className='header-bottom-item-link'>
                                                <img className='header-bottom-item-img' src={shuffle} alt="shuffle" />
                                            </Link>
                                        </IconButton>
                                    </Badge>
                                </li>
                                <li className='header-bottom-item p-0.5'>
                                    <Badge badgeContent={4} color="error" overlap="circular">
                                        <IconButton>
                                            <Link to='/wishlist' className='header-bottom-item-link'>
                                                <img className='header-bottom-item-img' src={shape} alt="shape" />
                                            </Link>
                                        </IconButton>
                                    </Badge>
                                </li>
                                <li className='header-bottom-item p-0.5'>
                                    <Badge badgeContent={count} color="error" overlap="circular">
                                        <Link to="/cart" className='header-bottom-item-link'>
                                            <IconButton>
                                                <img className='header-bottom-item-img' src={bag} alt="bag" />
                                            </IconButton>
                                        </Link>
                                    </Badge>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </>
        </>

    )
}

