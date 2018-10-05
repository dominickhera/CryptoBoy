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
          // <tr>
          <tr class="gradeA odd" role="row">  
            {/* <th scope="row">{rank}</th> */}
            <td class="sorting_1">{rank}</td>
            <td>{name} ({symbol})</td>
            <td>${price}</td>
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

                                 <table width="100%" class="table table-striped table-bordered table-hover dataTable no-footer dtr-inline" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info" style="width: 100%;">
                                <thead>
                                    <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Ranking: activate to sort column descending" style="width: 69px;">Ranking</th><th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Cryptocurrency: activate to sort column ascending" style="width: 80px;">Cryptocurrency</th><th class="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Exchange Rate (USD$): activate to sort column ascending" style="width: 75px;">Exchange Rate (USD$)</th></tr>
                                </thead>
                                <tbody>

                                {/* <tr class="gradeA odd" role="row">  
                                        <td class="sorting_1">Gecko</td>
                                        <td>Firefox 1.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td class="center">1.7</td>
                                        <td class="center">A</td>
                                    </tr>  */}
                                    { (JSON.parse(localStorage.getItem("cryptoData")).cryptoInfo).map(this._renderTableRow)}
                                    </tbody>
                            </table>
      
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

