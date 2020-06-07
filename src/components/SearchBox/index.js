import React, { useState, useEffect } from 'react'
import { Form } from '@unform/web'
import Input from '../Input'
import Select from '../Select'

import http from '../../services/api'

import "./style.scss"

function SearchBox() {

    const [makes, setMake] = useState([{}])
    const [models, setModels] = useState([{}])
    const [versions, setVersion] = useState([{}])
    const [vehicles, setVehicles] = useState([{}])

     async function handleModels(model) {
        const parser = (version) => ({ label: version.Name, value: version.MakeID })
        await http.get(`/Version?ModelID=${model.value}`).then(response => setVersion(response.data.map(parser)))
    }

     async function handleMakes(make) {
        const parser = (model) => ({ label: model.Name, value: model.MakeID })
        await http.get(`/Model?MakeID=${make.value}`).then(response => setModels(response.data.map(parser)))
    }

    // useEffect(() => {
    //     async function fetchData() {
    //         const parser = (maker) => ({ label: maker.Name, value: maker.ID })
    //         await http.get("/Make").then(response => setMake(response.data.map(parser)))

    //         await http.get("/Vehicles?Page=1").then(response => setVehicles(response.data))
    //     }
    //     fetchData()
    // }, [])

  return (      
    <div className="search-box">
        <Form>
            <div className="check-box">
                <div className="check-box__item">
                    <input type="checkbox" id="novos"/>
                    <label className="checkbox_text" htmlFor="novos">
                        Novos
                    </label>
                </div>
                <div className="check-box__item">
                <input type="checkbox" id="usados" />
                    <label className="checkbox_text" htmlFor="usados">
                        Usados
                    </label>
                </div>
            </div>

            <div className="filters">
                <div className="filters__fields">
                    <div className="filters__fields--location">
                        <Input name="local" type="text"  placeholder="Onde: São Paulo - SP"/>
                        <Select 
                            name="raio"
                            placeholder="Raio: 100km"
                            options={[
                                { label: "100km", value: 100 },
                                { label: "150km", value: 150 },
                                { label: "200km", value: 200 },
                                { label: "250km", value: 250 }
                            ]} 
                        />
                    </div>
                    <div className="filters__fields--half">
                        <Select 
                            name="ano-desejado" 
                            placeholder="Ano Desejado"
                            options={[
                                { label: "2020", value: 2020 },
                                { label: "2019", value: 2019 },
                                { label: "2018", value: 2018 },
                                { label: "2017", value: 2017 },
                                { label: "2016", value: 2016 },
                                { label: "2015", value: 2015 }
                            ]} 
                        />
                        <Select 
                            name="faixa-preco" 
                            placeholder="Faixa de Preço"
                            options={[
                                { label: "Acima de 100 mil", value: "100" },
                                { label: "80 a 100 mil", value: "80-100" },
                                { label: "60 a 80 mil", value: "60-80" },
                                { label: "40 a 60 mil", value: "40-60" },
                                { label: "20 a 40 mil", value: "20-40" },
                                { label: "5 a 20 mil", value: "5-20" }
                            ]} 
                        />
                    </div>
                </div>

                <div className="filters__fields">
                    <div className="filters__fields--half">
                        <Select 
                            name="marca" 
                            placeholder="Marca: Todas"
                            options={makes}   
                            onChange={handleMakes} 
                        />
                        <Select 
                            name="modelo" 
                            placeholder="Modelo: Todos"
                            options={models} 
                            onChange={handleModels} 
                        />
                    </div>
                    <div className="filters__fields--full">
                        <Select 
                            name="versao" 
                            placeholder="Versão: Todas"
                            options={versions} 
                        />
                    </div>
                </div>
            </div>

            <div className="search-box__action-buttons">
                <button type="submit">Ver Ofertas</button>
            </div>
        </Form>

        {
            vehicles.map(e => (
                <div>

                <h3>{e.Make}</h3>
                <p>{e.Version}</p>
                    </div>
            ))
        }
    </div>
  );
}

export default SearchBox;