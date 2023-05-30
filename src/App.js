import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoggedNavigation } from './routes/LoggedNavigation';
import { AuthPage } from './pages';
import { PlayerProvider } from './context';
import { User } from './api';
import { Loading } from './components/UI/Loading';

export const App = () => {

  const [user, setUser] = useState(false);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  if (!user) return  <Loading/>;

  return user ?  (
    <PlayerProvider>
      <LoggedNavigation />
    </PlayerProvider>
  )
  : (
    <AuthPage/> 
  )

}


export default App;
