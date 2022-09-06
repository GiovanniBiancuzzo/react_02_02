// Crea un componente BookList. Questo componente riceverà dalle prop una lista di libri da visualizzare utilizzando il componente SingleBook.

// Crea una funzione filterBookList. Scrivendo una stringa di ricerca dentro un campo input, il componente BookList dovrà renderizzare solo i libri contenente la stringa cercata come titolo del libro (suggerimento: salva la stringa di ricerca dentro allo stato del componente BookList e filtra i libri di conseguenza).

import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
    const [search, setSearch] = useState("");

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Cerca un libro..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </Form.Group>
            </Form>
            <Row>
                {props.books
                    .filter((book) => book.title.toLowerCase().includes(search))
                    .map((book, index) => {
                        return (
                            <Col key={index}>
                                <SingleBook
                                    book={book}
                                    setAsin={props.setAsin}
                                />
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
};

export default BookList;
