import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { mantras } from './reducer'
import MantraForm from './Containers/MontraFormContainer';
import MantraList from './Containers/MontraListContainer';
import { Provider } from 'react-redux'
const store = createStore(mantras)




function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <MantraForm />
        <MantraList />
      </Provider>

    </div>
  );
}

export default App;
