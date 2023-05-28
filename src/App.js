import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoggedNavigation } from './routes/LoggedNavigation';
import { AuthPage } from './pages';

export const App = () => {

  const [user, setUser] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  // if (!user) return null;

  return user ? <LoggedNavigation/> : <AuthPage/>;

}


export default App;
