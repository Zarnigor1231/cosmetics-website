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
  }, [])
  return (
    <Container>
      <div className='ourproduct-box mb-0'>
        <h2 className='ourproduct-box-title'>from our Latest Blogs</h2>
        <span className='block w-1/6 my-3 h-0.5 mx-auto bg-indigo-500'></span>
        <p className='ourproduct-box-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <ul className='flex content-center gap-5 mb-16'>
        {
          product?.map((item) => {
            <FromOurLatestBlogsBox {...item}  />
          })
        }
      </ul>
      <hr />
      <div className='mt-8'>
        <ul className='flex content-center justify-around mb-8'>
          <li>
            <img src="https://sun6-23.userapi.com/s/v1/if2/ekhvM1vJ_GMDqWwpjm1iXj3NQ0eOEpet2KizqDvEEzPgw3saAtdfkQJkB8zCi5C1aE65rgXNEpyC-tVrTPy3NJnQ.jpg?size=2000x2000&quality=96&crop=0,0,2000,2000&ava=1" width={100} height={80} alt="Beanty MaxCup" />
          </li>
          <li>
            <img src="https://www.logolynx.com/images/logolynx/b2/b2b698ad9f5c1b3d75de15740529bde8.jpeg" width={100} height={80} alt="Suri Shop" />
          </li>
          <li>
            <img src="https://i.pinimg.com/originals/ff/1f/5d/ff1f5df74452bf0a7387fcf27f96f2ec.jpg" width={100} height={80} alt="Beauty Perfect" />
          </li>
          <li>
            <img src="https://cebcreative.co.uk/wp-content/uploads/Sophie-Jane-Logo.jpg" width={100} height={80} alt="Sophie Jana" />
          </li>
          <li>
            <img src="https://avatars.mds.yandex.net/i?id=33403ccc521502f71747d55da067aadb-4230742-images-thumbs&ref=rim&n=33&w=210&h=210" width={100} height={80} alt="Beauty Bar" />
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default FromOurLatestBlogs