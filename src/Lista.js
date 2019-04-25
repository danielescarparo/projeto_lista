import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Lista extends Component{
    state = {};

    removerItens = (index) => {
        let copiaLista = [...this.props.listinha];
        copiaLista.splice(index, 1);
        this.props.atualizarListinha(copiaLista);
        }

    printarLinha = () => {
        const elementos = [];
        for(let index in this.props.listinha){
          elementos.push(
            <div key={index} className="itens-lista">
              <span>{` ${parseInt(index) + 1}. ${this.props.listinha[index]}`}</span>
              <button className="botao" onClick={() => this.removerItens(index)}><i className="fas fa-minus"></i></button>
            </div>)
        }
        return elementos;
    }

    render(){
        return <div className="listar-todos">{this.printarLinha()}</div>
    }
}
Lista.propTypes = {
    listinha : PropTypes.array,
    atualizarListinha : PropTypes.func
}

Lista.defaultProps = {
    listinha : [],
    atualizarListinha : () => {}
}

export default Lista;

// export {Lista, uma_funcao}