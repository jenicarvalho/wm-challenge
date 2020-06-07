import React, { useEffect, useState } from 'react'
import http from '../../services/api'
import './style.scss'

function Vehicles() {

  const [vehicles, setVehicles] = useState(null)

  /**
   *  Com mais tempo usaria o redux saga para as requisições
   */

  useEffect(() => {
    if(vehicles === null) {
      async function fetchData() {
          await http.get("/Vehicles?Page=1").then(response => setVehicles(response.data))
      }
      fetchData()
    }
  }, [vehicles])


  return (
    <div className="vehicles">
      {vehicles && vehicles.map(item => (
        <div className="vehicles__item" key={item.ID}>
          <div className="vehicles__image">
            <img src={item.Image} alt={`${item.Make} ${item.Model}`} />
          </div>
          <div className="vehicles__content">
            <h2>{`${item.Make} ${item.Model}`}</h2>
            <h3>{item.Version}</h3>
            <div className="vehicles__price">
              {
                Intl.NumberFormat( 'pt-br', { 
                  style: 'currency', 
                  currency: 'BRL' }
                )
                .format(parseFloat(item.Price))
              }
            </div>
            <div className="vehicles__info">
              <div className="fabrication">
                {`${item.YearFab} / ${item.YearModel}`}
              </div>
              <div className="km">
                {item.KM} km
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Vehicles;