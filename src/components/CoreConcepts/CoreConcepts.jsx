import { CORE_CONCEPTS } from '../../data';
import CoreConcept from './CoreConcept';
const CoreConcepts = () => {
  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((ele, idx) => {
          return (
            <CoreConcept
              key={idx}
              image={ele.image}
              title={ele.title}
              description={ele.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default CoreConcepts;
