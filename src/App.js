import React, { Component } from 'react';
import { getCryptoRankings, getSearchResults, SearchExtension } from './dataGrab';

import {
    Collapse, Card, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";


class App extends Component {
    constructor(props) {
        super(props);
        // getCryptoRankings(); 
        this.toggle = this.toggle.bind(this);
        this.dataPull = this.dataPull.bind(this);
        this.state = {
            isOpen: false,
            data: []
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
    dataPull() {
      getCryptoRankings(); 
      this.setState({
        data: JSON.parse(localStorage.getItem("cryptoData")).cryptoInfo
      });
    }

    // componentWillMount() {
      // getCryptoRankings();
    // }

    render() {
      const { data } = this.state;
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Cypto Boy</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to Crypto Boy</h1>
                                <h4>Mady by Dominick Hera</h4>
                                <ReactTable
                                          data={data}
                                          columns={[
                                            {
                                              Header: "Data",
                                              columns: [
                                                {
                                                  Header: "Rank",
                                                  accessor: "rank"
                                                },
                                                {
                                                  Header: "Name",
                                                  id: "name",
                                                  accessor: d => d.name
                                                },
                                                {
                                                  Header: "Exchange Rate (USD$)",
                                                  accessor: "price"
                                                },
                                                {
                                                  Header: "Percent Change (1 Hour)",
                                                  accessor: "percent_change_1h"
                                                }
                                                ,
                                                {
                                                  Header: "Percent Change (24 Hours)",
                                                  accessor: "percent_change_24h"
                                                },
                                                {
                                                  Header: "Percent Change (7 Days)",
                                                  accessor: "percent_change_7d"
                                                }
                                              ]
                                            }
                                          ]}
                                          defaultPageSize={10}
                                          className="-striped -highlight"
                                        />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;