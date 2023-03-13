import React from 'react'
import { Container } from '@mui/material'
import { request } from '../../../../config/request'


// img
import collections from './imgs/collections.jpg'
import getUp from './imgs/getUp.jpg'
import mackup from './imgs/mackup.jpg'
import { Products } from '../Components'


function OurProducts() {
    const [toggle, setToggle] = React.useState('newProducts')
    const [product, setProduct] = React.useState()

    React.useEffect(() => {
        request.get(`/${toggle}`).then((response) => {
            setProduct(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [toggle])

    const toggleProduct = (name) => {
        setToggle(name)
    }
    return (
        <Container>
            <div className='ourproduct-box'>
                <h2 className='ourproduct-box-title'>Our products</h2>
                <span className='block w-1/6 my-3 h-0.5 mx-auto bg-indigo-500'></span>
                <p className='ourproduct-box-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?</p>
            </div>

            <ul className='flex gap-5 justify-center'>
                <li className='ourproduct-btn  hover:text-blue-300'>
                    <button className={toggle === 'newProducts' ? 'text-blue-700' : ''} onClick={() => toggleProduct('newProducts')}>New Products</button>
                </li>
                <li className='ourproduct-btn  hover:text-blue-300'>
                    <button className={toggle === 'onsale' ? 'text-blue-700' : ''} onClick={() => toggleProduct('onsale')}>Onsale</button>
                </li>
                <li className='ourproduct-btn  hover:text-blue-300'>
                    <button className={toggle === 'upcomingProducts' ? 'text-blue-700' : ''} onClick={() => toggleProduct('upcomingProducts')}>Upcoming Products</button>
                </li>
            </ul>
            <Products  product = {product} />
            <div>
                <ul className='flex w-full mb-16 content-center'>
                    <li className='w-1/4 mr-4'>
                        <img className='h-80' src={getUp} height='367' width='638' alt="getUp" />
                    </li>
                    <li className='w-1/4 mr-4'>
                        <img className='h-80' src={collections} height='367' width='638' alt="collections" />
                    </li>
                    <li className='w-1/2'>
                        <img className='h-80' src={mackup} height='367' width='638' alt="mackup" />
                    </li>
                </ul>
            </div>
        </Container>
    )
}

export default OurProducts
