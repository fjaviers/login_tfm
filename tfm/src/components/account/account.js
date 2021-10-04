import React, { Component } from 'react';

class Account extends Component {

    renderContent() {
        return <h1>  BIENVENIDO A LA TIENDA ONLINE DE AURELIO CAMISETAS ¡GRACIAS POR FORMAR PARTE DE ESTA FAMILIA! </h1> 

    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default Account;