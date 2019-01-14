import * as React from 'react';
import './App.css';

// Components
import Nav from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Footer from './components/Footer/Footer';

interface StateType {
  projects: Array<ProjectI>;
  NavH: number;
  ProjectsH: number;
  SocialMediaH: number;
  KnowledgeH: number;
}

class App extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      projects: [],
      NavH: 0,
      ProjectsH: 0,
      SocialMediaH: 0,
      KnowledgeH: 0
    };
  }

  getProjects(): void {
      const BASE_URL: string = 'http://garilleti.me';
      const FETCH_URL: string = `${BASE_URL}/projects`;

      fetch(FETCH_URL, {
          method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
          const { data } = json;
          this.setState({projects: data});
        });
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {

    return (
      <div className="App">
        <Nav />
        <Main />
        <Projects
          projects={this.state.projects}
        />
        <SocialMedia />
        <Footer />
      </div>
    );
  }
}

export default App;
