import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=4",
  );
  console.log(data);
  return (
    <div className="container my-4">
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <h1>Todo Lists</h1>
      <ul className="list-group">
        {data &&
          data.map((todo) => (
            <li className="list-group-item">
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
