import { Component } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    state = {};

    deleteComment = () => {
        fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${this.props.commentElement._id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYTZlN2VkZDY3ODAwMTUwN2Q3NDQiLCJpYXQiOjE2NjIwMzU2ODcsImV4cCI6MTY2MzI0NTI4N30.Jdt46faBQ3TI1LhM97_vn-rp35fLjIBwYaQ8QCw8-Zw",
                },
            }
        )
            .then((res) => {
                if (res.ok) {
                    alert("Commento cancellato correttamente");
                } else {
                    alert("Errore nella cancellazione del commento");
                }
            })
            .catch((error) => {
                console.log("Qualcosa è andato storto", error);
            });
    };

    render() {
        return (
            <ListGroup.Item>
                <div>
                    Voto:{" "}
                    <Badge variant="warning">
                        {this.props.commentElement.rate}
                    </Badge>
                    <Button variant="danger" onClick={this.deleteComment}>
                        Cancella commento
                    </Button>
                </div>
                <br></br>
                {this.props.commentElement.comment}
            </ListGroup.Item>
        );
    }
}

export default SingleComment;
