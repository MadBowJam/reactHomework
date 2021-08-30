import React from 'react';
import PostItem from './PostItem.js';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id){
        this.setState({items : this.state.items.filter(item=>item.id!==id)})
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
            .then(result => result.json())
            .then((result) => {this.setState({items: result});});
    }

    render() {
        const {items} = this.state;
        return (<div>{items.map(item => <PostItem title={item.title} body={item.body} id={item.id} delete={this.deleteItem} key={item.id}/>)}</div>);
    }
}

export default Posts;