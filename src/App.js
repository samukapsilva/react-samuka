import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import foto1 from './logo.svg';
import {Link} from 'react-router';


class App extends Component {

  render() {
    console.log("render");        
    return (
      <div id="layout">
          
          <a href="#menu" id="menuLink" className="menu-link">
              
              <span></span>
          </a>

          <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="#">Tendency</a>

                  <ul className="pure-menu-list">                     
                     <li className="pure-menu-item"><Link to="/"      className="pure-menu-link">Home</Link></li>
                     <li className="pure-menu-item"><Link to="/autor" className="pure-menu-link">Tendências</Link></li>
                      <li className="pure-menu-item"><Link to="/livro" className="pure-menu-link">Graficos</Link></li>

                      <li className="pure-menu-item" className="menu-item-divided pure-menu-selected">
                        <a href="#" className="pure-menu-link">Servicos</a>
                      </li>

                    <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Contatos</Link></li>
                      
                  </ul>
              </div>
          </div>

              <div id="main">
                {this.props.children}
              </div>
          


            <div className="pure-g">
                <div className="pure-u-1-4">
                    {/*<img className="pure-img-responsive" src="{foto1}" alt="Peyto Lake"/>*/}
                     <img src={foto1} className="App-logo" alt="logo" />
                </div>
                <div className="pure-u-1-4">
                    {/*<img className="pure-img-responsive" src="/img/foneSony.jpg" alt="Train"/>*/}
                    <img src={foto1} className="App-logo" alt="logo" />
                </div>
                <div className="pure-u-1-4">
                    {/*<img className="pure-img-responsive" src="/img/foneSony.jpg" alt="T-Shirt Store"/>*/}
                    <img src={foto1} className="App-logo" alt="logo" />
                </div>
                <div className="pure-u-1-4">
                {/*<img className="pure-img-responsive" src="/img/foneSony.jpg" alt="Mountain"/>*/}
                  <img src={foto1} className="App-logo" alt="logo" />
                </div>
            </div>
          

      </div>     
    );
  }
}

export default App;
