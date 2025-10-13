import React from 'react'
import Card from './Card'

const App = () => {
  return (
    <div>
      <div className="parent">
       <Card user='Vivek kumar' age="24" img='https://images.unsplash.com/photo-1756990688487-38fea20c395b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600' />
       <Card  user='Preeti' age="21" img='https://images.unsplash.com/photo-1756990688487-38fea20c395b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600' />
       <Card  user='Rajveer kumar' age="28" img='https://images.unsplash.com/photo-1756990688487-38fea20c395b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
      </div>
    </div>
  )
}

export default App