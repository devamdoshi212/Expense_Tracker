import "./Card.css";
function Card(props) {
  const Classes = "card " + props.className;
  // adding this bcoz Card component send all data between <Card> data </Card> and after all this come in Card component class of that div will card so pervious class name correput so we add previous class and class card like this..
  return <div className={Classes}>{props.children}</div>;
}

export default Card;
