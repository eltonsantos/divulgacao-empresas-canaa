import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListaEmpresas from '../components/ListaEmpresas';
import CadastroEmpresa from '../components/CadastroEmpresa';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ListaEmpresas} />
      <Route path="/cadastro" component={CadastroEmpresa} />
    </Switch>
  );
}

export default Routes;