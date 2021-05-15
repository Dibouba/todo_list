import React from 'react';
import ToDo from './ToDo';
const Todolist= ({task, match,onToggleCompleted}) => {
    let filterTasks;
    switch (match.params.filter){
        case 'completed':
            filterTasks = task.filter(task => task.completed)
            break;
            default:
             filterTasks = task
    }
    if(filterTasks.length===0){
        return(
        <>
        
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
             <li className="list-group-item d-flex align-tiems-center">Aucune tâche à afficher</li> 
            </ul>
     </>
    );
  }
    else{
        return(
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
               {
                   filterTasks.map((task) => <ToDo task={task} key= {task.id} onToggleCompleted={onToggleCompleted} />  )
               }
            </ul>
       </>
    );
        
    }
    
}
export default Todolist;