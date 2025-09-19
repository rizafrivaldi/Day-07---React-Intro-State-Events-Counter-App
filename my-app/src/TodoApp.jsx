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

export default TodoApp;
