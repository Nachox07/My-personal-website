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

    this.setState({active: elementId, hover: ''});
    scrollToElement(
                  `#${elementId}`, {
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

  handleScroll(event: EventScroll) {

    let scrollTop: number = window.scrollY;

    let meHeight: number = document.getElementById('me')!.clientHeight;
    let projectsHeight: number = document.getElementById('projects')!.clientHeight + meHeight - 1;
    let socialMediaHeight: number = document.getElementById('social-media')!.clientHeight + projectsHeight - 1;
    let knowledgeHeight: number = document.getElementById('knowledge')!.clientHeight + socialMediaHeight - 1;

    let activeElement: string = 'me';

    if (scrollTop < meHeight) {
      activeElement = 'me';
    } else if (scrollTop < projectsHeight) {
      activeElement = 'projects';
    } else if (scrollTop < socialMediaHeight) {
      activeElement = 'social-media';
    } else if (scrollTop < knowledgeHeight) {
      activeElement = 'knowledge';
    }
    
    this.setState({active: activeElement});

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
                  onClick={() => this.scrollElement(item.id)}
                  onMouseOver={() => this.setState({hover: item.id})}
                  onMouseLeave={() => this.setState({hover: ''})}
                  onTouchEnd={() => this.scrollElement(item.id)}
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