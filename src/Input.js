import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Input extends Component{
    state = {
        textoDigitado : ""
    };

    alterarTexto = (e) => {
        this.setState({textoDigitado : e.target.value});
    }

    adicionarItens = () => {
    let copiaLista = [...this.props.listinha];
    copiaLista.push(this.state.textoDigitado);
    this.props.atualizarListinha(copiaLista);
    this.setState({textoDigitado : ""});

    }
    
    removerLista = () => {
        let listaVazia = [];
        this.props.atualizarListinha(listaVazia);
    }

    render(){
        return(         
            <div className="group">
                <input className="input-lista" type="text" onChange = {this.alterarTexto} value = {this.state.textoDigitado}/>
                <button className="botao" onClick = {this.adicionarItens}><i className="fas fa-plus"></i></button>
                <button className="botao" onClick = {this.removerLista}><i className="fas fa-trash"></i></button>
            </div>
        );
    }
}

Input.propTypes = {
    listinha : PropTypes.array,
    atualizarListinha : PropTypes.func
}

export default Input;
