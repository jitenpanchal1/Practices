import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from '../navigate/Header';
import { Outlet } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router';
import { motion } from 'motion/react';

const gradientAnimation = {
    animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
        }
    }
};

function Routlayout() {

    const location = useLocation()

    return (
        <motion.div
            className="absolute top-0 left-0 w-full h-full -z-10"
            style={{
                background: 'linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80)',
                backgroundSize: '600% 600%'
            }}
            variants={gradientAnimation}
            animate="animate">

            <div className='container'>
                <Header />
                <AnimatePresence mode='wait'>
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Routlayout
