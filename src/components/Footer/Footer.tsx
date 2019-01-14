import * as React from 'react';
import './Footer.css';

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <footer>
            <div id="dark-layer">
                <div>Nacho González-Garilleti © {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
  }
}