import React from 'react';
class ToDo extends React.Component{
    state = {
        completed:this.props.task.completed
    }
    ToggleCompleted = () =>{
        this.setState(prevState =>({
            completed:!prevState.completed,
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }
    render(){
        return(
            <li className={"list-group-item d-flex align-tiems-center" + (this.state.completed? 'bg-success':null)}>
               {this.props.task.name}
              <button className={"btn btn-sm ml-auto btn-online-success" + (this.state.completed? 'btn-success':'btn-online-success' )} onClick={() => this.ToggleCompleted()}>&#x2713;</button>
           </li>
        )
    }
}
export default ToDo;