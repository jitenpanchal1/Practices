import React from 'react'
import { motion } from 'motion/react';

const slide = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
};

function Home() {
    return (
        <motion.div
            className="page"
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.3, ease: 'easeInOut' }}
            style={{ height: '100vh' }}
        >
            <h1>Home Page</h1>
            <p>This page slides in from right to left!</p>
        </motion.div>
    )
}

export default Home
