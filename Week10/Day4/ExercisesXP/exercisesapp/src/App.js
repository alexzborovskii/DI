import './App.css';
import React from "react"
import BuggyCounterF from './components/BuggyCounterF';
import BuggyCounter from './components/BuggyCounter';
import ErrorBound from './components/ErrorBoundary ';
import Color from './components/Color';


function App() {


  return (
    <div className="App">
      {/* <BuggyCounterF/> */}
      <ErrorBound>
        <BuggyCounter/>
        <BuggyCounter/>
      </ErrorBound>
      <ErrorBound>
        <BuggyCounter/>
      </ErrorBound>
      <Color />

    </div>
  );
}

export default App;
