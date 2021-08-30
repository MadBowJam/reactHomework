import React from 'react';
import Posts from './Posts.js';
import './App.css';

class App extends React.Component{
    render(){
        return(
        <div className='wrapper'>
            <Posts/>
        </div>
        )
    }
}

export default App;
