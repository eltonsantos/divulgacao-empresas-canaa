import React, { useState, useEffect } from 'react'

function ListaEmpresas() {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getLista = () => {
            
    }
    getLista();
  }, []);

  return (
    <>  
      <h1>Lista de empresas</h1>
      <div className="row">
        <div className="col">
          <ul  className="list-group">
            {
              lista.length !== 0 ?
              (
                <li className="list-group-item">
                  <button className="btn btn-info float-right">Detalhes</button>
                </li>
              )
              :
              (
                <span>Não há empresa cadastrada.</span>
              )
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListaEmpresas
