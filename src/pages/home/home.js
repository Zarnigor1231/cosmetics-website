import React from 'react'
import { Advertising} from './advertising/advertising'
import { SectionInfo , OurProducts , NewArrivalProducts, FromOurLatestBlogs } from './main'

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
