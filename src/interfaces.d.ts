interface AppInterfaceState {
  projects: Array<ProjectI>;
}

interface ProjectsInterfaceProps {
    projects: Array<ProjectI>;
}

interface ProjectsInterfaceState {
    projects: Array<object>;
}

interface ProjectI {
    id: string;
    name: string;
    description: string;
    picture: string;
    url: string;
    rm: string;
}

interface ProjectProps {
    project: ProjectI;
}

interface MainProps {
    active: string;
    hover: string;
}