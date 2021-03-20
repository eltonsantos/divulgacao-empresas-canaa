import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListaEmpresas from '../components/ListaEmpresas';
import CadastroEmpresa from '../components/CadastroEmpresa';
import DetalhesEmpresa from '../components/DetalhesEmpresa';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ListaEmpresas} />
      <Route path="/cadastro" component={CadastroEmpresa} />
      <Route path="/detalhes/:id" component={DetalhesEmpresa} />
    </Switch>
  );
}

export default Routes;