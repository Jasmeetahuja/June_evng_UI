import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

//JSX
const App = () => {
    return(
        <div>
            <Header/>
            <h1>Welcome to React App</h1>
            <h1>This is Apex class</h1>
            <div>This is inner div</div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
