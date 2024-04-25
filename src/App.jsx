import "./App.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=4",
  );
  console.log(data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <h1>Todo Lists</h1>
      <ul>
        {data &&
          data.map((todo) => (
            <li>
              <p>
                <strong>{todo.title}</strong>
              </p>
              <p>{todo.completed === true ? "completed" : "Not Completed"}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
