import React, { Component } from 'react';
import { getCryptoRankings, getSearchResults, SearchExtension } from './dataGrab';

import {
    Collapse, Card, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button, Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
const request = require('axios');


class App extends Component {
    constructor(props) {
        super(props);
        // getCryptoRankings(); 
        this.toggle = this.toggle.bind(this);
        // this.dataPull = this.dataPull.bind(this);
        this.state = {
            isOpen: false,
            data: []
        };
    }
    toggle() {
      console.log("toggle bbbb");
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
    dataPull() {
      console.log("hello im being called");
      // getCryptoRankings(); 
      this.setState({
        data: JSON.parse(localStorage.getItem("cryptoData")).cryptoInfo
      });
    }

    getCryptoData() {
      request
      .get('https://api.coinmarketcap.com/v2/ticker/?sort=rank&structure=array', {crossdomain: true})
      .then(function (response) {
          // console.log(response.data.data);
          var cryptoData = {};
          var cryptoInfo = [];
          let listLength = response.data.data.length;

          cryptoData.cryptoInfo = cryptoInfo;
          var i;
          for(i = 0; i < listLength; i++) {
              var name = response.data.data[i].name;
              var symbol = response.data.data[i].symbol;
              var rank = response.data.data[i].rank;
              var price = response.data.data[i].quotes.USD.price;
              var percent_change_1hr = response.data.data[i].quotes.USD.percent_change_1h;
              var percent_change_7d = response.data.data[i].quotes.USD.percent_change_7d;
              var percent_change_24hr = response.data.data[i].quotes.USD.percent_change_24h;
              
              var detailedCryptoInfo = {
                  "name": name,
                  "symbol": symbol,
                  "rank": rank,
                  "price": price,
                  "percent_change_1h": percent_change_1hr,
                  "percent_change_7d": percent_change_7d,
                  "percent_change_24h": percent_change_24hr
              }
              cryptoData.cryptoInfo.push(detailedCryptoInfo);
          }
          console.log("crypto data is " + cryptoData);
          // return cryptoData;
          // this.setState({
          //   data: cryptoData.cryptoInfo
          // })
          localStorage.setItem("cryptoData", JSON.stringify(cryptoData));
          // return cryptoData;
          this.dataPull()
      })
      .catch(function (error) {
          console.log(error);
      })
}

    componentDidMount() {
      // let tempIdea = 
      this.getCryptoData();
      // console.log("crptodata out of function is " + tempIdea);
      // this.getCryptoRankings()
      // .then((data) => {
      //   // console.log('This happens 7th.');
      //   this.setState({
      //     data: data.cryptoInfo
      //   });
      // });
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