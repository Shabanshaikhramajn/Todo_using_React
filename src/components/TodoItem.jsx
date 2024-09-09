function TodoItem({todoName,todoDate, onDeleteClick}){



return <div className="container ">

    <div className="row m-2">

    <div className="col-6">
     {todoName}
    </div>


    <div className="col-4">
        {todoDate}
    </div>

    <div className="col-2">
    <button type="button" onClick={()=>onDeleteClick(todoName)} className="btn btn-danger px-4">Delete</button>
      </div>

      </div>

    </div>
    
}
export default TodoItem