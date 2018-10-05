import React, { Component } from 'react';
import { getCryptoRankings } from './dataGrab';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    Table,
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
      getCryptoRankings(); 
    }

    _renderTableRow(crypto, i) {
      const {name, symbol, price, rank, percent_change_1hr, percent_change_24hr, percent_change_7d } = crypto;
      console.log(crypto);
      return (
          <tr>
            <th scope="row">{rank}</th>
            <td>{name} ({symbol})</td>
            <td>${price} / {symbol}</td>
            <td>{percent_change_1hr}%</td>
            <td>{percent_change_24hr}%</td>
            <td>{percent_change_7d}%</td>
          </tr>
      );
    }
    
    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Cypto Boy</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to Crypto Boy</h1>
                                {/* <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p> */}

                                  <Table hover>
        <thead> 
          <tr>
            <th>Rank</th>
            <th>Cryptocurrency</th>
            <th>Exchange Rate (USD$)</th>
            <th>Price Change (1 Hour)</th>
            <th>Price Change (24 Hours)</th>
            <th>Price Change (7 Days)</th>
          </tr>
        </thead>
        <tbody>
        {/* <tr> */}
            {/* <th scope="row">ddd</th>
            <td>d</td>
            <td>$</td>
          </tr> */}
          { (JSON.parse(localStorage.getItem("cryptoData")).cryptoInfo).map(this._renderTableRow)}
        </tbody>
      </Table>
                                {/* </p> */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;