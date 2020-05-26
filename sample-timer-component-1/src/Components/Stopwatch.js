import React from 'react';
import '../App.css';

const Stopwatch =  () => {
    const state = {
        timerOn:false,
        timerStart: 0, 
        timerTime: 0
    };

   
}

export default Stopwatch;

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
            timerTime: state.timerTime,
            timerStart: Date.now() - state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - state.timerStart
            });
        }, 10) ;
    };

    // in the stopTimer method, we set timerOn to false and clear the interval on this.timer

    const stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    //in the resetTimer method, we set the timerStart and timerTime back to 0.

    const resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    
    const { timerTime } = state;
    // Defining units of time and formatting the times to display as 2 digits by concatenating a '0' on the front then slicing off the end if it is more than 2 digits long
    let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor(timerTime / 10000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + (Math.floor(timerTime / 3600000))).slice(-2);

    return (
        <div className='Stopwatch'>
            <div className='Stopwatch-header'>Stopwatch</div>
            <div className='Stopwatch-display'>
                {hours} : {minutes} : {seconds} : {centiseconds}
            </div>

            {this.state.timerOn === false && this.state.timerTime === 0 && (
                <button onClick={this.startTimer}>Start</button>
            )}
            {this.state.timerOn === true && (
                <button onClick={this.stopTimer}>Stop</button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
                <button onClick={this.resetTimer}>Reset</button>
            )}
        </div>
    );