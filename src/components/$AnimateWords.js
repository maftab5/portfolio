import React from "react";
import {Animate, useAnimateGroup, AnimateGroup} from "react-simple-animate/dist/index.es";

const AnimateWord = () => {

    const items = ['R', 'E', 'A', 'C', 'T'];
    const { styles, play } = useAnimateGroup({
        sequences: items.map(() => ({
            start: { opacity: 1, transform: 'translateY(0)' },
            end: { opacity: 0, transform: 'translateY(-10px)' }
        }))
    })


    return(
        <>
            { items.map((item, index) => <div key={item} style={styles[index]}>{item}</div>)}

            </>
    )
}

export default AnimateWord