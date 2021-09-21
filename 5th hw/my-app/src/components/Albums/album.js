import { Component } from "react";

class Albums extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            count: 0
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render () {
        const {error, isLoaded, items} = this.state;
        if (error){return <p> Error {error.message} </p>}
        else if (!isLoaded) {return <p> Loading </p>}
        else {
            return (
                <>
                    <h1>Albums</h1>
                    <div>
                        <ul>
                            {items.map(item => (
                                <li className='list' key={item.id}>
                                    {item.userId} <h1 className='title'>{item.title}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        }
    }
}

export default Albums;