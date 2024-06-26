# React App 

This app is made while learning React from Namaste React website.

*I focused on React only, styling(CSS) may not look good*


- Used JSX to generate page markup.
- Used `Funcitonal Component` to work with JSX.
- Used curly-brace to add inline CSS into markup.
- Used `props` to render data dynamically.
- Used `Hooks` - (Hooks are just normal JS functions)
- Used `react-router-dom` to follow Single Page Applicatioin (SPA) paradigm. There are two types of routing:- Client side routing and Server side routing.
- Used lazy loading to load Cart component. As lazy() function allows to load the component asynchronously, React Router may throw an error as it can't find the component at the moment of rendering. We need to use `<Suspense>` component to prevent that and use a fallback attribute.
    ```javascript
    (<Suspense fallback={/* fallback code here */}>
        <Component />
    </Suspense>)
    ```
    >There are different names for Code Optimization: Chunking, Lazy loading, Dynamic bundling, Code splitting, On-demand loading, Dynamic importing etc.

### Life Cycle of a Class based component

constructor() => render() => componentDidMount();

As expected from a class, constructor() function will get called first and do the specified work. Then render() method will be invoked to paint the JSX in the DOM. After the whole JSX is loaded and painted to DOM, the componentDidMount() will get called. Usuallly we use componentDidMount() to make API calls.

If there is more than one child component inside a parent class component: then all the component will complete their render first, then they will be mounted one by one. React optimizes the render phase to reduce the overall load of website by `batching` all the render phases in different childs.

We can make API calls through componentDidMount() method, even in asynchronous way. In order to make an async call just create the componentDidMount() function async:
```javascript
async componentDidMount(){
    const data = await fetch('random link');
}
```
Then when the state is updated, React triggers re-rendering and updates the DOM with new value. Then a new method gets invoked; componentDidUpdate():
```javascript
componentDidUpdate(){
    console.log("Component re-renders and updated");
}
```
And at the end when we leave the page, when the component is removed from DOM Tree, componentWillMount() method will be invoked.

### Lifting the State Up

Sometimes, you want the state of two components to always change together. To do it efficiently, remove state from both of them, move it to their closest common parent, and then pass it down to childrens via props. This is known as **lifting state up**.
> An Accordion would be an example of lifting state up.
\
\
![Lifting the State](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_lifting_state.dark.png&w=640&q=75)

### Props Drilling

But passing props down to children from parents can be troublesome and repeatative. if you have to pass them through many components in the middle, or if many component need the same information, State Lifting becomes inconvenient. The nearest common ancestor could have far removed from the components that need data, and lifting the state that **high** can led to a situation called `Props Drilling`.
\
\
![Props Drilling](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=640&q=75)

### Use Context
To avoid Prop drilling, there is another method we can use is called contextAPI. To create a context:
```js
import {createContext} from 'react';
const myContext = createContext("default context");
```
Then we can use this context in two ways:
- We can use a hook called `useContext()` that react provides.
    ```js
    import myContext from './src';
    import {useContext } from 'react';

    const myDataContext = useContext(myContext);
    console.log(myDataContext); // Output: "default context"
    ```
    To use the same context all over the application use `<contextName.Provider>` to wrap the whole app:
    ```js
    import myContext from './src';

    <myContext.Provider value={{valueOfTheContext}}>
        <App />
    </myContext.Provider>
    ```
- In case of a class based component, we need to follow another way. We need to use `<contextName.Consumer>` to handle the context varaibles. It takes a callback function which can access the context value.
    ```js
    import myContext from './src';
    
    <myContext.Consumer>
        {(data) => {
            console.log(data); // Output: "default context"
        }}
    </myContext.Consumer>

    // 'data' that passed as parameter inside callback function is the context value.
    ```


## Redux Toolkit

Redux is a pattern and library for managing and updating application state, using events called "actions". The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.

> Redux helps you to manage 'global' state - a state that is needed across anywhere in the entire application.

**Redux Tookit** is recommended approach to write Redux logic in the App.

Read about Redux Toolkit [here](https://redux-toolkit.js.org/)

A little explanation on Redux architecture:

![redux structure explanation](./Redux%20architecture.png)

### TODO
- Install Redux toolkit : @reduxjs/toolkit
- Build a Redux Store
- Connect the store to the app
- create data slices
- dispatch an action
- use selector to update the state

### createSlice

createSlice is a function that receives an initial state, an object of reducer function and a slice name. It automaticlly generates action creators and action types that corresponds to the reducers and state.

**Parameters**
- `initialState`: The initial value of the slice of state.
- `name`: The name of this slice of state.
- `reducers`: An object containing Redux 'case reducer' functions; functions that are intended to handle a specific action type, similar to a 'case' in a switch statement. Reducers funcation can mutate the states.\
The keys in this object will be used to generate string action type constants, and these action will show up in 'Redux Devtool' extension when they are 'dispatched'. If any other part of the application happens to despatch an acton with the same string type, the corresponding reducer will run.

    ```javascript
    import {createSlice} from '@reduxjs/toolkit';

    const slices = createSlice({
        name: "Counter",
        initialState: 0,
        reducers: {
            increment: function(state) { // state parameter is 'initialState'
                return state + 1;
            },
        }
    })

    // This slice will handle 'Counter/increment' action.
    ```
    Each reducer function takes a 'state' and an 'action' parameter that represents the 'initialState' and the action respectively.

    ```js
    reducers: {
            increment: function(state, action) {
                console.log(action);
                return state + 1;
            },
        }
    ```

`useSelector` hook lets you **subscribe to the store**, which is adding change listener to the store. This hook allows you to extract data from the Redux store 'state' to use in the component, using a selector function as it's first argument.

`useDispatch` hoook lets you dispatch an action and returns a function. Whatever you will pass in the action will go the reducer functions in the slices and you can access the value in 'action.payload'.\
Whenever a certain action is dispatched, redux will create an object with two properties: type (the action type) and payload (what is passed with the action).

Some points to note about redux-toolkit:
- Use the useSelector() hook carefully. Subscribe only to the right element, element that you need to subscribe, not it's parent or anything else.
- Previously redux didn't allow us to modify the state in a slice, we had to made a copy of the state and then working with duplicate version of the state. And it was mandatory to return the state. But redux-toolkit insists to modify the state (but behind the scene redux does all the ancient methods on state so that developers don't have to do it) and it doesn't require to return anything.
- Redux uses 'Immer' behind the scene to manage (write and modify immutable) states. **Immer** (German for: *always*) is a tiny package that allows you to work with immutable state in a more convenient way.
- `current`: It is function from 'Immer' library, which takes a snapshot of the current state of a slice. This function is widely used to print the current state during debugging. The state it returns is read-only, you cannot modify the current state.
    ```javascript
    sliceReducer: function(state, action) {
        const currentState = current(state);
        console.log(currentState);
    }
    ```
- Redux allows us to either mutate the original state or return a new state.

# Vitest - Testing

Install vitest as Dev-dependency:
```bash
npm i -D vitest
```
Add a new script in the `package.json` file:
```json
"script": {
    "test": "vitest"
}
```
As we are using *vite* we don't need to install `jsdom` (an environment to rener markup for testing), we can just configure in `vite.config.js` file:
```js
test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__test__/setup.js'], // a file that can be used as primary setup file for vitest
  }

  // create a setup file and write followings:
 import { cleanup } from "@testing-library/react";
 import { afterEach } from "vitest";
 import "@testing-library/jest-dom/vitest";

 afterEach(() => {
   cleanup();
 });

 // create a test file with .test.js/jsx extension
 import { describe, it, expect } from "vitest";
 import sum from './sum.js';

 describe("Sum function", () => {
    it("checks the sum function", () => {
        expect(sum(2, 3)).toBe(5);
    })
 })
```
We can test our files without installing any other libraries. Create a file with a suffix 'test', e.g *App.test.jsx*

Then we need to install additional library - React Testing Library (RTL):
```bash
npm install -D @testing-library/jest-dom @testing-library/react
```
RTL provides some utility functin such as *render*, *screen* etc. We can use them while testing.

Essentially, a unit test is a method that instantiates a small portion of our application and verifies its behavior independently from other parts. A typical unit test contains 3 phases: First, it initializes a small piece of an application it wants to test (also known as the system under test, or SUT), then it applies some stimulus to the system under test (usually by calling a method on it), and finally, it observes the resulting behavior. If the observed behavior is consistent with the expectations, the unit test passes, otherwise, it fails, indicating that there is a problem somewhere in the system under test. These three unit test phases are also known as `Arrange`, `Act` and `Assert`, or simply **AAA**.

This is a test case for a React component:
```js
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { describe } from "vitest";
import Header from "../components/Header"

describe("Header component", () => {
    it("should render header component", () => {
        // Rendering the compoent to screen (ARRANGE)
        render(<Header />);

        // Get/Query/Find something in that renderd component (ACT)
        const heading = screen.getByTextContent("My Heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    })
});
```
> If the compoent uses some external libraries/functions such as redux-toolkit, react-router-dom etc. It is mandatory to importh them in the test file also. Otherwise the test will fail in the Arrange phase (while rendering).
```js
/* Other imports */
import { Provider } from "redux-toolkit";
import { BrowserRouter } from "react-router-dom";
imporst { appStore } from "./utls/reduxStore/appStore.js";

/* Other codes here */
render(
 <BrowserRouter>
     <Provider store={appStore}>
         <Header />
     </Provider>
 </BrowserRouter>
)
```
- We can use getByTestId() to get an element by providing a dataset attribute to the element:
```js
<p data-testid="my-para">React is the best.</p>

// inside test file
screen.getByTestId("my-para");
```

`fireEvent`: A functionality provided by React Testing library, used for simulating an event fire while, for example, clicking on a button.
```js
// Syntax
fireEvent.eventName(targetElement, {
    /* It is an object simulating what we get inside a event listner function
    e.g {targe : { value: "Burger" }} simulates e.target.value = "Burger" in an usual js envent listner
    */ 
})
```
- You can simulate a fetch async funtion in test file:
```js
import { vi } from "vitest";
import { MOCK_DATA } from "data.json";

global.fetch = vi.fn(() => {
    return {
        json: () => new Promise(resolve => resolve(MOCK_DATA));
    };
});
```

A coverage report for the application:
![coverage-report](./public/img/coverage-report.png)