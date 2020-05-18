import React, { useReducer } from 'react';
import LanguagePicker from "./LanguagePicker";
import {Menu} from "./Menu";
import logo from './logo.svg';
import './App.css';

export const AppContext = React.createContext({});

const App = () => {
  let initialState = { lang: 'en', color: 'blue'};

  let reducer = (state, action) => {
    switch (action.type) {
      case "change-language":
        return { ...state, lang: action.payload };
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
      <div className="App">
         <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <p>
                 Edit <code>src/App.js</code> and save to reload.
             </p>
             {/*<a*/}
             {/*    className="App-link"*/}
             {/*    href="https://reactjs.org"*/}
             {/*    target="_blank"*/}
             {/*    rel="noopener noreferrer"*/}
             {/*>*/}
                 <AppContext.Provider value={value}>
                     <LanguagePicker />
                     <Menu />
                 </AppContext.Provider>
             {/*</a>*/}
         </header>
      </div>
  );
}

export default App;