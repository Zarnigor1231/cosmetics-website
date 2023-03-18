import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { store} from '../../redux/store'
import { saveState } from '../../hooks'
import { toggleAmount ,removeProduct } from '../../redux/productSlice'


store.subscribe(() => {
  saveState("product" , store.getState().productSlice)
})

function Cart() {

  const { products } = useSelector((state) => state.productSlice)
  // const [ id , setId ] =React.useState(0)

  const dispatch = useDispatch()

  const toggleBtn = ({type , index}) => {
    console.log(index)
    dispatch(toggleAmount({ type:type, id: products[index].id }))

  }

  const remove = (index) => {
    dispatch(removeProduct(products[index].id))
  }

  const removeAll = (index) => {
    dispatch(removeProduct(products[index].id))
  }

  return (
    <>
      <div className='bg-neutral-200'>
        <Container>
          <div className='flex flex-col justify-center content-center pt-28 pb-28 text-center'>
            <h2 className='text-black font-semibold text-xl'>Cart</h2>
            <span className='mx-auto w-16 my-3 h-0.5 bg-indigo-500'></span>
            <div className='flex justify-center ml-5'>
              <NavLink to={"/"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal mr-2" : "hover:text-indigo-600 font-normal mr-2"} >Home</NavLink>
              <div>
                <i className="fa-solid fa-chevron-right mr-2"></i>
              </div>
              <NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-indigo-600 font-normal mr-2" : "hover:text-indigo-600 font-normal mr-2"} >Cart</NavLink>
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
            <li className='text-white font-normal text-sm mr-20 '>Product Image</li>
            <li className='text-white font-normal text-sm ml-1 mr-28'>Product Name</li>
            <li className='text-white font-normal text-sm mr-24'>Stock Status</li>
            <li className='text-white font-normal text-sm  mr-28'>Qty</li>
            <li className='text-white font-normal text-sm ml-5  mr-20'>Price</li>
            <li className='text-white font-normal text-sm ml-6 mr-24'>Price All</li>
            <li className='text-white font-normal text-sm ml-1'>Checkout</li>
          </ul>
          <ul className='mb-20'>
            {
              products?.map((item , index) => {
                return (
                  <li key={index} className='mb-2 mt-2'>
                    <div className='flex justify-between content-center'>
                      <div>
                        <img src={item.img} width={150} height={150} alt="Cart img" />
                      </div>
                      <h4 className='my-auto truncate w-36'>{item.name}</h4>
                      <button className='my-auto h-6 px-2 rounded-md bg-violet-500 text-white font-normal text-sm'>In Stock</button>
                      <div className='my-auto flex content-center justify-between'>
                        <span className='w-16 py-5 px-5 bg-neutral-200 rounded-xl text-center'>{item.count}</span>
                        <div className='flex flex-col justify-center ml-3'>
                          <button onClick={() => toggleBtn({type:'add' , index})} className='px-1 pt-1 hover:shadow-md w-16'>
                            <i className="fa-sharp fa-solid fa-chevron-up"></i>
                          </button>
                          {
                            item.count === 1 ?
                              <button onClick={() => remove(index)} className='px-1 pt-1 hover:shadow-md w-16 text-red-600'>
                                {/* <i className="fa-solid fa-trash text-red-600"></i> */}
                                delete
                              </button>
                              :
                              <button onClick={() => toggleBtn({type:"remove" , index})} className='px-1 pt-1 hover:shadow-md w-16'>
                                <i className="fa-sharp fa-solid fa-chevron-down"></i>
                              </button>
                          }
                        </div>
                      </div>
                      <p className='my-auto w-16'>{item.price}</p>
                      <p className='my-auto w-16'>{item.userPrice} $</p>
                      <button onClick={() => removeAll(index)} className='my-auto pl-4 pr-5 pt-4 pb-9 h-6 rounded-md bg-neutral-900 text-white font-normal text-sm hover:opacity-95'>Remove</button>
                    </div>
                    <hr className='mt-2' />
                  </li>
                )
              })
            }
          </ul>


          <div className='w-1/2'>
            <div className='bg-neutral-100 p-10 mb-3 rounded-md'>
              <div>
                <div className='flex content-center justify-between mb-1'>
                  <h5>Product</h5>
                  <p className='font-normal text-sm'>Total</p>
                </div>
                <div className='flex content-center justify-between mb-4'>
                  <h5>Shipping</h5>
                  <p className='font-normal text-sm text-neutral-500'>Free shipping</p>
                </div>
              </div>
              <hr />
              <div className='flex content-center justify-between mb-4 mt-4'>
                <h5>Total</h5>
                <p className='font-bold text-ms text-violet-700'>$329</p>
              </div>
              <hr />
            </div>
            <div className='felx content-center mt-4 mb-32'>
              <button className='p-3 bg-violet-500 mr-5 rounded-md text-white hover:opacity-90'>Update Cart</button>
              <button className='p-3 bg-violet-500 rounded-md text-white hover:opacity-90'>Checkout</button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Cart