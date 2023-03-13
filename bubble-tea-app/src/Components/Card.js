import React from "react";

const Card = (props) => {
    return (
        <div className='tc w-30 bg-lightest-blue dib br3 pa2 ma3 grow bw1 shadow-5'>
                <div>
                   <img className="w-30" src={props.img} />
                   <h2>{props.flavor}</h2> 
                   <p>{props.tea}</p>
                   <p>{props.milk}</p>
                   <p>{props.topping}</p>
                </div>

        </div>

    )
}

export default Card;