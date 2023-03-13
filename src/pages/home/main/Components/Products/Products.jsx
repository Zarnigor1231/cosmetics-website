import React from 'react'

// css
import './Products.css'

function Products({product}) {
    return (
        <>
            <div>
                <ul className='flex content-center gap-5 mb-20'>
                    {
                        product?.map((item) => {
                            return (
                                <li className='product-shodow mt-12 relative w-80' key={item.id}>
                                    <button className='absolute top-1 right-1 '>
                                        <i className="fa-solid fa-heart hover:text-red-500 text-yellow-100"></i>
                                    </button>
                                    <img className='w-72 h-72 mb-4' src={item.img} alt="Cosmetics" />
                                    <h3 className='product-title mb-10 pl-4'>{item.name}</h3>

                                    <div>
                                        <p className='product-price pl-4' >$ {item.price}</p>
                                        <button className='product-btn'></button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>

    )
}

export default Products