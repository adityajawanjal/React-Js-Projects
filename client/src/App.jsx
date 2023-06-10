import React from 'react'
import { useAccount } from './context/AccountContext'
import ChatPage from './ChatPage';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  const { account } = useAccount();
  return (
    <>
      {
        // <Login/>
        account ? <ChatPage/> : <Login/>
      }
    </>
  )
}

export default App
