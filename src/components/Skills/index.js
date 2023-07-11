import React, { useState, useEffect } from 'react';
import './index.scss';
import Loader from 'react-loaders';

const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className="container-Skills">
          <div className="col">
            <h2 className="titulo">Programming</h2>
            <ul className="skill">
              <li>
                <span className="blueline html"></span>
                <em>HTML</em>
              </li>
              <li>
                <span className="blueline css"></span>
                <em>CSS</em>
              </li>
              <li>
                <span className="blueline java"></span>
                <em>Java</em>
              </li>
              <li>
                <span className="blueline javascript"></span>
                <em>Javascript</em>
              </li>
              <li>
                <span className="blueline php"></span>
                <em>php</em>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="plataformas titulo">Frameworks</h2>
            <ul className="skill">
              <li>
                <span className="greenline react-js"></span>
                <em>React.js</em>
              </li>
              <li>
                <span className="greenline angular"></span>
                <em>Angular</em>
              </li>
              <li>
                <span className="greenline vue-js"></span>
                <em>Vue.js</em>
              </li>
              <li>
                <span className="greenline express-js"></span>
                <em>Express.js</em>
              </li>
              <li>
                <span className="greenline laravel"></span>
                <em>Laravel</em>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2 className="programas titulo">Tools</h2>
            <ul className="skill">
              <li>
                <span className="redline vscode"></span>
                <em>VS Code</em>
              </li>
              <li>
                <span className="redline git"></span>
                <em>Git</em>
              </li>
              <li>
                <span className="redline npm"></span>
                <em>NPM</em>
              </li>
              <li>
                <span className="redline webpack"></span>
                <em>Webpack</em>
              </li>
              <li>
                <span className="redline gulp"></span>
                <em>Gulp</em>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
