import Button from '../Button';
import Display from '../Display';
import './index.css';

function Calculadora() {
  
  return (
    <div className="calculadora">
        <Display value={100}/>
        <Button label="AC" triple />
        <Button label="/" operation/>
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" operation/>
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" operation/>
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" operation/>
        <Button label="0" />
        <Button label="." />
        <Button label="=" double/>
    </div>
  );
}

export default Calculadora
