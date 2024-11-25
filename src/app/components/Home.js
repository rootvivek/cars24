import React from 'react';
import Image from 'next/image';
import test from '../assets/test.avif'


const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col pt-5 ps-5'>
           <h1>LEGO Design System</h1>
          <h5 className='pt-1'>Vercel design system for building consistent web experiences.</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col d-flex flex-wrap'>
          <div className='col-6'>
            <h1>hello</h1>
          </div>
          <div className='col-6'>
            <h1>hello</h1>
          </div>
          <div className='col-6'>
            <h1>hello</h1>
          </div>
          <div className='col-6'>
            <h1>hello</h1>
          </div>
      </div>
          {/* <Image
              src={test}
              // width="auto"
              height={500}
              alt="Picture of the author"
            /> */}
     </div>
    </div>
  )
}

export default Home;
