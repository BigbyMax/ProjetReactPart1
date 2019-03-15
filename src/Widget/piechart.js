import React, { Component } from 'react';
import {PieChart, Pie, } from 'recharts';

class PieCharter extends Component {
    constructor(props){
        super(props);
    };
    render() {
        const data = this.props.ratio;
        return (
            <PieChart width={350} height={350}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      </PieChart>
        );
    };
}
export default PieCharter;