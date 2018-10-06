import React, { Component } from 'react';
import { getCryptoRankings, getSearchResults, SearchExtension } from './dataGrab';
import Omnibar from 'omnibar';
// import Foo from './Foo';
// import Bar from './Bar';
import {
    Collapse, Card, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  ScatterSeries,
  ArgumentGrid,
  BarSeries,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-bootstrap4';
// import { Scale } from '@devexpress/dx-react-chart';

class App extends Component {
    constructor(props) {
        super(props);
        // getCryptoRankings(); 
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            data: (JSON.parse(getCryptoRankings)).cryptoInfo
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // componentDidMount() {
      // getCryptoRankings(); s
    // }

    _renderTableRow(crypto, i) {
      const {name, symbol, price, rank, percent_change_1h, percent_change_24h, percent_change_7d } = crypto;
      console.log(crypto);
      return (
          <tr>
            <th scope="row">{rank}</th>
            <td>{name} ({symbol})</td>
            <td>${price}</td>
            <td>{percent_change_1h}%</td>
            <td>{percent_change_24h}%</td>
            <td>{percent_change_7d}%</td>
          </tr>
      );
    }
    
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