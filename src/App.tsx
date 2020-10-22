import React from 'react';
import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

import authContext from './context/AuthContext';
import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
  <AuthContext.Provider value={{ name: 'Bruna' }} >
    <SignIn />
  </AuthContext.Provider>
  
  <GlobalStyle />
  </>
);
export default App;
