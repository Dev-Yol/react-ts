import React, { useState } from "react";


const AppHover = () => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true);
    };
    const onMouseleave = () => {
        setHover(false);
    }
    return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseleave}></div>

}


export default AppHover;