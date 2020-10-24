import React from 'react';
import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';

import ToastContainer from './components/ToastContainer';

import { AuthProvider } from './hooks/auth';
import { ToastProvider } from './hooks/toast';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
     <SignIn />
    </AppProvider> 
       
    <ToastContainer />

    <GlobalStyle />
  </>
);
export default App;
