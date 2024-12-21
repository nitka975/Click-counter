import React, { useState } from "react";

function App() {
  const [count,setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  if (count <0){
    alert ("Don`t work")
    reset();
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Считатель кликов</h1>
      <p style={styles.counter}>Количество кликов: {count}</p>
      <div>
        <button onClick={increase} style={styles.button}>Добавить</button>
        <button onClick={decrease} style={styles.button}>Уменьшить</button>
        <button onClick={reset} style={styles.button}>Скинуть</button>
      </div>
    </div>
  );
}

const styles ={
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  heading: {
    color: 'red'
  },
  counter: {
    fontSize: '28px',
    margin: '30px'
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    background: '#001bff',
    color: '#fff'
  },
}

export default App;
