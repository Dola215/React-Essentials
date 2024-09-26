import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton';
import { TABS_CONTENT } from './data';
import { EXAMPLES } from './data';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState();

  const handleClick = (newText) => {
    setContent((prev) => (prev = newText));
  };

  const tabs = TABS_CONTENT.map((ele, idx) => {
    return (
      <TabButton key={idx} onClick={handleClick} ele={ele} content={content}>
        {ele}
      </TabButton>
    );
  });

  let tabContent = 'please click a button';

  if (content) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[content].title}</h3>
        <p>{EXAMPLES[content].description}</p>
        <pre>
          <code>{EXAMPLES[content].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id='examples'>
          <h2>Examples</h2>
          <menu>{tabs}</menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
