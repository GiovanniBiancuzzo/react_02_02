import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import scifi from '../src/data/scifi.json';
import BookList from './components/BookList';
import CommentsArea from './components/CommentsArea';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Component } from 'react';


class App extends Component {

  state = {
    asin: ''
  };


  setAsin = (asin) => {
    this.setState({ asin: asin });
  };

  render () {
    return (
      <div className='App'>

        {/* <WarningSign alert="Alert di React Bootstrap" />
        <MyBadge text="Questo è un badge personalizzato" color="success" /> */}
        <Container fluid>
          <Jumbotron fluid>
            <Container>
              <h1>Strive Books</h1>
              <p>
                Libreria scifi open-source commentabile
              </p>
            </Container>
          </Jumbotron>
          <Row>
            <Col><BookList books={scifi} setAsin={this.setAsin} /></Col>
            <Col xs={6} lg={4}><CommentsArea asin={this.state.asin} setAsin={this.setAsin} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
