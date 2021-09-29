import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as AuthProvider } from "./context/AuthContext";
import { Provider as WorkerProvider } from "./context/WorkerContext";
import Login from "./LoginComponent/Login";
import MainPage from "./MainPageComponent/MainPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <WorkerProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={MainPage} />
            </Switch>
          </Router>
        </WorkerProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
