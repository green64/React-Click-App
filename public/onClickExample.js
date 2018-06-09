<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.3.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.3.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
  <script type="text/babel">
  const state = {eventCount: 0, username: ''}
    
  
  
  function App() {
    return (
      <div>
        <p>
          There have been {state.eventCount} events
        </p>
        <p>
          <button onClick={increment}>⚛️</button>
        </p>
        <p>
          <button onClick={increment}>⚛️</button>
        </p>
        <p>You typed: {state.username}</p>
        <p>
          <input />
        </p>
      </div>
    )
  }
  
  function increment() {
    setState({
      eventCount: state.eventCount + 1,
    })
  }
  
  function updateUsername(event) {
    setState({
      username: event.target.value,
    })
  }
  
  function setState(newState) {
    Object.assign(state, newState)
    renderApp()
  }
  
  function renderApp() {
    ReactDOM.render(
      <App />,
      document.getElementById('root'),
    )
  }
  increment()
  </script>
  </body>
  