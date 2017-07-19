import * as React from 'react';
import './Project.css';

export default class Project extends React.Component<ProjectProps, {}> {
  render() {
        let project: ProjectI = {id: '', name: '', description: '', picture: '', url: '', rm: ''};
        let image = null;

        if (this.props.project !== null) {
            project = this.props.project;
            image = require('../../images/' + project.picture);
        }

        return (
          <div className="pro">
            <a href={'http://' + project.url}>
                <img src={image} />
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </a>
        </div>
      );
  }
}
