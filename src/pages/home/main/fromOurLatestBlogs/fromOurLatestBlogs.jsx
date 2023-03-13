import { Container } from '@mui/material'
import React from 'react'
import { request } from '../../../../config/request'
import { FromOurLatestBlogsBox } from '../Components'

function FromOurLatestBlogs() {
  const [product, setProduct] = React.useState()

  React.useEffect(() => {
    request.get(`/fromOurLatestBlogsBox`).then((response) => {
      setProduct(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [product])
  return (
    <Container>
      <div className='ourproduct-box mb-0'>
        <h2 className='ourproduct-box-title'>from our Latest Blogs</h2>
        <span className='block w-1/6 my-3 h-0.5 mx-auto bg-indigo-500'></span>
        <p className='ourproduct-box-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <FromOurLatestBlogsBox product = {product} />
    </Container>
  )
}

export default FromOurLatestBlogs