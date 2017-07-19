import * as React from 'react';

import './Knowledge.css';

export default class Knowledge extends React.Component<{}, {}> {
  render() {
    return (
      <section id="knowledge">
        <div>
            <div className="layer">
                <h1 className="lsf-icon" data-icon="code">Conocimientos</h1>
                <div id="know-info">

                    <div>
                        <h2>
                            [Lenguajes de programación 
                            &amp; Frameworks (Backend y compilados)  
                            &amp; Entornos de desarrollo]
                        </h2>
                        <ul>
                            <li>
                                C++ - Dominio de la base del lenguaje, desarrollo de pequeños proyectos. 
                                Aprendido en mi primer año de universidad
                            </li>

                            <li>
                                PHP 5.6 - 7.1 (Certificado de SoloLearn) - Lenguaje que uso para la mayoría 
                                de mis proyectos, alto dominio y experiencia con el desarrollo de 
                                proyectos con el patrón de diseño MVC, frameworks y servicios API Restful 
                                (Ej: Wordpress, slim, Symphony)
                            </li>

                            <li>
                                Java 8 (Certificado de SoloLearn) - Dominio del lenguaje, capaz de implementar 
                                y usar librerías propias de la plataforma o externas como Apache Commons, Swing y
                                TDD (Desarrollo utilizando IntelliJ IDEA)
                            </li>

                            <li>
                                Python (Certificado de SoloLearn) - Dominio del lenguaje, 
                                manejo y creación de paquetes con pip
                            </li>

                            <li>
                                Haskell - Completo uso el paradigma de la programación funcional para
                                paralelismo de tareas y testing rápido con QuickCheck
                            </li>

                            <li>
                                SQL (Certificado de SoloLearn) - Dominio del lenguaje, manejo con 
                                bases de datos con tablas relacionales 
                                (Consultas complejas, funciones, procedimientos)
                            </li>

                            <li>
                                ActionScript - Alto dominio, usado durante un curso orientado al desarrollo 
                                de aplicaciones móviles en Adobe Flash Builder, a lo que añado el uso del 
                                SDK de Apache Flex
                            </li>

                            <li>
                                Framework PhoneGap - Usado para desarrollos rápidos que no requieren 
                                una alta complejidad para diversas plataformas móviles
                            </li>

                            <li>
                                Aplicaciones de escritorio - Proyectos propios desarrollados en C++ 
                                (Visual Studio), Java + Swing (IntelliJ Idea &amp; Eclipse) y Vala 
                                (Distribución Ubuntu)
                            </li>

                            <li>
                                Android Studio con Java / XML (Android) y con Xcode (iOS) - 
                                Experiencia con pequeños proyectos hechos de manera autodidacta y cursos
                            </li>

                            <li>
                                Appcelerator Titanium Studio - Gracias a él desarrollo apps para Android, 
                                iOS, Windows Phone ya que Appcelerator transforma código Javascript en 
                                código nativo de la plataforma
                            </li>

                            <li>
                                Atom y Sublime Text 3 + plugins y Visual Studio Code (actual) 
                                como IDEs preferidos para la mayoría de lenguajes
                            </li>

                            <li>
                                GIT en Github y Bitbucket - Sistema de versiones clave para 
                                todos mis proyectos, me complemento con el programa SourceTree 
                                que simplifica muchas acciones
                             </li>
                             <li>
                                Gulp, mi automatizador por defecto para
                                mi espacio de trabajo, desde browserSync hasta minificación de ficheros o
                                preprocesas SASS
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>
                            [Lenguajes y Frameworks para Frontend]
                        </h2>
                        <ul>
                            <li>HTML 5, CSS3 con SASS para maquetación (responsive design, progressive enhacement)</li>
                            <li>Amplio manejo de la librería Vanilla.js</li>
                            <li>
                                Experiencia con el framework Angular 4 (Typescript) de Google usado en proyectos junto a
                                API Rest en el backend para modelar datos siguiendo el patrón MVC en webapps SPA
                            </li>
                            <li>Experiencia con la librería Reactjs de Facebook (Typescript y Javascript) 
                                para tener bien optimizado el DOM y tener un app completamente reactiva. 
                                Usada junto a Redux, el contenedor de estado predictivo con el que enrutar y compartir
                                el estado entre todos los componentes a la vez.
                            </li>
                            <li>
                                Uso de la librería jQuery y Minified - Librerías usadas para simplificar el 
                                funcionamiento de Javascript en determinados momentos, tomar acciones sobre eventos 
                                y efectos visuales
                            </li>
                            <li>
                                Strophe.js - Librería que he usado siempre para implementar 
                                el protocolo XMPP (Usado por Facebook) 
                                en aplicaciones web con funcionalidades en tiempo real
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>
                            [Servidores usados en Backend]
                        </h2>
                        <ul>
                            <li>
                                PHP 5.6 - 7.1 con Slim para formar servicios API Restful y frameworks como Wordpress
                            </li>
                            <li>
                                Nginx - Utilización de sus módulos para realizar configuraciones 
                                (urls amigables, front view controller, frameworks, etc...)
                            </li>
                            <li>
                                Apache - Utilización de sus módulos (.htaccess) y 
                                realizadas configuraciones de todo tipo al igual que con Nginx
                            </li>
                            <li>
                                NodeJS - Realmente increíble para trabajos a gran escala, 
                                cada vez lo uso más en mis proyectos
                            </li>
                            <li>
                                Ejabberd - Utilizado para implementar protocolo XMPP, 
                                con el cual he podido crear aplicaciones sociales como chats 
                                y el intercambio de datos en tiempo real
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>
                            [Bases de datos]
                        </h2>
                        <ul>
                            <li>
                                MariaDB, MySQL y SQLite - Bases de datos relacionales
                            </li>
                            <li>
                                Firebase cuando trabajo con NoSQL, usada en proyectos con React
                            </li>
                            <li>
                                Administración de bases de datos - Como administrador uso la 
                                línea de comandos, PHPMyAdmin y Adminer (el cual es bastante ligero)
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>
                            [Sysadmin]
                        </h2>
                        <ul>
                            <li>
                                Linux - Amplio manejo del sistema por línea de comandos (Shell) 
                                para monitorizar y poder realizar cualquier acción necesaria sobre 
                                la infraestructura
                            </li>
                            <li>
                                Windows - He trabajado con Wamp, EasyPHP y NodeJS sobre él
                            </li>
                            <li>
                                Mac OS X - Haciendo uso de brew para instalar los paquetes correspondientes 
                                del servidor y con el programa MAMP PRO que sirve para montar rápidamente un
                                 entorno de pruebas MAMP (Mac + Apache + MySQL + PHP)
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        </section>
    );
  }
}