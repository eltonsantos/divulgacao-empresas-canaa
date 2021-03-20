import React, { useState } from 'react';

function CadastroEmpresa() {

  const [nome, setNome] = useState('');
  const [empresa, setempresa] = useState('');
  const [categoria, setCategoria] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');

  const adicionar = (e) => {
    
  }

  return (
    <div>
      <h1>Cadastrar Empresa</h1>

      <form onSubmit={adicionar} className="form-group">
        <input className="form-control" type="text" placeholder="Nome do irmão" value={nome} />
        <input className="form-control mt-2" type="text" placeholder="Nome da empresa" value={empresa} />
        <input className="form-control mt-2" type="text" placeholder="Categoria" value={categoria} />
        <input className="form-control mt-2" type="text" placeholder="Endereço" value={endereco} />
        <input className="form-control mt-2" type="text" placeholder="Bairro" value={bairro} />
        <input className="form-control mt-2" type="text" placeholder="CEP" value={cep} />
        <input className="form-control mt-2" type="text" placeholder="Telefone" value={telefone} />
        <textarea className="form-control mt-2" type="text" placeholder="Descrição" value={descricao}></textarea>

        <input className="btn btn-info btn-block mt-2" type="submit" />
        
      </form>

    </div>
  );
}

export default CadastroEmpresa;