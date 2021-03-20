import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ListaEmpresas = () => {

  const [lista, setLista] = useState([]);

  const getLista = () => {
    const listaStorage = JSON.parse(localStorage.getItem('lista')) || [];
    setLista(listaStorage);
  }

  useEffect(() => {
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
                  <li key={l.id} className="list-group-item">
                    { l.nome }
                    <Link to={`/detalhes/${l.id}`} className="btn btn-info float-right">Detalhes</Link>
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
