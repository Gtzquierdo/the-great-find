import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'> SMALL TEXT</p>
            <h3>MID TEXT</h3>
            <img src='' alt='shark-teeth-necklace' className='her-banner-image' />

            <div>
                <Link href={'/products/id'}>
                    <button type='button'>BUTTON TEXT</button>
                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner