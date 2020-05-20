import React, { Component } from 'react';

import Stopwatch from './Components/Stopwatch';
import Countdown from './Components/Countdown';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-title'>Timer 1</div>
        <div className='Timers'>
          <Stopwatch />
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;