import React, {Component} from 'react';

class TickClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount = () => {
        this.timerID = setInterval(
            () => this.updateTime(), 
            3000
        );
    }
    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }
    updateTime = () => {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return(
            <div>
                <p>Current time is : {this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default TickClock