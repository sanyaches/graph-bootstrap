import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        {themes.map((theme, i) => (
          <li className="nav-item" >
            <Link to={'/lab' + (i + 1)} className="nav-link" activeClassName="active" tag="li" >
              {theme}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const themes = [
  'Характеристика графов',
  'Бинарные операции',
  'Алгоритм фронта волны',
  'Компоненты связности',
  'Алгоритм Флойда-Уоршелла',
  'Эйлеровы графы',
  'Гамильтоновы графы',
  'Деревья и остовы',
  'Поток в сети'
];
