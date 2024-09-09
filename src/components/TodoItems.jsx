import TodoItem from "./TodoItem"



const TodoItems = ({todoItems, onDeleteClick})=>{
    return( <div className="items-container">

        {todoItems.map(item=> 
    
        <TodoItem
        onDeleteClick = {onDeleteClick} 
        
        todoDate={item.dueDate} todoName={item.name}></TodoItem>
        )}


</div>

    )
}


export default TodoItems