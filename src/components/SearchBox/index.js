import React from 'react'
import { Form } from '@unform/web'
import Input from '../Input'
import Select from '../Select'

import "./style.scss"

function SearchBox() {

    function handleSubmit(data) {
        console.log(data);
      }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

  return (
    <div className="search-box">
        <Form onSubmit={handleSubmit}>

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
                    <Input name="local" type="text"  placeholder="Onde"/>
                    <Select name="raio" options={[{ label: "100km", value: 100 }]} />
                    <Select name="ano-desejado" options={[{ label: "Ano Desejado", value: "" }]} />
                    <Select name="faixa-preco" options={[{ label: "Faixa de Preço", value: "" }]} />
                </div>

                <div className="filters__fields">
                    <Select name="marca" options={[{ label: "Marca", value: "" }]} />
                    <Select name="modelo" options={[{ label: "Modelo", value: "" }]} />
                    <Select name="versao" options={[{ label: "Versão", value: "" }]} />
                </div>

            </div>

            <button type="submit">Ver Ofertas</button>
        </Form>
    </div>
  );
}

export default SearchBox;