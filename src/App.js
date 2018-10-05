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
    
    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Cypto Boy</NavbarBrand>
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
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col>
                                <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>

                                  <Table hover>
        <thead> 
          <tr>
            <th>Rank</th>
            <th>Cryptocurrency</th>
            <th>Exchange Rate(USD$)</th>
            {/* <th>Username</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            {/* <td>@fat</td> */}
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Larry</td>
            <td>the Bird</td>
            {/* <td>@twitter</td> */}
          </tr>
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