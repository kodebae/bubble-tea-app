import React from "react";

const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img src={props.id} /> */}
                <div>
                   <h2>{props.flavor}</h2> 
                   <p>{props.tea}</p>
                   <p>{props.milk}</p>
                   <p>{props.topping}</p>
                </div>

        </div>

    )
}

export default Card;