import React from "react";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="global">
                <div className="inner">
                    <div className="header center">
                        <ul className="navigation">
                            <li><a href=".">Header1</a></li>
                            <li><a href=".">Header2</a></li>
                            <li><a href=".">header3</a></li>
                        </ul>
                    </div>

                    <div className="mainContent center">
                        <p>Place for something interesting, but my lack of imagination is making itself felt.</p>
                    </div>

                    <div className="footer center">
                        <ul className="navigation">
                            <li><a href=".">Footer1</a></li>
                            <li><a href=".">Footer2</a></li>
                            <li><a href=".">Footer3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;