import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import JSON from './db.json';

import NewsList from './components/news_list';

//JSX

class App extends Component {

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList newsdata={this.state.news}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))
