import React from 'react'

// css
import './Products.css'

function Products({ product }) {
    const [stateBtn, setStateBtn] = React.useState(false)
    
    const toggleProduct = (id) =>{
        for(let i=0; i<product.length; i++){
            if(product[i].id === id){
                setStateBtn(!stateBtn)
            }
        }
    }
    return (
        <>
            <div>
                <ul className='flex content-center gap-5 mb-20'>
                    {
                        product?.map((item) => {
                            return (
                                <li className='product-shodow shadow-xl mt-12 relative w-72 hover:scale-105' key={item.id}>
                                    <button className='absolute top-1 right-1 '>
                                        <i className="fa-solid fa-heart hover:text-red-500 text-yellow-100"></i>
                                    </button>
                                        <img className='mb-4 ' src={item.img} alt="Cosmetics" />
                                    <h3 className='truncate w-60 pl-4'>{item.name}</h3>

                                    <div className='flex justify-between content-center pt-10 mb-2 '>
                                        <p className='product-price pl-4' >$ {item.price}</p>
                                        {
                                            stateBtn ?
                                                <button onClick={() =>toggleProduct(item.id)} className='product-btn pr-4'><i className="fa-solid fa-trash"></i></button>
                                                :
                                                <button onClick={() =>toggleProduct(item.id)} className='product-btn pr-4'><i className="fa-solid fa-cart-shopping"></i></button>
                                        }
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