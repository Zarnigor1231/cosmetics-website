import { Container } from '@mui/material'
import React from 'react'

// img

import car from './imgs/car.png'
import freeReturns from './imgs/freeReturns.png'
import girl from './imgs/girl.png'
import support from './imgs/support.png'
import cosmitic from './imgs/cosmitic.jpg'
import nailPolish from './imgs/nailPolish.jpg'
import lipstick from './imgs/lipstick.jpg'

// css

import './sectionInfo.css'

export function SectionInfo() {
  return (
    <div>
      <Container>
        <ul className='sectioninfo-list'>
          <li className='sectioninfo-list-item'>
            <img className='section-item-img' src={car} width='56' height='45' alt="Free Shipping" />
            <div className='sectioninfo-item-box'>
              <h3 className='sectioninfo-item-title'>Free Shipping</h3>
              <p className='sectioninfo-item-text'>On all orders over $75.00</p>
            </div>
          </li>
          <li className='sectioninfo-list-item'>
            <img className='section-item-img' src={freeReturns} width='56' height='45' alt="Free Returns" />
            <div className='sectioninfo-item-box'>
              <h3 className='sectioninfo-item-title'>Free Returns</h3>
              <p className='sectioninfo-item-text'>Returns are free within 9 days</p>
            </div>
          </li>
          <li className='sectioninfo-list-item'>
            <img className='section-item-img' src={girl} width='56' height='45' alt="100% Payment Secure" />
            <div className='sectioninfo-item-box'>
              <h3 className='sectioninfo-item-title'>100% Payment Secure</h3>
              <p className='sectioninfo-item-text'>Your payment are safe with us.</p>
            </div>
          </li>
          <li className='sectioninfo-list-item'>
            <img className='section-item-img' src={support} width='56' height='45' alt="Support 24/7" />
            <div className='sectioninfo-item-box'>
              <h3 className='sectioninfo-item-title'>Support 24/7</h3>
              <p className='sectioninfo-item-text'>Contact us 24 hours a day</p>
            </div>
          </li>
        </ul>
        <div>
          <ul className='flex w-full mb-20 content-center'>
            <li className='w-1/2 mr-4'>
              <img className='h-80' src={cosmitic} height='367' width='638' alt="megaDiscout" />
            </li>
            <li className='w-1/4 mr-4'>
              <img  className='h-80' src={lipstick} height='367' width='638' alt="lipstick" />
            </li>
            <li className='w-1/4'>
              <img  className='h-80' src={nailPolish} height='367' width='638' alt="nailPolish" />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

