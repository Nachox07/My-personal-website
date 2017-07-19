interface AppInterfaceState {
    projects: Array<ProjectI>;
    NavH: number;
    ProjectsH: number;
    SocialMediaH: number;
    KnowledgeH: number;
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

interface TweetsList {
    tweets: Array<TweetInterface>;
}

interface TweetInterface {
    created_at: string;
    id_str: string;
    text: string;
    user: {
        name: string;
        profile_image_url: string;
    };
}