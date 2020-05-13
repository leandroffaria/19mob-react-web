import React from 'react';

import logo from '../../assets/logo.png';
import './style.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img src={logo}  />
                <h1>Componente de Teste</h1>
                <button>botão</button>
                <div>
                    <span>Oi eu sou um span</span>
                    <button>botão 2</button>
                </div>
            </header>
        );
    }
}

export default Header;