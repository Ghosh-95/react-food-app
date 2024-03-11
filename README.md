# React App 

This app is made while learning React from Namaste React website.

*I focused on React only, styling(CSS) may not look good*


- Used JSX to generate page markup.
- Used `Funcitonal Component` to work with JSX.
- Used curly-brace to add inline CSS into markup.
- Used `props` to render data dynamically.
- Used `Hooks` - (Hooks are just normal JS functions)
- Used `react-router-dom` to follow Single Page Applicatioin (SPA) paradigm. There are two types of routing:- Client side routing and Server side routing.

### Life Cycle of a Class based component

constructor() => render() => componentDidMount();

As expected from a class, constructor() function will get called first and do the specified work. Then render() method will be invoked to pain the JSX in the DOM. After the whole JSX is loaded and painted to DOM, the componentDidMount() will get called. Usuallly we use componentDidMount() to make API calls.

If there is more than one child component inside a parent class component: then all the component will complete their render first, then they will be mounted one by one.