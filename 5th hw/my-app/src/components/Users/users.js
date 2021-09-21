import { Component } from "react";

class User extends Component {
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
        fetch("https://jsonplaceholder.typicode.com/users")
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
        if (error) {return <p> Error {error.message} </p>}
        else if (!isLoaded) {return <p> Loading </p>}
        else {
            return (
                <>
                    <h1>User</h1>
                    <div className="container">
                        <ul>
                            {items.map(item => (
                                <li className={"user_item"} key={item.id}>
                                    <div>Name: {item.name} {item.username}</div>
                                    <div>email: {item.email}</div>
                                    <div>phonephone: {item.phone}</div>
                                    <div>website: {item.website}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        }
    }
}

export default User;