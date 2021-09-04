import {Component} from "react";
import {fetchPopularRepos} from "./fetchPopularRepos";
import RepoGrid from "./RepoGrid";
import SelectedLanguage from "./SelectedLanguage";
import './App.css';

class App extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null,
        work: 'auto'
    }

    componentDidMount() {
        fetchPopularRepos(this.state.selectedLanguage)
            .then(data => this.setState({repos: data}));
    }

    selectLanguage = (event) => {
        this.setState({ repos: null });
        fetchPopularRepos(event.target.innerText)
            .then(data => this.setState({repos: data}));
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        return (
            <div>
              <SelectedLanguage selectedLanguage={this.state.selectedLanguage} selectLanguage = {this.selectLanguage} repos={this.state.repos} />
              {this.state.repos ?
                  <RepoGrid repos={this.state.repos} /> :
                  <p className='loading'>Loading, please wait</p>}
            </div>
        )
    }
}

export default App;