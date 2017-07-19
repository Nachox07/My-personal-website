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
              Desarrollador Web &amp; Móvil. 
              Me encanta escribir código y diseñar aplicaciones para personas y organizaciones.
            </p>
            <p>
              Soy voluntario como CTO en Mapayuda junto con el desarrollo de proyectos tecnológicos e innovadores. 
              Estudiante de ingeniería informática.
              </p>
            <p>
              Filosofía: <em>"El éxito no está asegurado, los fracasos tampoco"</em></p>
            
            <div id="social">
              <a 
                href="http://twitter.com/nachox07" 
                className="lsf-icon tw" 
                data-icon="twitter" 
                target="_BLANK"
              />
              <a 
                href="https://google.com/+NachoGonzalezGarilletiRuiz/" 
                className="lsf-icon ggl" 
                data-icon="google" 
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
              <a 
                href="/blog" 
                className="lsf-icon blog" 
                data-icon="quote" 
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
        Proyectos
        <div className="b-arrow lsf-icon" data-icon="down" />
      </div>

      </section>
    );
  }
}
