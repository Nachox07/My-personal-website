import * as React from 'react';

import './SocialMedia.css';

export default class SocialMedia extends React.Component<{}, {}> {
  render() {
    return (
      <section id="social-media">
        <div>
            <div className="layer">
                <h1 className="lsf-icon" data-icon="comments">Redes sociales</h1>
                <div id="tweets">
                    <h1 className="lsf-icon" data-icon="twitter">Últimos tweets de mi timeline</h1>
                    <article>
                        <p id="load">Cargando tweets...</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
