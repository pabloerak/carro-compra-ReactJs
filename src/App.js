import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 2, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 1, img: '/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 3, img: '/productos/lechuga.jpg' },
    ],
    carro: [
      //{ name: 'Tomate', price: 2, img: '/productos/tomate.jpg', cantidad: 1 },
    ],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    //si en el array carro hay un elemento con el mismo nombre
    if (carro.find(x => x.name === producto.name)) {
      //va creando un nuevo objeto carro si no coincide se queda el elemeto original
      //y si coincide el nombre se le suma la cantidad de 1
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        }) : x)
      return this.setState({ carro: newCarro })//reemplazamos el antiguo
    }
    return this.setState({
      //el array carro será igual a la concatenacion de lo agregado
      // más lo que ya estaba previamente
      carro: this.state.carro.concat({
        //el nuevo elemento será una copia del producto
        //y una nueva propiedad de cantidad
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar 
          carro={this.state.carro}  
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
