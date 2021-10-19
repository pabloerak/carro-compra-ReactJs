import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}
class Button extends Component {
    render(){
        return (
            <button style={styles.button} {...this.props}/>//spread operator 
            //(le pasa el OnClick con su valor y las propiedades children,
            // en este caso el texto en el boton )
        )
    }
}

export default Button