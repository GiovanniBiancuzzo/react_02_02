// Crea un componente chiamato WarningSign che riceva una stringa dalle prop.

// Questo testo dovrà essere visualizzato all’interno di un componente Alert di react-bootstrap di tipo danger.

import { Alert } from "react-bootstrap";

const WarningSign = (props) => <Alert variant="danger">{props.alert}</Alert>;

export default WarningSign;
