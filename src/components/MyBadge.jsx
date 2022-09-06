// Crea un componente chiamato MyBadge che riceva sia una stringa di testo che un colore come prop.

// Questo componente dovrà renderizzare un componente Badge con quelle proprietà.

import { Badge, Button } from "react-bootstrap";

const MyBadge = (props) => (
    <Button variant="secondary">
        Esempio: <Badge variant={props.color}>{props.text}</Badge>
        <span className="sr-only">unread messages</span>
    </Button>
);

export default MyBadge;
