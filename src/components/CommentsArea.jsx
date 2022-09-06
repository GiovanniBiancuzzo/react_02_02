// Aggiungi un componente CommentArea alla fine del tuo SingleBook. Quando l’untente cliccherà su un SingleBook, i commenti dovranno apparire (suggerimento: short-circuit operator!).

// CommentArea dovrà fare il fetch dei dati e salvare i commenti del libro selezionato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

// CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, l’array di commenti verrà passato come prop dal componente CommentArea. Ogni commento sarà sempre un componente SingleComment.
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

const CommentsArea = (props) => {
    const [showAddComment, setAddShowComment] = useState(false);

    return (
        <div className="stickyComments">
            {props.asin ? ( //c'è un asin? si mostra la commentarea, no mostra uno spinner(riga39)
                <>
                    {showAddComment ? ( //mostra addcommentcomponent o button + lista commenti
                        <AddComment
                            // className=""
                            comment={props.asin}
                            show={setAddShowComment}
                        />
                    ) : (
                        <>
                            <Button
                                variant={"warning"}
                                onClick={() => setAddShowComment(true)}
                            >
                                Aggiungi un commento
                            </Button>
                            <CommentsList commentsList={props.asin} />
                        </>
                    )}
                </>
            ) : (
                <>
                    <h2>
                        Clicca sul pulsante <code>Commenti</code> di un libro a
                        tua scelta
                    </h2>
                    <Spinner animation="grow" variant="warning" />
                </>
            )}
        </div>
    );
};

export default CommentsArea;
