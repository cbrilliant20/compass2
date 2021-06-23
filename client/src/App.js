import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
	loginUser,
	registerUser,
	verifyUser,
	removeToken,
} from './services/auth';
import Layout from './components/Layout/Layout';
import Landing from './screens/Landing/Landing';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

useEffect(() => {
const handleVerify = async () => {
  const userData = await verifyUser();
  setCurrentUser(userData);
};
handleVerify();
}, []);

const handleLogin = async (formData) => {
const userData = await loginUser(formData);
setCurrentUser(userData);
history.push('/');
};

const handleRegister = async (formData) => {
const userData = await registerUser(formData);
setCurrentUser(userData);
history.push('/');
};

const handleLogout = () => {
setCurrentUser(null);
localStorage.removeItem('authToken');
removeToken();
};
  
  return (
    <div className="App">
        <Switch>
          <Route path="/">
            <Landing/>
        </Route>
        {/* <Route path="/home">
          <Layout/>
        </Route> */}
        </Switch>
    </div>
  );
}

export default App;
