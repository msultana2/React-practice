import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    Increment = (value) => {
        this.setState({
            count: this.state.count + value
        });
    }
    Decrement = (value) => {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - value
            });
        }
        else {
            this.setState({
                count: 0
            }); 
        }
    }
    render() {
        return (
            <div>
                <p>Counter : {this.state.count}</p>
                <button onClick={() => this.Increment(5)}>IncrementBy 5</button>
                <button onClick={() => this.Increment(10)}>IncrementBy 10</button><br/>
                <button onClick={() => this.Decrement(5)}>DecrementBy 5</button>
                <button onClick={() => this.Decrement(10)}>DecrementBy 10</button>
            </div>
        );
    }
}

export default Counter