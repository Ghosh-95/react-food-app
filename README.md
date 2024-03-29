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