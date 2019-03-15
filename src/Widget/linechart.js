import React, { Component } from 'react';
import {LineChart, Line, CartesianGrid, XAxis} from 'recharts';

class LineCharter extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        const datum = this.props.temps;
        return(
            <LineChart width={350} height={350} data={datum}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc"></CartesianGrid>
            <XAxis dataKey="name" />
            </LineChart>
        );
    }
}

export default LineCharter;