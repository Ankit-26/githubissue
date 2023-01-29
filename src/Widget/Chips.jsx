import React from 'react';
import "./chip.css";

function Chips({ color, name }) {
    const chpStyle = {
        backgroundColor: `#${color}`,
        padding: "5px"
    }

    return (
        <div className='chip' style={chpStyle}>
            <div>{name}</div>
        </div>
    )
}

export default Chips