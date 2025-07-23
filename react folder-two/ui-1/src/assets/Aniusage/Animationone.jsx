import React from 'react'
import GradientText from '../Animation/Animationone'


function Animationone() {
    return (
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-class"
        >
            "I'm a front-end developer specializing in translating designs into interactive and engaging websites"
        </GradientText>
    )
}

export default Animationone
