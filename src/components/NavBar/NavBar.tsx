import * as React from 'react';
import './NavBar.css';

// Components

/* import Nav from '../NavBar/NavBar';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import SocialMedia from '../SocialMedia/SocialMedia';
import Knowledge from '../Knowledge/Knowledge';
import Footer from '../Footer/Footer';*/

const scrollToElement = require('scroll-to-element');

class NavItem {
  constructor(
    public id: string,
    public name: string
  ) {}
}

export default class NavBar extends React.Component<{}, MainProps> {

  public navItems: Array<NavItem>;
  
  constructor() {
    super();
    this.navItems = [
      new NavItem('me', 'Presentación'),
      new NavItem('projects', 'Proyectos'),
      new NavItem('social-media', 'Redes Sociales'),
      new NavItem('knowledge', 'Conocimientos')
    ];

    this.state = {
      active: 'me',
      hover: ''
    };
  }

  scrollElement(elementId: string) {

    scrollToElement(
                  elementId, {
                  offset: 0, 
                  ease: 'linear', 
                  duration: 500
                }); 

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));   
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(event: Event) {

    let scrollTop: number = document.body.scrollTop;

    let meHeight: number = document.getElementById('me')!.clientHeight;
    let projectsHeight: number = document.getElementById('projects')!.clientHeight + meHeight;
    let socialMediaHeight: number = document.getElementById('social-media')!.clientHeight + projectsHeight;
    let knowledgeHeight: number = document.getElementById('knowledge')!.clientHeight + socialMediaHeight;

    if (scrollTop < meHeight) {
      this.setState({active: 'me'});
    } else if (scrollTop < projectsHeight) {
      this.setState({active: 'projects'});
    } else if (scrollTop < socialMediaHeight) {
      this.setState({active: 'social-media'});
    } else if (scrollTop < knowledgeHeight) {
      this.setState({active: 'knowledge'});
    }

    console.log(this.state.active);

  }

  render() {
    return (
      <nav id="sections-points">
      <ul>
        {
          this.navItems.map((item, key) => {
            return (
              <li key={key}>
                <a 
                  className={
                    (this.state.active === item.id
                    ? 'actv'
                    : 'no-actv')
                  }
                  href="javascript:void(0)" 
                  title={item.name}
                  onClick={() => {
                    scrollToElement(`#${item.id}`);
                    this.setState({active: item.id});
                  }}
                  onMouseOver={() => this.setState({hover: item.id})}
                  onMouseLeave={() => this.setState({hover: ''})}
                >
                {
                  (this.state.hover === item.id)
                  ? <div className="des-sect">{item.name}</div>
                  : <div style={{display: 'none'}} />
                }
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
    );
  }
}