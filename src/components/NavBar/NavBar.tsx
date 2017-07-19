import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './NavBar.css';

//Components

import Nav from '../NavBar/NavBar';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import SocialMedia from '../SocialMedia/SocialMedia';
import Knowledge from '../Knowledge/Knowledge';
import Footer from '../Footer/Footer';

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
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event: Event) {
    // const scrollTop = document.body.scrollTop;

    let node = ReactDOM.findDOMNode(this.refs['Main']);
    if (node){
      let calculatedHeight = node.clientHeight;
      console.log(calculatedHeight);
    }
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