import { useState } from 'react';
import Button from '../Button';
import './index.css';

function Calculadora() {
  const [count, setcount] = useState(0)

  return (
    <div className="calculadora">
        <h1>Aqui está o valor que você clicou</h1>
        <p>{count}</p>
        <button onClick={()=>{setcount(1)}}>1</button>
        <button onClick={()=>{setcount(2)}}>2</button>
        <button onClick={()=>{setcount(3)}}>3</button>
        <Button label="oi" />
    </div>
  );
}

export default Calculadora
