import React from 'react'
import { Advertising} from './advertising/advertising'
import { SectionInfo ,  NewArrivalProducts, FromOurLatestBlogs , OurProducts } from './main'
// import ProductOur from '../../Components/test'

export default function Home() {
  return (
    <>
    <section>
       <Advertising />
    </section>
    <section>
        <SectionInfo />
    </section>
    <section>
      <OurProducts />
      {/* <ProductOur /> */}
    </section>
    <section>
      <NewArrivalProducts />
    </section>
    <section>
      <FromOurLatestBlogs />
    </section>
    </>
  )
}
