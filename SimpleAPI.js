import React, {Component} from 'react';

class SimpleAPI extends Component {
    constructor(props) {
        super(props);
        this.state={
            term: '',
            img: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const api_key = 'dc6zaTOxFJmzC';
        const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    term: '',
                    img: data.data[1].images.fixed_height.url
                })
            })
            .catch(e => console.log('error', e));
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.term} onChange={this.handleChange} />
                    <button>Search!</button>
                </form>
                <img src={this.state.img} height="200" alt={this.state.term} />
            </div>
        );
    }
}

export default SimpleAPI