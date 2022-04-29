# Context API and `useContext`

## Context Overview
* [What is Context?](https://reactjs.org/docs/context.html)
* [`useContext` Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)


## Implementing Context
* [How to implement Context and `useContext`](https://levelup.gitconnected.com/how-to-use-context-with-react-hooks-5591a4010689)

### Creating a Context Object
- Context is going to hold your global state

```js
import { createContext } from "react"

const AppContext = createContext();

export default AppContext
```

### Creating a Context Provider
```js
const ContextProvider = ({ children }) => {
  let [username, setUsername] = useState("")

  let initialState = {
    username,
    setUsername
  }

  return (
    <AppContext.Provider value={ initialState }> 
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
```

### Using your Provider
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
```

### Using the `useContext` Hook
```js
const Form = () => {
  const {username, setUsername} = useContext(AppContext)
}
```
