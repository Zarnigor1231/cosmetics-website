import React from 'react'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

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
    return (
        <>
            <div className='header'>
                <Container>
                    <div className='header-top'>
                        <div className='header-left'>
                            <ul className='header-top-list'>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img' src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img' src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img' src={youtube} alt="youtube" />
                                    </Link>
                                </li>
                                <li className='header-top-item'>
                                    <Link className='header-top-link'>
                                        <img className='header-top-img' src={instagram} alt="instagram" />
                                    </Link>
                                </li>
                            </ul>
                            <Link className='header-top-phone' to='/'>
                                <img className='header-top-phone-img' src={tel} alt="make a call" />
                                <p className='header-top-phone-text'>(+123)4567890</p>
                            </Link>
                        </div>

                        <div className='header-right'>
                            <ul className='header-right-list'>
                                <li className='header-right-item'>
                                    <Link className='header-right-link' to='/'>
                                        Setting
                                    </Link>
                                </li>
                                <li className='header-right-item'>
                                    <Link className='header-right-link' to='/'>
                                        USD $
                                    </Link>
                                </li>
                                <li className='header-right-item'>
                                    <Link className='header-right-link' to='/'>
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
                    <div className='header-bottom'>
                        <Link className='header-bottom-logo'>
                            <img src={logo} alt="Header Logo" />
                        </Link>
                        <nav className='header-nav'>
                            <ul className='header-nav-list'>
                                <li className='header-nav-item'>
                                    <Link className='header-nav-item-link' to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className='header-nav-item'>
                                    <Link className='header-nav-item-link' to='/'>
                                        Shop
                                    </Link>
                                </li>
                                <li className='header-nav-item'>
                                    <Link className='header-nav-item-link' to='/'>
                                        Pages
                                    </Link>
                                </li>
                                <li className='header-nav-item'>
                                    <Link className='header-nav-item-link' to='/'>
                                        Blog
                                    </Link>
                                </li>
                                <li className='header-nav-item'>
                                    <Link className='header-nav-item-link' to='/'>
                                        Admin Panel
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className='header-bottom-nav'>
                            <div className='header-bottom-nav-img'>
                                <img src={search} alt="search" />
                            </div>
                            <ul className='header-bottom-list'>
                                <li className='header-bottom-item'>
                                    <Link className='header-bottom-item-link'>
                                        <img className='header-bottom-item-img' src={shuffle} alt="shuffle" />
                                    </Link>
                                </li>
                                <li className='header-bottom-item'>
                                    <Link className='header-bottom-item-link'>
                                        <img className='header-bottom-item-img' src={shape} alt="shape" />
                                    </Link>
                                </li>
                                <li className='header-bottom-item'>
                                    <Link className='header-bottom-item-link'>
                                        <img className='header-bottom-item-img' src={bag} alt="bag" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </>
        </>

    )
}
