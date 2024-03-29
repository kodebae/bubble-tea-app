import React from "react";
import '../card.css';

const Card = (props) => {
    return (
        <div className='tc w-30 bg-lightest-blue dib br3 pa2 ma3 grow bw1 shadow-5'>
                <div className="card-cont">
                   <img className="w-30" src={props.img} />
                   <h2>{props.flavor}</h2> 
                   <h4>{props.tea}</h4>
                   <h4>{props.milk}</h4>
                   <h4>{props.topping}</h4>
                </div>

        </div>

    )
}

export default Card;