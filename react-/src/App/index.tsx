import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/todos">Todos </Link>
      </nav>
      <h1 style={{ color: "#fffff" }}> aasa</h1>
      <Outlet />
    </div>
  );
};

export default App;
