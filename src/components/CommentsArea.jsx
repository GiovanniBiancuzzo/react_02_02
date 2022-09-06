// Aggiungi un componente CommentArea alla fine del tuo SingleBook. Quando l’untente cliccherà su un SingleBook, i commenti dovranno apparire (suggerimento: short-circuit operator!).

// CommentArea dovrà fare il fetch dei dati e salvare i commenti del libro selezionato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

// CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, l’array di commenti verrà passato come prop dal componente CommentArea. Ogni commento sarà sempre un componente SingleComment.
import { Component } from "react";
import { Spinner } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentsArea extends Component {
    render() {
        return (
            <>
                {this.props.asin ? (
                    <div className="stickyComments">
                        <AddComment comment={this.props.asin} />
                        <CommentsList commentsList={this.props.asin} />
                    </div>
                ) : (
                    <div className="stickyComments">
                        <h2>
                            Clicca sul pulsante <code>Commenti</code> di un
                            libro a tua scelta
                        </h2>
                        <Spinner animation="grow" variant="warning" />
                    </div>
                )}
            </>
        );
    }
}

export default CommentsArea;
