import React, { Component } from 'react';

class Hour extends Component {
    constructor(props){
        super(props);
        this.state={time:new Date()};
    };

    updatedTime() {
        this.setState({
            time:  new Date()
        })
    }

    componentWillMount(){
        setInterval(()=> this.updatedTime(), 1000)
    }
    render() {
    

    return (
        <h3>
            {this.state.time.toLocaleTimeString()}
        </h3>
    )
    }
    
}
export default Hour;