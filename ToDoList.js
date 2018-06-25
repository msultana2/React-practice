import React, {Component} from 'react';

const RenderForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type='text' value={props.value} onChange={props.handleChange} />
        <input type='submit' value='Submit' />
    </form>    
);
const DisplayList = (props) => (
    <ul>
        {
            props.itemList.map((item, index) =>
            <li key={index} style={{ listStyle:'none' }}> {item} </li>
            )
        }
    </ul>
);

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: 'Enter ToDo item',
            itemList: []
        };
    }
    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }
    handleSubmit = (event) => {
        this.setState({
            item: '',
            itemList: [...this.state.itemList, this.state.item]
        });
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <RenderForm
                    value={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <DisplayList itemList={this.state.itemList} />
            </div>
        );
    }
}

export default ToDoList