import React from 'react';

export default props => (
  <nav className='navbar navbar-inverse bg-inverse'>
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#"> Pokedex
        </a>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/search">Busca Pokemon <i class="fa fa-search"></i></a></li>
          <li><a href="#/about">Projeto <i class="project fa fa-github"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
)