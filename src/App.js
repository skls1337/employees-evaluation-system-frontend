import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Provider as AuthProvider} from './context/AuthContext'
import { Login } from './LoginComponent/Login';



function App() {
  return (
   <div>
     <AuthProvider>
     <Router>
       <Switch>
         <Route path="/">
            <Login/>
         </Route>
       </Switch>
     </Router>
     </AuthProvider>
   </div>
  );
}

export default App;
