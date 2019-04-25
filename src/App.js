import mathjs from 'mathjs';
import React, { Component, Fragment } from 'react';
import './App.css';
import './Lista.css';
import Lista from './Lista';
import Input from './Input'

class App extends Component {
  state = {
    lista : [],
    conteudo : "asdasd"
  }

  atualizarLista = (novaLista) => {
    this.setState({lista : novaLista});
  }

  mudarConteudo(mudarConteudo){
    this.setState({conteudo : mudarConteudo});
  }

  renderConteudo() {
    return this.state.conteudo === "lista" 
      ? <Fragment>
          <Input listinha = {this.state.lista} atualizarListinha = {this.atualizarLista}/>
          <Lista listinha = {this.state.lista} atualizarListinha = {this.atualizarLista}/>
        </Fragment>
      : this.state.conteudo === "afazeres"
        ? <div>1</div>
        : "Escolha algumas das opções";
  }

  render() {
    console.log(this.state.conteudo);
    return (
      <div className="container">        
        <h1 className="titulo"> Lista de compras</h1>
        <div className="gerenciador">
          <span onClick = {() => this.mudarConteudo("lista")}>Gerenciador de lista</span>
          <span onClick = {() => this.mudarConteudo("afazeres")}>Gericiador de afazeres</span>
        </div>
        {this.renderConteudo()}
      </div>
    );
  }
}

export default App;
