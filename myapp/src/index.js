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
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(a){
        let out = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(a.toLowerCase()) > -1
        })

        this.setState({filtered: out})
    }

    render(){
        return(
            <div>
                <Header userInput={(b) => this.filterNews(b)}/>
                <NewsList newsdata={this.state.filtered}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))
