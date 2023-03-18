import React from 'react'
import { Products } from '../Components'
import { request } from '../../../../config/request'
import { Container } from '@mui/material'

function NewArrivalProducts() {
    // const [toggle, setToggle] = React.useState('newProducts')
    const [product, setProduct] = React.useState()


    React.useEffect(() => {
        request.get(`/newArrivalProducts`).then((response) => {
            setProduct(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <Container>
            <div className='ourproduct-box mb-0'>
                <h2 className='ourproduct-box-title'>New Arrival products</h2>
                <span className='block w-1/6 my-3 h-0.5 mx-auto bg-indigo-500'></span>
                <p className='ourproduct-box-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, repellat.</p>
            </div>
            <div>
                <ul className='flex content-center gap-5 mb-20'>
                    {
                        product?.map((item,index) => {
                            return (
                                <>
                                    <Products {...item} key={item.id} />
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </Container>
    )
}

export default NewArrivalProducts