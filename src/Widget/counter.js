import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        console.log(this.props.clicks);
    };
    render(){

        return <button onClick={this.props.clicks}>Ajouter un clic</button>


    };
}
export default Counter;