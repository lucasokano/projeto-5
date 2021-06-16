import { useState } from 'react';
import Button from '../Button';
import Display from '../Display';
import './index.css';

function Calculadora() {
  const [tela, setTela] = useState('')
  
  const A = function(a){
    setTela(a)
  }


  return (
    <div className="calculadora">
        <Display value={tela}/>
        <Button label="AC" triple fpai={A}/>
        <Button label="/" operation fpai={A}/>
        <Button label="7" fpai={A}/>
        <Button label="8" fpai={A}/>
        <Button label="9" fpai={A}/>
        <Button label="*" operation fpai={A}/>
        <Button label="4" fpai={A}/>
        <Button label="5" fpai={A}/>
        <Button label="6" fpai={A}/>
        <Button label="-" operation fpai={A}/>
        <Button label="1" fpai={A}/>
        <Button label="2" fpai={A}/>
        <Button label="3" fpai={A}/>
        <Button label="+" operation fpai={A}/>
        <Button label="0" fpai={A}/>
        <Button label="." fpai={A}/>
        <Button label="=" double fpai={A}/>
    </div>
  );
}

export default Calculadora
