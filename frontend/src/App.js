import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

function ListeTache() {
    const baseURL = "http://127.0.0.1:8000/api/home";

    const [tasksTest, setTasksTest] = React.useState([]);

    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setTasksTest(response.data);
        });
    }, []);


    const listeTaches = tasksTest.map(uneTache =>
      <tr key = {uneTache.id}>
        <th>{uneTache.intitule}</th>
        {uneTache.complete === true ? (
            <th style={{background:"green"}} >{uneTache.complete}</th>
        ) : (
            <th style={{background:"red"}} >{uneTache.complete}</th>
          )}
      </tr>
  );

  return(
      <table>
        <thead>
          <tr>
            <th>Intitulé</th>
            <th>Fait</th>
          </tr>
        </thead>
        <tbody>
          {listeTaches}
        </tbody>
      </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <ListeTache />
      </header>
    </div>
  );
}




export default App;
