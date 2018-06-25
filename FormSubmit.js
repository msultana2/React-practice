import React, {Component} from 'react';

const RenderForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <label>Name: </label>
        <input type='text' value={props.name} onChange={props.handleChange} />
        <input type='submit' value='Submit' />
    </form>
);
class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Arju'
        };
    }
    handleChange = (event) => {
        this.setState ({
            name: event.target.value
        });
    }
    handleSubmit = (event) => {
        alert('A name has been submitted : ' + this.state.name); 
        event.preventdefault();   
    }
    render() {
        return (
            <RenderForm
                name={this.state.name}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default FormSubmit;