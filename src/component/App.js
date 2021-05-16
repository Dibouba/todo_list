import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Addtask from './Addtask';
import Navfoot from './Navfoot';
import Todolist from './Todolist';
import initialData from '../component/initialData';
import uniqueid from 'uniqueid';
import Fetching from './fetching';
class App extends React.Component{
    state={
        tasks:[],
        fetching: true,
    }

    componentDidMount = () =>{
        let display = Math.floor(Math.random()*5000)
        setTimeout(()=>{
            this.setState({
                fetching: false,
                tasks: initialData
            })
        }, display)
    }
    onToggleCompleted=(taskid)=>{
        let taskToUpdate=this.state.tasks.find(tasks=>tasks.id===taskid)
        taskToUpdate.completed=!taskToUpdate.completed
        this.setState(prevState=>(prevState.tasks.map(task=>{
            return task.id === taskid? taskToUpdate:task
        })))
    }
     /**fonction pour l'ajout des nouvelles tâches */
    onAddTask=(newTaskName)=>{
        let newTask={
            id: uniqueid(),
            name : newTaskName,
            completed: false,

        }
        /**injection des nouvelles tâche **/
        this.setState(prevState=>({
            tasks: [...prevState.tasks, newTask]
        }))
    }
    /**fonction de supression des tâches terminer **/
    onDeleteCompleted =() =>{
        this.setState(prevState =>{
            let newState = prevState.tasks.filter(task => !task.completed)
            return{
                 tasks: newState
            } 
        })
    } 
    render(){
        return(
            <>
                <section id="todo">
                    {this.state.fetching? <Fetching /> : null}
                    {/*configuration du routage des modules*/}
                    <BrowserRouter>
                        <Switch>
                            {/**execution de la fonction onAddTask dans la propriété Addtask*/}
                            <Route path="/Add-task" render={(props)=> <Addtask {...props} onAddTask={this.onAddTask}/>} />
                            {/**execution de la fonction onToggleCompleted dans la propriété Todolit*/}
                            <Route path="/:filter?" render={(props) => <Todolist {...props} task={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                        </Switch>
                         {/*imortation du menu footer*/}
                           <Navfoot onDeleteCompleted = {this.onDeleteCompleted} />
                    </BrowserRouter>
                </section>
            </>
        )
    }
}
export default App;