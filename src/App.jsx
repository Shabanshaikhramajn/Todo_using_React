import { useState } from "react"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"



function App() {
  

const [todoItems,setTodoItems]= useState([])

const handleNewItem=(itemName,itemDueDate)=>{
console.log(`new item added ${itemName} date: ${itemDueDate}`)


const newTodoItems = [...todoItems,{name:itemName,
  dueDate:itemDueDate}]
  setTodoItems(newTodoItems)
}

const handleDeleteItem =(todoItemName)=>{
  
  const newTodoItems=todoItems.filter(item=>item.name !== todoItemName)
  
  setTodoItems(newTodoItems)

  

}


  return (
<center className='todo-container'>
  <AppName/>

  <AddTodo  onNewItem = {handleNewItem}  />
     {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems onDeleteClick ={handleDeleteItem} todoItems  ={todoItems} ></TodoItems>


</center>
    

  
  )
}

export default App
