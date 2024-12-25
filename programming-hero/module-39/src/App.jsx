import './App.css'
import Counter from './Counter';
import User from './User';

function App() {

  const handleClick = ()=>{
    alert('Btn Clicked');
  }

  function handleClick2 (num){
    alert(num + 3);
  }

  return (
    <>
      <h1>Core React</h1>

      <User></User>

      <Counter></Counter>
      <br /><br />

      <button onClick={handleClick}>Button-1</button>
      <br /><br />

      <button onClick={()=>{alert('Btn-2 Clicked')}}>Button-2</button>
      <br /><br />

      <button onClick={()=> handleClick2(5)}>Button-3</button>
    </>
  )
}

export default App
