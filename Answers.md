# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

1. What does it mean to think in react?
One of the many great parts of React is how it makes you think about apps as you build them. 
Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow


1. Describe state.
In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.

1. Describe props.
Props make react component reusable so you can use the same component with different data every time.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. In React class components, the render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.
When building a component using React there is often a requirement to create a side effect when one of the component props changes. This could be a call to an API to fetch some data, manipulating the DOM, updating some component state, or any number of things. 
