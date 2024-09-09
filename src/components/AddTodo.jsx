
import {BiMessageAdd} from 'react-icons/bi'

import { useState } from "react";

function AddTodo({onNewItem}){

  const [todoName,setTodoName]= useState()
const [dueDate,setDueDate] = useState()


const handleNameChange = (event)=>{
  setTodoName(event.target.value)
}

const handleDateChange= (event)=>{
setDueDate(event.target.value)

}

const handleAddButtonClicked =()=>{
  onNewItem(todoName,dueDate)
  setDueDate("")
  setTodoName("")
}

    return (
    <div class="container text-center">
 
      <form action="">

        <div class="row m-1 kg-row">


          <div class="col-6">
            <input type="text" placeholder="Enter todo" value={todoName} onChange={handleNameChange}/>
          </div>
          <div class="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div class="col-2">
          <button type="button" class="kg-btn btn px-4  btn-success "
          onClick={handleAddButtonClicked}
          
          >  <BiMessageAdd/></button>
      
          </div>
          
        </div>
        </form>
      </div>

  
    )

}

export default AddTodo;