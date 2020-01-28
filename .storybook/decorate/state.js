// Component 1
const Stage = ({ children, ...restProps }) => {
    const [state, setState] = useState({});
    return <div {...restProps}>{children(state, setState)}</div>;
  }

  // Component 2
const State = ({ state, ...restProps }) => {
    return (
      <div {...restProps}>
        Parent state: <pre>{JSON.stringify(state)}</pre>
      </div>
    );
  }

  // Custom decorator
export const DecorateState = story => (
    <Stage>
      {(state, setState) => (
        <div style={{ display: "flex", flexFlow: "column" }}>
         {story(state, setState)}
         <State state={state} />
        </div>
      )}
    </Stage>
  )
