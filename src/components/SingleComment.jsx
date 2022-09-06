import { Badge, Button, ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
    const deleteComment = () => {
        fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${props.commentElement._id}`,
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

    return (
        <ListGroup.Item>
            <div>
                Voto:{" "}
                <Badge variant="warning">{props.commentElement.rate}</Badge>
                <Button variant="danger" onClick={deleteComment}>
                    Cancella commento
                </Button>
            </div>
            <br></br>
            {props.commentElement.comment}
        </ListGroup.Item>
    );
};

export default SingleComment;
