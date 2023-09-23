// import logo from './logo.svg';
import TreeSample from './TreeSample.png';
import './App.css';
import { useState } from 'react';

function App() {
  let [letters, show_num_letters] = useState('0')
  let [d_day, change_dday] = useState('30')

  

  return (
    <div className="App">
      <div>
        <h1>Color My Tree</h1>
        <h2>Send your love to your friend</h2>
      </div>
      <div className='ImageContainer'>
        <img src={TreeSample} alt="first page tree" width={400} />
        <p>D-{d_day} until Christmas</p>
        <button onClick={google_login} style={{fontSize:20}}>Continue with google account</button>
      </div>
    </div>
  );
}

function google_login(){
  console.log(1)
}

export default App;
