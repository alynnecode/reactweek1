import React, {Component} from "react";
import './Navbar.css'

class Form extends Component {

    constructor(props) {
        super(props)
            this.state = {

                username:'',
                comments:''


            
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    render() {
        return (

<form>

<div>
    <h3>Log In</h3>
</div>

    <div>

        <label>Username</label>
        <input type='text' 
        value={this.state.username} onChange={this.handleUsernameChange}/>

    </div>
    <div>
<label>Password</label>
<input type='text'
value={this.state.comments} onChange={this.handleCommentsChange}/>

    </div>
</form>
        )
    }
}

export default Form