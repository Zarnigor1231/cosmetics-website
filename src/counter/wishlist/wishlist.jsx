import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/material'
import { request } from '../../config/request'

function Wishlist() {
    const [product, setProduct] = React.useState()
    React.useEffect(() => {
        request.get(`/upcomingProducts`).then((response) => {
            setProduct(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <>
            <div className='bg-neutral-200'>
                <Container>
                    <div className='flex flex-col justify-center content-center pt-28 pb-28 text-center'>
                        <h2 className='text-black font-semibold text-xl'>Wishlist</h2>
                        <span className='mx-auto w-16 my-3 h-0.5 bg-indigo-500'></span>
                        <div className='flex justify-center ml-5'>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal mr-2" : "hover:text-indigo-600 font-normal mr-2"} >Home</NavLink>
                            <div>
                                <i className="fa-solid fa-chevron-right mr-2"></i>
                            </div>
                            <NavLink to={"/wishlist"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal mr-2" : "hover:text-indigo-600 font-normal mr-2"} >Wishlist</NavLink>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='mt-8'>
                <Container>
                    <h3 className='text-black text-xl font-semibold'>
                        Your cart items
                    </h3>
                    <hr className='mt-4 mb-4' />
                    <ul className='bg-violet-500 flex content-center pt-4 pb-4 pl-10'>
                        <li className='text-white font-normal text-sm mr-28 '>Product Image</li>
                        <li className='text-white font-normal text-sm ml-1 mr-60'>Product Name</li>
                        <li className='text-white font-normal text-sm mr-20'>Stock Status</li>
                        <li className='text-white font-normal text-sm ml-1  mr-24'>Like</li>
                        <li className='text-white font-normal text-sm  mr-36'>Price</li>
                        <li className='text-white font-normal text-sm'>Checkout</li>
                    </ul>
                    <ul className='mb-20'>
                        {
                            product?.map((item) => {
                                return (
                                    <li key={item.id} className='mb-2 mt-2'>
                                        <div className='flex justify-between content-center'>
                                            <div>
                                                <img src={item.img} width={150} height={150} alt="Cart img" />
                                            </div>
                                            <h4 className='my-auto truncate w-60'>{item.name}</h4>
                                            <button className='my-auto h-6 px-2 rounded-md bg-violet-500 text-white font-normal text-sm'>In Stock</button>
                                            <div className='my-auto flex content-center justify-between'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width={25} height={25} alt="heart red" />
                                                {/* <i className="fa-solid fa-heart text-red-500"></i> */}
                                            </div>
                                            <p className='my-auto'>{item.price} $</p>

                                            <button className='my-auto pl-4 pr-5 pt-4 pb-9 h-6 rounded-md bg-violet-700 text-white font-normal text-sm hover:opacity-95'>Add to cart</button>
                                        </div>
                                        <hr className='mt-2' />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Container>
            </div>
        </>
    )
}

export default Wishlist