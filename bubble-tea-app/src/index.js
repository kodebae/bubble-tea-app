import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Components/Card';
import 'tachyons';
import { teas } from './bubble-tea';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={teas[0].id} flavor={teas[0].flavor} tea={teas[0].tea} milk={teas[0].milk} topping={teas[0].topping}/>
    <Card id={teas[1].id} flavor={teas[1].flavor} tea={teas[1].tea} milk={teas[1].milk} topping={teas[1].topping}/>
    <Card id={teas[2].id} flavor={teas[2].flavor} tea={teas[2].tea} milk={teas[2].milk} topping={teas[2].topping}/>

  </React.StrictMode>
);


