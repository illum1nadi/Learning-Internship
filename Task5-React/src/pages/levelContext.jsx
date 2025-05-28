import { useContext } from 'react';
import { createContext } from 'react';

const LevelContext = createContext(0);

function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}



function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}

//use context is syntactic sugar to avoid the excessive syntax during prop drilling.
//It allows you to pass data through the component tree without having to pass props down manually at every level.
//This is useful for global data that many components need access to, such as themes, user information, or in this case, heading levels.
//The createContext function creates a Context object, which can be used to share values between components without having to pass props down manually at every level.
//The useContext hook allows you to access the current value of a Context object, which is provided by a parent component using the Context.Provider component.
//The LevelContext.Provider component is used to provide a value for the context, which can be accessed by any child component that uses the useContext hook.

export default function Page() {
  return (
    <>

        <p>Css issue in the actual page but if i inspect tags are different :</p>
        <Section>
            <Heading>Title</Heading>
            <Section>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Heading>Heading</Heading>
                <Section>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Heading>Sub-heading</Heading>
                    <Section>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    <Heading>Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    </>
  );
}
