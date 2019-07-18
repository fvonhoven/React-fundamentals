import React, { useState } from "react"
import ReactDOM from "react-dom"

class AppClass extends React.Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div style={styles.root}>
        <div style={styles.counter}>
          <h1 style={{ alignSelf: "center" }}>{count}</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ display: "flex", marginRight: 50 }}>
              <button
                onClick={() => this.setState({ count: count + 1 })}
                style={styles.button}
              >
                +
              </button>
              <button
                onClick={() => this.setState({ count: count + -1 })}
                style={styles.button}
              >
                -
              </button>
            </div>
            <button
              onClick={() => this.setState({ count: 0 })}
              style={styles.button}
            >
              X
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={styles.root}>
      <div style={styles.counter}>
        <h1 style={{ alignSelf: "center" }}>{count}</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", marginRight: 50 }}>
            <button onClick={() => setCount(count + 1)} style={styles.button}>
              +
            </button>
            <button onClick={() => setCount(count + -1)} style={styles.button}>
              -
            </button>
          </div>
          <button onClick={() => setCount(0)} style={styles.button}>
            X
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  root: {
    flexDirection: "column",
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  counter: {
    backgroundColor: "yellow",
    display: "flex",
    width: 300,
    alignSelf: "center",
    flexDirection: "column"
  },
  button: {
    height: 50,
    width: 50,
    fontSize: 35,
    margin: 10,
    lineHeight: "1em",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "cenrter"
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<AppClass />, rootElement)
