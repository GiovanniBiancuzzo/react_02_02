// AddComment contiene un form per aggiungere il testo del commento e il voto(da 1 o a 5). Questo componente dovrà permettere all’utente di fare la POST del nuovo commento sul libro selezionato.[EXTRA]

import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
    // const [comment, setComment] = useState("");
    // const [rate, setRate] = useState("");
    // const [elementId, setElementId] = useState(props.comment);

    const [commentElement, setCommentElement] = useState({
        comment: "",
        rate: "",
        elementId: props.comment,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Invio commento");
        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            body: JSON.stringify(commentElement),
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYTZlN2VkZDY3ODAwMTUwN2Q3NDQiLCJpYXQiOjE2NjIwMzU2ODcsImV4cCI6MTY2MzI0NTI4N30.Jdt46faBQ3TI1LhM97_vn-rp35fLjIBwYaQ8QCw8-Zw",
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Commento inviato correttamente");
                    setCommentElement("");
                    props.show(false);
                } else {
                    alert("Errore nell'invio del commento");
                }
            })
            .catch((error) => {
                console.log("Qualcosa è andato storto", error);
            });
    };

    useEffect(() => {
        console.log("did update in add comment");
        setCommentElement({
            ...commentElement,
            elementId: props.comment,
        });
        // setElementId(props.comment);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.comment]);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Aggungi un commento"
                    value={commentElement.comment}
                    onChange={(e) => {
                        setCommentElement({
                            ...commentElement,
                            comment: e.target.value,
                        });
                    }}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Vota</Form.Label>
                <Form.Control
                    as="select"
                    value={commentElement.rate}
                    onChange={(e) => {
                        setCommentElement({
                            ...commentElement,
                            rate: e.target.value,
                        });
                        // setRate(e.target.value);
                    }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit">
                Invia commento
            </Button>
        </Form>
    );
};

export default AddComment;
