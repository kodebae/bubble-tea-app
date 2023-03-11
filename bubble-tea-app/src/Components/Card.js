import React from "react";

const Card = (props) => {
    return (
        <div className='tc w-30 bg-light-blue dib br3 pa2 ma2 grow bw1 shadow-5'>
                <div>
                   <img class="w-40" src={props.img} />
                   <h2>{props.flavor}</h2> 
                   <p>{props.tea}</p>
                   <p>{props.milk}</p>
                   <p>{props.topping}</p>
                </div>

        </div>

    )
}

export default Card;