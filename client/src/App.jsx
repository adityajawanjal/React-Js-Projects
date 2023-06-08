import React from 'react'
import { useAccount } from './context/AccountContext'
import ChatPage from './ChatPage';
import Login from './Login';

const App = () => {
  const { account } = useAccount();
  return (
    <>
      {
        // <Login/>
        account ? <Login/> : <ChatPage/> 
      }
    </>
  )
}

export default App
