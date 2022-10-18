import React from 'react';

class Goods extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div>
                <div className="goods-block">
                    <img src={this.props.image} alt="" />
                    <p>{this.props.title}</p>
                    <p>{this.props.cost}</p>
                    <button className="add-to-cart" data-key={this.props.articul}>Add to cart</button>
                </div>
            </div>
        );
    }
}

export default Goods;
