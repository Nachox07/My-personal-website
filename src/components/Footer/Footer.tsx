import * as React from 'react';

import './Footer.css';

export default class Footer extends React.Component<{}, {}> {

    public dt: Date;

    constructor() {
        super();
        this.dt = new Date();
    }

  render() {
    return (
      <footer>
            <div id="dark-layer">
                <div>Nacho González-Garilleti © {this.dt.getFullYear()}</div>
            </div>
        </footer>
    );
  }
}