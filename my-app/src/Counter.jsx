import { useState } from "react";

function Counter() {
  // state (angka awal 0)
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // fungsi untuk tambah dan kurang
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <div style={{ marginBottom: "10px" }}>
        <label>
          step:{""}
          <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />
        </label>
      </div>

      <button onClick={decrement} style={{ marginRight: "10px" }}>
        -
      </button>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        +
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
