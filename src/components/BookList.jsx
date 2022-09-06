// Crea un componente BookList. Questo componente riceverà dalle prop una lista di libri da visualizzare utilizzando il componente SingleBook.

// Crea una funzione filterBookList. Scrivendo una stringa di ricerca dentro un campo input, il componente BookList dovrà renderizzare solo i libri contenente la stringa cercata come titolo del libro (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        search: "",
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.filterBookList}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Cerca un libro..."
                            value={this.state.search}
                            onChange={(e) => {
                                console.log(e.target.value);
                                this.setState({
                                    search: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                </Form>
                <Row>
                    {this.props.books
                        .filter((book) =>
                            book.title.toLowerCase().includes(this.state.search)
                        )
                        .map((book, index) => {
                            return (
                                <Col key={index}>
                                    <SingleBook
                                        book={book}
                                        setAsin={this.props.setAsin}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        );
    }
}

export default BookList;
