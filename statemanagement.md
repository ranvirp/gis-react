## The useReducer Hook
The useReducer Hook came with React 16.8. Just like the reduce() method in JavaScript, the useReducer Hook receives two values as its argument — a reducer function and an initial state — and then returns a new state:
```javascript
const [state, dispatch] = useReducer((state, action) => {
const { type } = action;
switch(action) {
case 'action description':
const newState = // do something with the action
return newState;
default:
throw new Error()
}
}, []);
```
In the snippet above, we’ve defined our state and a corresponding method, dispatch, handling it. When we call the dispatch method, the useReducer() Hook will perform an action based on the type that our method receives in its action argument:

```javascript
return (
<button onClick={() =>
dispatch({ type: 'action type'})}>
</button>
)
```
## useContext
This hook is used to get the current context of a Provider. To create and provide a context, we use the React.createContext API.
```javascript
const myContext = React.createContext()
//We put the root component between the myContext Provider:

function App() {
return (
<myContext.Provider value={900}>
<Root />
</myContext.Provider>
)
}
```
To consume the value provided by the <myContext.Provider></myContext.Provider> we use the useContext hook.
https://dev.to/efearas/how-to-usecontext-and-set-value-of-context-in-child-components-in-3-steps-3j9h
