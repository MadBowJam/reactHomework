import {Component} from "react";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

class SelectedLanguage extends Component {
    render() {
        return (
            <div>
                <ul className='languages'>
                    {languages.map((language, index) =>
                        <li 
                            key={index}
                            style={{color: language === this.props.selectedLanguage ? '#d0021b' : '#000000', pointerEvents: this.props.repos ? 'auto' : 'none'}}
                            onClick={this.props.selectLanguage}>
                            {language}
                        </li>)}
                </ul>
            </div>
        )
    }

}

export default SelectedLanguage;