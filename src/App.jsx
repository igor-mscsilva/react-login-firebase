import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { auth } from '../firebaseConfig'; // Importe a configuração do Firebase

function App() {
  const [user, setUser] = useState(null)

    useEffect(() => {
      auth.onAuthStateChanged(setUser);
    }, []);      

  return (
    <>
      <h1>Autenticação com Firebase</h1>
      
      {user ? <Logout user={user} /> : <Login />}
      
    </>
  )
}

export default App
