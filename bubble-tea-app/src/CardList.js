import React from 'react';
import Card from '../src/Components/Card.js'
import { teas } from './bubble-tea';

const CardList = () => {
    return (
    <div>
        {
            teas.map((user, i) => {
                return (
                    <Card 
                    key={i} 
                    id={teas[i].id} 
                    img={teas[i].img} 
                    flavor={teas[i].flavor} 
                    tea={teas[i].tea} 
                    milk={teas[i].milk} 
                    topping={teas[i].topping}
                    />
                    );

        })
    }
    </div>
    );
}
 export default CardList; 