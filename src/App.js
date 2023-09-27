import { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(()=>{
  // setTimeout(axios.get('https://restoraunt.wuaze.com/?for=event').then(r=>console.log(r.data)), 10000)
  // // console.log('fghghgvhvjhv')
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://restoraunt.wuaze.com/')
  xhr.send()
  }
  , [])

  return (
    <div className="App">
      фывапрол
    </div>
  );
}

export default App;
