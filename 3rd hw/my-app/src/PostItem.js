import React from 'react';

export class PostItem extends React.Component {
    render() {
        let data = this.props;
        return (
            <div id={data.id} className='inner'>
                <h3 id={"title"+data.id} className='title'>{data.title}</h3>
                <button onClick={() => {document.getElementById("title"+data.id).textContent = prompt('Change title. (Main title will be shown here by default)',data.title);}}>Edit</button>
                <div>{data.body}</div>
                <button onClick={() => data.delete(data.id)} className='delete'>Delete</button>
            </div>
        );
    };
}

export default PostItem