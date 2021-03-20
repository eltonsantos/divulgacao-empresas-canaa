import React, { useState, useEffect } from 'react'

const ListaEmpresas = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getLista = () => {
      localStorage.getItem('lista')
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
                lista.map(l => (
                  <li className="list-group-item">
                    { l.nome }
                    <button className="btn btn-info float-right">Detalhes</button>
                  </li>
                ))
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
