import React from 'react';

const Slider = (props) => {
    return (
        <div>
            {props.slides.map((slide, i) => {
                return (
                    <h1 key={i}>{slide.title}</h1>
                )
            })}
        </div>
    )
}

export default Slider;
