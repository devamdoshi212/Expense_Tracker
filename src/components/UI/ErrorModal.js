import Card from "./Card";
import Modalstyling from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={Modalstyling.backdrop} onClick={props.OnErrorModal} />
      <Card className={Modalstyling.modal}>
        <header className={Modalstyling.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={Modalstyling.content}>{props.info}</div>
        <footer className={Modalstyling.actions}>
          <button onClick={props.OnErrorModal}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
