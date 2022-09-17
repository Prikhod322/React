import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const[data,setdata]=React.useState(null);
  React.useEffect(()=>{
    fetch('products')
    .then((data)=>{
      setdata(data.data);
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        {!data?"Loading...":JSON.parse(data).map((object,i)=><p>{object.name + " - " +object._id}</p>)}
      </header>
    </div>
  );
}

export default App;
