import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
/*
const CoreConcepts = (props) => {
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}; */

/** Using destructuring index */
const CoreConcept = ({ title, image, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

const Header = () => {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <li>
              <img src={CORE_CONCEPTS[0].image} alt={CORE_CONCEPTS[0].title} />
              <h2>{CORE_CONCEPTS[0].title} </h2>
              <p>{CORE_CONCEPTS[0].description}</p>
            </li>
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
