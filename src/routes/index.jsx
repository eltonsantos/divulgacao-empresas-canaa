import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListaEmpresas from '../components/ListaEmpresas';
import CadastroEmpresa from '../components/CadastroEmpresa';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListaEmpresas} />
        <Route path="/cadastro" component={CadastroEmpresa} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;