import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedNumber = ({ number, formatNumber }) => {
    const { value } = useSpring({
        from: { value: 0 },
        value: number,
        delay: 200,
        config: { duration: 1000 }
    });

    return (
        <animated.span>
            {value.to(val => formatNumber ? formatNumber(Math.floor(val)) : Math.floor(val))}
        </animated.span>
    );
};

export default AnimatedNumber;