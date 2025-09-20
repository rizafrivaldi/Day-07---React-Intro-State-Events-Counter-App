/*import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100%" }}>
      <h2>To-Do List</h2>

      <div>
        <input type="text" value={task} placeholder="Writing task..." onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask} style={{ marginLeft: "10px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {t}{" "}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp; */

import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>To-Do List</h2>

      <div>
        <input type="text" value={task} placeholder="Writing task..." onChange={(e) => setTask(e.target.value)} style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <button onClick={addTask} style={{ marginLeft: "10px", padding: "8px 16px" }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px", width: "250px" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 12px",
              border: "1px solid #444",
              borderRadius: "6px",
              marginBottom: "10px",
              backgroundColor: "#333",
            }}
          >
            <span>{t}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
