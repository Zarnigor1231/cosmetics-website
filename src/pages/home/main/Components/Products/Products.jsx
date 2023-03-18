import React from 'react'
import { useDispatch  } from 'react-redux'
import { addProduct, removeProduct  } from '../../../../../redux/productSlice'

// css
import './Products.css'

const Products = (props , index) => {
     
    const [ stateBtn , setStateBtn ] = React.useState(false)
    const [heart, setHeart] = React.useState(false)

    const dispatch = useDispatch()

    const toggleProduct = () => {
        if (!stateBtn) {
            dispatch(addProduct(props))
        }
        else if (stateBtn) {
            dispatch(removeProduct(props.id))
        }
        setStateBtn(!stateBtn)
    }

    const deleteCart = () => {
        dispatch(removeProduct(props.id))
        setHeart(!heart)
    }

    return (
        <li className='product-shodow shadow-xl mt-12 relative w-72 p-1' >
            <button onClick={deleteCart} className='absolute top-1 right-1  pr-2 pt-1'>
                <i className={heart ? "fa-solid fa-heart text-red-500" : "fa-solid fa-heart text-yellow-100"}></i>
            </button>
            <img className='mb-4 ' src={props.img} alt="Cosmetics" />
            <div className='truncate w-60 pl-4'>
                <h2>{props.name}</h2>
            </div>

            <div className='flex justify-between content-center pt-10 mb-2 '>
                <p className='product-price pl-4 text-neutral-600' >$ {props.price} </p>

                {
                    !stateBtn ?
                     <button onClick={toggleProduct}><i className="fa-solid fa-cart-shopping"></i> </button>
                     :
                    <button onClick={toggleProduct}><i className="fa-solid fa-trash"></i></button>
                }
            </div>
        </li>
    )
}

export default Products