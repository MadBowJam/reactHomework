import React from "react";

class header extends React.Component {
    render() {
        return (
            <div className="header center">
                <ul className="navigation">
                    <li><a href=".">Header1</a></li>
                    <li><a href=".">Header2</a></li>
                    <li><a href=".">header3</a></li>
                </ul>
            </div>
        )
    }
}

export default header;