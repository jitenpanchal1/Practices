import { useState } from 'react'
import Animationone from './assets/Aniusage/Animationone'
import Hyperspeedusage from './assets/Aniusage/Hyperspeedusage'

function App() {


  return (
    <>
      <div className='bg-dark'>
        <div>
          <Hyperspeedusage />
          <div className='col-8 text-center mx-auto pt-5'>
            <h1 className='pt-5 fs-3 mt-5'>
              <Animationone />
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
