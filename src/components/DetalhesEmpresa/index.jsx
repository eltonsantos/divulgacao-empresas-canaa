import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './styles.css';

const DetalhesEmpresa = ({ match }) => {

  const [lista, setLista] = useState('');

  const {
    params: { id },
  } = match;

  console.log(lista);
  console.log(match);
  console.log(id);

  return (
    <div>
      <h1>Detalhe Empresa: { id }</h1>
      <Link to={`/`} className="btn btn-primary">Voltar</Link>
      <div className="container container-contact bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <div className="col-md-12">
            <div className="contact">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">Nome:</div><br />
                    <div className="col-md-6"> { lista } </div>
                    <div className="col-md-6">Empresa:</div>
                    <div className="col-md-6">+1-800-600-9899</div>
                    <div className="col-md-6">Categoria:</div>
                    <div className="col-md-6">Sacramento, CA</div>
                    <div className="col-md-6">CEP:</div>
                    <div className="col-md-6">1975/8/17</div>
                    <div className="col-md-6">Endereço:</div>
                    <div className="col-md-6">http://yourdomain.com</div>
                    <div className="col-md-6">Bairro:</div>
                    <div className="col-md-6">http://yourdomain.com</div>
                    <div className="col-md-6">Telefone:</div>
                    <div className="col-md-6">http://yourdomain.com</div>
                  </div>
                </div>
                
                <div className="col-md-6">
                  <p>Descrição</p>
                  <p className="contact-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalhesEmpresa
