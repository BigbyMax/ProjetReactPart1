import React, { Component } from 'react';
import {LineChart, Line, XAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Row,Col,
Jumbotron,Button} from 'reactstrap';
import LineCharter from './Widget/linechart';
import PieCharter from './Widget/piechart';
import Counter from './Widget/counter';
import Humidity from './Widget/humidity';
import Hour from './Widget/hour';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 500, pv: 2100, amt: 2400},
{name: 'Page C', uv: 375, pv: 0, amt: 2400}];

const renderLineChart = <LineCharter temps={data}/>;
const count = 5;
const data01 = [{name: 'Jour', value: 11}, {name: "Nuit", value: 13}];
const renderPieChart = <PieCharter ratio={data01}/>;

//const compteur = <Counter clicks={count}/>;


class App extends Component {

    constructor(props) {

        super(props);

        this.UpdateCounter = this.UpdateCounter.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            counter : 0,
            isOpen: false

        };
        

    }

    UpdateCounter(){
        this.setState({counter: this.state.counter + 1});
    }

    toggle() {

        this.setState({

            isOpen: !this.state.isOpen

        });

    }

    render() {

        return (

            <div>

                <Navbar color="inverse" light expand="md">

                    <NavbarBrand href="/">Dashboard</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>

                            <NavItem>

                                <NavLink href="/components/">Components</NavLink>

                            </NavItem>

                            <NavItem>

                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>

                            </NavItem>

                        </Nav>

                    </Collapse>

                </Navbar>

                    <Container>

                        <Row>
                            <Jumbotron>
                            <Col>

                                <p>Graphique</p>
                                {renderLineChart}
                            </Col>
                            </Jumbotron>
                            <Jumbotron>
                            <Col>
                                <p>
                                    Camembert Jour/nuit
                                </p>
                                
                                {renderPieChart}
                            </Col>
                            </Jumbotron>

                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    compteur de clics
                                </p>
                                <h3>Nombre de clics : {this.state.counter}</h3>
                                <Counter clicks={this.UpdateCounter}></Counter>
                            </Col>
                            <Col>
                                <p>
                                    Taux d'humidité
                                </p>
                                <Humidity/>
                            </Col>
                            <Col>
                                <p>
                                    Météo Actuelle  
                                </p>
                            </Col>
                            <Col>
                                <p>
                                    Heure  
                                </p>
                                <Hour></Hour>
                            </Col>
                        </Row>

                    </Container>


            </div>

        );

    }

}



export default App;