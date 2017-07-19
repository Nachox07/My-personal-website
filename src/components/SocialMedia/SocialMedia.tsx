import * as React from 'react';

import './SocialMedia.css';

export default class SocialMedia extends React.Component<{}, TweetsList> {

  constructor() {
      super();
      this.state = {
        tweets: []
      };
  }

  getTweets() {
    fetch('http://garilleti.me/twitter_api', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({tweets: json}));
  }

  componentDidMount() {
    this.getTweets();
  }

  render() {
    return (
      <section id="social-media">
        <div>
            <div className="layer">
                <h1 className="lsf-icon" data-icon="comments">Redes sociales</h1>
                <div id="tweets">
                    <h1 className="lsf-icon" data-icon="twitter">Últimos tweets de mi timeline</h1>
                        {
                            (this.state.tweets.length > 0) 
                            ? this.state.tweets.map((tweet, key) => {
                                let dt = new Date(tweet.created_at);
                                let mth = dt.getMonth() + 1;
                                
                                return (<article key={key}>
                                    <a href={`http://twitter.com/nachox07/status/${tweet.id_str}`} target="_blank">
                                    <div className="tweet-img">
                                        <img alt={tweet.user.name} src={tweet.user.profile_image_url} />
                                    </div>
                                    <div className="tweet-content">
                                        <p>{tweet.user.name}</p>
                                        <p>{tweet.text}</p>
                                        <p>{dt.getDate()} / {(mth < 10) ? mth : '0' + mth}</p>
                                    </div>
                                </a>
                            </article>);
                            })
                            : <article><p id="load">Cargando tweets...</p></article>
                        }
                </div>
            </div>
        </div>
    </section>
    );
  }
}
