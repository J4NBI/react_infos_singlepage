import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState()
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setTabContent(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem,index) => {
              return (
                <CoreConcept key={index}
                  {...conceptItem}
                  // image={e.image}
                  // title={e.title}
                  // description={e.description}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
            {!tabContent ? <p>Please select a topic.</p> : (<div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre> </div>) }
            
        </section>
      </main>
    </div>
  );
}

export default App;
