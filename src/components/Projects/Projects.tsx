import * as React from 'react';
import './Projects.css';

// Components
import Project from '../Project/Project';

type PropsType = {
    projects: Array<ProjectI>;
};

type StateType = {
    projects: Array<object>;
};

export default class Projects extends React.Component<PropsType, StateType> {
  render() {
    return (
      <section id="projects">
            <div className="layer">
                <h1 className="lsf-icon" data-icon="app">Projects where I worked</h1>
                <div id="pro-flex">
                    {
                        (this.props.projects.length > 0)
                        ?
                        this.props.projects.map((project, key) => {
                            return(
                                <Project key={key} project={project} />
                            );
                        })
                        :
                        <div className="err">Projects cannot be loaded now, try again later please</div>
                    }
                </div>
            </div>
        </section>
    );
  }
}
