// import React from 'react'
import Todo from './components/Todo'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen'>
      <Toaster />
      <Todo />
    </div>
  )
}

export default App