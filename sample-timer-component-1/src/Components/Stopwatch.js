import React from 'react';
import '../App.css';

const Stopwatch =  () => {
    const state = {
        timerOn:false,
        timerStart: 0, 
        timerTime: 0
    };

    // in the startTimer method, setState is used to turn the timer on, set the timer to represent the current time, and initialize the start time. Subtracting this.state.timerTime from Date.now() will set start time to either when the timer was started, or what that time would have been if the timer is resumed.
    
    // next we initialize a timer interval with this.timer to set the timer interval to the Stopwatch component to return a method to call every time it goes off, and an interval time. In the return we call this.setState to adjust timerTime to the number of miliseconds since timerStart

    const startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10) ;
    };

    // in the stopTimer method, we set timerOn to false and clear the interval on this.timer

    const stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    //in the resetTimer method, we set the timerStart and timerTime back to 0.

    return (
        <div className='Stopwatch'>
            <div className='Stopwatch-header'>Stopwatch</div>
        </div>
    );
}

export default Stopwatch;