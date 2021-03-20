import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ListaEmpresas = () => {

  const [id, setId] = useState('');
  const [lista, setLista] = useState([]);

  const getLista = () => {
    const listaStorage = JSON.parse(localStorage.getItem('lista')) || [];
    setLista(listaStorage);
  }

  useEffect(() => {
    getLista();
  }, []);

  const excluir = (id) => {
    const novaListagem = lista.filter( item => item.id !== id );
    console.log(novaListagem);
    setLista(novaListagem);
  }

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
                    <b>{ l.nome } --- {l.empresa} --- {l.categoria}</b>
                    
                    <button onClick={ () => { excluir(l.id) } } className="btn btn-danger float-right">Excluir</button>
                    <Link to={`/editar/${l.id}`} className="btn btn-warning float-right mr-2">Editar</Link>
                    <Link to={`/detalhes/${l.id}`} className="btn btn-info float-right mr-2">Detalhes</Link>
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
