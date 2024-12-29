import { useEffect, useState } from 'react';
import './App.css'
import Watch from '../component/Watch'
import Sunglass from '../component/sunglass';
import Header from '../project/header/Header';
import Body from '../project/Body/Body';

function App() {

  // const [watch, setWatch] = useState([]);
  //   useEffect(()=>{
  //       fetch('watches.json')
  //       .then(res => res.json())
  //       .then(data => setWatch(data));
  //   }, [])


  
     
  return (
    <div>
      {/* <Sunglass></Sunglass>
      {watch.map(data => <Watch key={data.id} watch={data}></Watch>)} */}

      <Header></Header>
      <Body></Body>

    </div>
  )
}

export default App
