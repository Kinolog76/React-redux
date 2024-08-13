import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./Counter";
import TaskList from "./TaskList";
import UserList from "./UserList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
    <TaskList />
    <UserList />
  </Provider>,
);
