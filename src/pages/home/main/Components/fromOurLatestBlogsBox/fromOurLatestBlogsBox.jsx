import React from 'react'

// css
import './fromOurLatestBlogsBox.css'


function FromOurLatestBlogsBox({ product }) {
  return (
    <div>
      <ul className='flex content-center gap-5 mb-16'>
        {
          product?.map((item) => {
            return (
              <li className='product-shodow mt-12 relative w-80' key={item.id}>
                <img className='w-72 h-72 mb-4' src={item.img} alt="from our Latest Blogs" />
                <div className='pl-4'>
                  <h3 className='fromourlatestblogsbox-title'>Fashion</h3>
                  <h4 className='fromourlatestblogsbox-title-text mt-3  mb-4'>This is first Post For Blog</h4>
                    <p className='fromourlatestblogsbox-text p-0 pb-4'>Posted by<span className='text-blue-400 mr-2 ml-2'>HasTech</span>12TH Nov 2023 </p>
                    {/* <p className='fromourlatestblogsbox-text'>HasTech</p>
                    <p className='fromourlatestblogsbox-text'>12TH Nov 2023</p> */}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FromOurLatestBlogsBox