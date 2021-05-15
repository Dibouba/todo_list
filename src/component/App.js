import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Addtask from './Addtask';
import Navfoot from './Navfoot';
import Todolist from './Todolist';
import initialData from '../component/initialData';
class App extends React.Component{
    state={
        tasks:initialData
    }
    onToggleCompleted=(taskid)=>{
        let taskToUpdate=this.state.tasks.find(tasks=>tasks.id===taskid)
        taskToUpdate.completed=!taskToUpdate.completed
        this.setState(prevState=>(prevState.tasks.map(task=>{
            return task.id === taskid? taskToUpdate:task
        })))
    }
    render(){
        return(
            <>
                <section id="todo">
                    {/*configuration du routage des modules*/}
                    <BrowserRouter>
                        <Switch>
                            <Route path="/Add-task" component={Addtask} />
                            <Route path="/:filter?" render={(props) => <Todolist {...props} task={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                        </Switch>
                         {/*imortation du menu footer*/}
                           <Navfoot />
                    </BrowserRouter>
                </section>
            </>
        )
    }
}
export default App;