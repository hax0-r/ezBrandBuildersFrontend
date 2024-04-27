import React from 'react'

import { motion, useScroll } from 'framer-motion'


const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    zIndex: 9,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 6,
                    background: "#5f29b7",
                    transformOrigin: "0%"
                }}
            >
            </motion.div>
        </>
    )
}

export default ScrollProgress