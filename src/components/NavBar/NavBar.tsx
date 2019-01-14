import * as React from 'react';
import './NavBar.css';

const scrollToElement = require('scroll-to-element');

type StateType = {
  active: string;
  hover: string;
};

class NavItem {
  constructor(
    public id: string,
    public name: string
  ) {}
}

export default class NavBar extends React.Component<{}, StateType> {

  public navItems: Array<NavItem>;

  constructor() {
    super();

    this.navItems = [
      new NavItem('me', 'Presentation'),
      new NavItem('projects', 'Projects'),
      new NavItem('social-media', 'Social networking'),
    ];

    this.state = {
      active: 'me',
      hover: ''
    };
  }

  scrollElement(elementId: string) {

    this.setState({active: elementId, hover: ''});
    scrollToElement(`#${elementId}`, {
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
    const scrollTop: number = window.scrollY;

    const meHeight: number = document.getElementById('me')!.clientHeight;
    const projectsHeight: number = document.getElementById('projects')!.clientHeight + meHeight - 1;
    const socialMediaHeight: number = document.getElementById('social-media')!.clientHeight + projectsHeight - 1;

    let activeElement: string = 'me';

    if (scrollTop < meHeight) {
      activeElement = 'me';
    } else if (scrollTop < projectsHeight) {
      activeElement = 'projects';
    } else if (scrollTop < socialMediaHeight) {
      activeElement = 'social-media';
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