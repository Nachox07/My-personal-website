import * as React from 'react';
import './Projects.css';

// Components
import Project from '../Project/Project';

export default class Projects extends React.Component<ProjectsInterfaceProps, ProjectsInterfaceState> {

  render() {
    return (
      <section id="projects">
            <div className="layer">
                <h1 className="lsf-icon" data-icon="app">Proyectos en los que he trabajado</h1>
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
                        <div className="err">¡No se han podido cargar mis proyectos!</div>
                    }
                </div>
            </div>
        </section>
    );
  }
}
