import React from 'react'
import SplitText from "./Animation";




function Home() {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='text-center'>
                        <h1>
                            <SplitText
                                text="Welcome to front-End developer"
                                className="text-2xl font-semibold text-center"
                                delay={100}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            // onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </h1>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
