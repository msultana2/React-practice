import React, {Component} from 'react';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }
    handleChecked = () => {
        this.setState ({
            checked: !(this.state.checked)
        });
    }
    render () {
        let msg;
        if(this.state.checked) {
            msg = 'checked';
        }
        else {
            msg = 'Not checked';
        }
        return (
            <div>
                <input type='checkbox' defaultChecked={this.state.checked} onChange={this.handleChecked} />
                {/* <h3>This is : {msg}</h3> */}
                {this.state.checked ? 'Checked' : 'Not Checked'}
            </div>
        );
    }
}

export default CheckBox