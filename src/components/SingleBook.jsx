// Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.
// Usa le Card di react-bootstrap per renderizzare il libro (l’oggetto del libro può esser letto da un file .json che hai ricevuto ieri).
// Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana highlighted.
// Cliccare sul SingleBook dovrà fare il toggle della proprietà highlighted. Se la proprietà highlighted sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente.

import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

const SingleBook = (props) => {
    const [highlighted, setHighlighted] = useState(false);

    return (
        <Container>
            <Card
                style={{
                    width: "18rem",
                    border: highlighted
                        ? "10px solid #dc3545"
                        : "3px solid #212529",
                }}
            >
                <Card.Img variant="top" src={props.book.img} />
                <Card.Body>
                    <Card.Title>{props.book.title}</Card.Title>
                    <Card.Text>
                        <b>Genere</b>: {props.book.category}
                    </Card.Text>
                    <Card.Text>
                        <b>ASIN</b>: {props.book.asin}
                    </Card.Text>
                    <Button
                        variant="primary"
                        onClick={() =>
                            setHighlighted(highlighted === false ? true : false)
                        }
                    >
                        {props.book.price} €
                    </Button>
                    <Button
                        variant="warning"
                        onClick={() => {
                            props.setAsin(props.book.asin);
                        }}
                    >
                        Commenti
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};
export default SingleBook;
