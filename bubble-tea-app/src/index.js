import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Components/Card';
import 'tachyons';
import { teas } from './bubble-tea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Card id={teas[0].id} img={teas[0].img} flavor={teas[0].flavor} tea={teas[0].tea} milk={teas[0].milk} topping={teas[0].topping}/>
    <Card id={teas[1].id} img={teas[1].img} flavor={teas[1].flavor} tea={teas[1].tea} milk={teas[1].milk} topping={teas[1].topping}/>
    <Card id={teas[2].id} img={teas[2].img} flavor={teas[2].flavor} tea={teas[2].tea} milk={teas[2].milk} topping={teas[2].topping}/>
    <Card id={teas[3].id} img={teas[3].img} flavor={teas[3].flavor} tea={teas[3].tea} milk={teas[3].milk} topping={teas[3].topping}/>
    <Card id={teas[4].id} img={teas[4].img} flavor={teas[4].flavor} tea={teas[4].tea} milk={teas[4].milk} topping={teas[4].topping}/>
    <Card id={teas[5].id} img={teas[5].img} flavor={teas[5].flavor} tea={teas[5].tea} milk={teas[5].milk} topping={teas[5].topping}/>
    <Card id={teas[6].id} img={teas[6].img} flavor={teas[6].flavor} tea={teas[6].tea} milk={teas[6].milk} topping={teas[6].topping}/>
    <Card id={teas[7].id} img={teas[7].img} flavor={teas[7].flavor} tea={teas[7].tea} milk={teas[7].milk} topping={teas[7].topping}/>
    <Card id={teas[8].id} img={teas[8].img} flavor={teas[8].flavor} tea={teas[8].tea} milk={teas[8].milk} topping={teas[8].topping}/>
    <Card id={teas[9].id} img={teas[9].img} flavor={teas[9].flavor} tea={teas[9].tea} milk={teas[9].milk} topping={teas[9].topping}/>

  </React.StrictMode>
);


