import Concept from "./Concept";

function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept
        image={props.items[0].image}
        alt={props.items[0].title}
        title={props.items[0].title}
        description={props.items[0].description}
      />
      <Concept
        image={props.items[1].image}
        alt={props.items[1].title}
        title={props.items[1].title}
        description={props.items[1].description}
      />
      <Concept
        image={props.items[2].image}
        alt={props.items[2].title}
        title={props.items[2].title}
        description={props.items[2].description}
      />
    </ul>
  );
}

export default Concepts;
