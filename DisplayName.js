import React, {Component} from 'react';

const InputName = (props) => (
    <div>
        <label>Name : </label>
        <input type='text' value={props.value} onChange={props.handleChange} />
    </div> 
);
const ShowName = (props) => (
    <p>{props.name}</p>
);
class DisplayName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Arju'
        };
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    render() {
        return (
            <div>
                <InputName 
                    value={this.state.name} 
                    handleChange={this.handleChange} 
                />
                <ShowName name={this.state.name} />
            </div>
        );
    }
}

export default DisplayName;