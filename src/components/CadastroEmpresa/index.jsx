import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const CadastroEmpresa = () => {

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [categoria, setCategoria] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getLista = () => {
      localStorage.getItem(lista)
    }
    getLista();
  }, []);

  const adicionar = (e) => {
    e.preventDefault();

    // Validações simples
    if(!nome.trim()){
      setError('Campo nome está vazio');
    } else if(!empresa.trim()){
      setError('Campo empresa está vazio');
    } else if(!categoria.trim()){
      setError('Campo categoria está vazio');
    } else if(!cep.trim()){
      setError('Campo cep está vazio');
    } else if(!endereco.trim()){
      setError('Campo endereco está vazio');
    } else if(!bairro.trim()){
      setError('Campo bairro está vazio');
    } else if(!telefone.trim()){
      setError('Campo telefone está vazio');
    }

    const novaLista = {
      id: uniqid(),
      nome,
      empresa,
      categoria,
      cep,
      endereco,
      bairro,
      telefone,
      descricao
    }

    setLista([...lista, novaLista]);

    try {
      const data = JSON.stringify(novaLista); 

      localStorage.setItem('lista', data);

      console.log('Cadastrado');

      setNome('');
      setEmpresa('');
      setCategoria('');
      setCep('');
      setEndereco('');
      setBairro('');
      setTelefone('');
      setDescricao('');

    } catch (e) {
      console.log(e);
      setError('Erro ao cadastrar');
    }
    
  }

  const apagar = (id) => {}

  const editar = (id) => {}

  return (
    <div>
      <h1>Cadastrar Empresa</h1>

      <form onSubmit={adicionar} className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Nome do irmão"
          value={nome}
          onChange={(e) => {setNome(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Nome da empresa"
          value={empresa}
          onChange={(e) => {setEmpresa(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => {setCategoria(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="CEP"
          value={cep} onChange={(e) => {setCep(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => {setEndereco(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => {setBairro(e.target.value)}}
        />
        <input
          className="form-control mt-2"
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => {setTelefone(e.target.value)}}
        />
        <textarea
          className="form-control mt-2"
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => {setDescricao(e.target.value)}}
        >
        </textarea>

        <input className="btn btn-info btn-block mt-2" type="submit" />

      </form>
      {
        error ?
        (
          <div className="alert alert-danger">
            {error}
          </div>
        )
        :
        (
          <span></span>
        )
      }


      <div>
        <h2>Lista</h2>
        <ul>
          {
            lista.length !== 0 ? (
              lista.map(i => (
                <li key={i.id}>{i.nome}</li>
              ))
            ) : (<span>Nada</span>)
          }
        </ul>

      </div>

    </div>
  );
}

export default CadastroEmpresa;