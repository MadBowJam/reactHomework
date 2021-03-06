import {Component} from "react";
import {Link} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

class Battle extends Component {
    state = {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    }

    submitHandler = (id, username) => {
        this.setState({
            [id + 'Name']: username,
            [id + 'Image']: 'https://github.com/' + username + '.png?size=200',
        })
    }

    handleReset = (id) => {
        this.setState({
            [id + 'Name']: '',
            [id + 'Image']: null,
        })
    }

    render() {
        const {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
        return (
            <div>
                <div className='row'>
                    {!playerOneName ?
                        <PlayerInput
                            id='playerOne'
                            label='Player One'
                            onSubmit={this.submitHandler}
                        /> :
                        <PlayerPreview 
                            avatar={playerOneImage}
                            username={playerOneName}
                        >
                            <button className='reset' onClick={() => this.handleReset('playerOne')}>Reset</button>
                        </PlayerPreview>
                    }
                    {!playerTwoName ?
                        <PlayerInput
                            id='playerTwo'
                            label='Player Two'
                            onSubmit={this.submitHandler}
                        /> :
                        <PlayerPreview
                            avatar={playerTwoImage}
                            username={playerTwoName}
                        >
                            <button className='reset' onClick={() => this.handleReset('playerTwo')}>Reset</button>
                        </PlayerPreview>
                    }
                </div>
                {playerOneImage && playerTwoImage &&
                    <Link className='button' to='/battle/results'>Battle</Link>
                }
            </div>
        )
    }
}

export default Battle;
