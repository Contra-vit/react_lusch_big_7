
import GoodsArr from './goods.json'

import './App.css';
import React from 'react'
import Cart from './Cart';
import GoodsItem from './GoodsItem'


class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      cart: {},
      count: 0
    }
    
  }
  addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = this.state.cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    // cartTemp++;
    this.setState({cart : cartTemp});
    let count = this.state.count;
    count++;
    this.setState({'count' :  count})
}
  render() {
    let showCart;
if (this.state.count !== 0) {
    showCart =  <Cart cart={this.state.cart} goods={this.goodsArr}/>;
}
else {
    showCart = 'Empty';
}
    return (
      <div className="container">
        <h1>Cart</h1>
        <div className="goods-field" onClick={this.addToCart}>
          {GoodsArr.map( item => <GoodsItem title={item.title}  cost={item.cost} image = {item.image} articul = {item.articul}/>)}
        </div>
        {showCart}
      </div>
    )
  }
}
export default App;
