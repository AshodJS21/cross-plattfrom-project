import React from 'react';
import './App.css';
import  './index.css';



import Header from './views/Header'
import Clock from './views/Clock'
import Weather from './views/Weather'
import NewsList from './views/NewsList';

//console.log(process.env)

function App() {

  return (
    <div className="App"> 
    <div className="header-page" >
      <Header />
    </div>
    < div className="dashboard-page">
      <Clock />
      <Weather />
      <NewsList />
    </div>
  </div>
  );
}


export default App;