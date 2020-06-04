import React from 'react';
import "./style.scss"

function Navigation() {
  return (
      <div className="navigation">
         <div className="navigation__buy-links">
         <div className="navigation__item">
              <span className="navigation__buy">Comprar</span>
              <span className="navigation__type">Carros</span>
          </div>
          <div className="navigation__item">
              <span className="navigation__buy">Comprar</span>
              <span className="navigation__type">Motos</span>
          </div>
         </div>
          <div className="navigation__item">
              <button className="navigation__sell-my-car">Vender meu carro</button>
          </div>
      </div>
  );
}

export default Navigation;