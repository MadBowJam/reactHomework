import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="global">
                <div className="inner">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;