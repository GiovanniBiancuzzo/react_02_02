// AddComment contiene un form per aggiungere il testo del commento e il voto(da 1 o a 5). Questo componente dovrà permettere all’utente di fare la POST del nuovo commento sul libro selezionato.[EXTRA]

import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
    state = {
        comment: "",
        rate: "",
        elementId: this.props.comment,
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Invio prenotazione");
        fetch("https://striveschool-api.herokuapp.com/api/comments", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYTZlN2VkZDY3ODAwMTUwN2Q3NDQiLCJpYXQiOjE2NjIwMzU2ODcsImV4cCI6MTY2MzI0NTI4N30.Jdt46faBQ3TI1LhM97_vn-rp35fLjIBwYaQ8QCw8-Zw",
            },
        })
            .then((res) => {
                if (res.ok) {
                    alert("Commento inviato correttamente");
                    this.setState({
                        comment: "",
                        rate: "",
                    });
                } else {
                    alert("Errore nell'invio del commento");
                }
            })
            .catch((error) => {
                console.log("Qualcosa è andato storto", error);
            });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("did update in add comment");
        if (prevProps.comment !== this.props.comment) {
            //il vecchio asin è diverso dal nuovo, appena arrivato? se si settalo come nuovo e ricarica il componente
            this.setState({
                elementId: this.props.comment,
            });
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Aggungi un commento"
                        value={this.state.comment}
                        onChange={(e) => {
                            this.setState({
                                comment: e.target.value,
                                // elementId: this.props.comment,
                            });
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Vota</Form.Label>
                    <Form.Control
                        as="select"
                        value={this.state.rate}
                        onChange={(e) => {
                            this.setState({
                                rate: e.target.value,
                                // elementId: this.props.comment,
                            });
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
    }
}

export default AddComment;
