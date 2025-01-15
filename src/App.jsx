import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (text) => {
    setSelectedTopic(text);
  };

  /**  method 3
    let tabContent = <p>Please select topic</p> 
    
    if(selectedTopic){
      tabContent = (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>)
    }
   */

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
              /* attributes */
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/*text btw component tags - in props.children */}
            <TabButton onSelect={() => handleSelect("components")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {/**Method 1 */}
          {!selectedTopic && <p>Please select topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/** OR method 2:  {!selectedTopic ? <p> Please select topic </p> : <div id="tab-content"> ...</>} */}
          {/** OR method 3: {tabContent} */}
        </section>
      </main>
    </div>
  );
};

export default App;
