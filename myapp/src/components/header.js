import React,{ Component } from 'react';
import './header.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React App',
            userInput: 'User Search'
        }
    }

    inputChange(e){
        console.log(e.target.value)
        this.setState({userInput:e.target.value? e.target.value: 'User Search'})
        this.props.userInput(e.target.value)
    }

    render() {
        
        return(
            <div>
            <header>
                <div className="logo"
                 onClick={() => {console.log('clicked')}}>
                    {this.state.title}
                    </div>
                    <hr/>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.userInput}</p>
                </center>
                <hr/>
            </header>
            </div>
        )
    }
}

export default Header;