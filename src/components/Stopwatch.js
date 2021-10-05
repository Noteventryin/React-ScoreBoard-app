import React, {Component} from "react";

class Stopwatch extends Component {
    
    state={
        isRunning: false,
        elapsdTime: 0,
        previousTIme: 0
    };
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    
    tick =() => {
        if(this.state.isRunning){
          const now = Date.now();
          this.setState( prevState =>({
            previousTIme: now,
            elapsdTime: prevState.elapsdTime + (now - this.state.previousTIme)
          }));
        }
    }

    handleStopwatch =() =>{
        this.setState( prevState =>({
          isRunning: !prevState.isRunning
        }));
        if(!this.state.isRunning){
          this.setState({ previousTIme: Date.now() });
        }
    }

    handleReset = () => {
        this.setState({ elapsdTime: 0 });
    }
    //Won't update the isRunning state here.
    //for keeping the reset logic independent of the start and stop logic.

    render() {
        const seconds = Math.floor(this.state.elapsdTime / 1000);
        
        return(
          <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{ seconds }</span>
            <button onClick={this.handleStopwatch}>
              { this.state.isRunning ? 'Stop' : 'Start' }
            </button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        );
    }
}

export default Stopwatch;

