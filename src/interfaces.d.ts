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

interface EventScroll {
    pageY: number
}