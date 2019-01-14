import * as React from 'react';
import './Main.css';

const scrollToElement = require('scroll-to-element');
const profileImage = require('../../images/me.jpg');

export default class Main extends React.Component<{}, {}> {
  render() {
    return (
      <section id="me">

        <div id="cent">

          <div id="personal-photo">
            <img
              src={profileImage}
            />
          </div>

          <div id="personal-info">
            <h1>Nacho González-Garilleti</h1>
            <p>
              Software Engineer. I love to write code and design software for people and companies
            </p>
            <p>
              I'm currently developing the MoPlay betting app at Addison Global Ltd.
            </p>
            <p>
              I also direct my own entrepreneurship projects and collaborate for open source
            </p>
            <p>
              Philosophy: <em>"Success is not assured, failures either"</em></p>

            <div id="social">
              <a
                href="http://twitter.com/nachox07"
                className="lsf-icon tw"
                data-icon="twitter"
                target="_BLANK"
              />
              <a
                href="https://www.linkedin.com/in/nachogonzalezgarilleti/"
                className="lsf-icon lkd"
                data-icon="linkedin"
                target="_BLANK"
              />
              <a
                href="https://github.com/nachox07"
                className="lsf-icon gth"
                data-icon="github"
                target="_BLANK"
              />
            </div>
        </div>
      </div>

      <div
        className="plus-info"
        onClick={() => {
            scrollToElement(
                '#projects', {
                offset: 0,
                ease: 'out-bounce',
                duration: 1500
              });
          }
        }
      >
        Projects
        <div className="b-arrow lsf-icon" data-icon="down" />
      </div>

      </section>
    );
  }
}
