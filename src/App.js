import "./App.css";
import "./componants/Header/Header.jsx";
import Header from "./componants/Header/Header.jsx";
import ToDoList from "./componants/ToDoList/ToDoList.jsx";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header></Header>
        <ToDoList></ToDoList>
      </div>
    </Provider>
  );
}

export default App;
