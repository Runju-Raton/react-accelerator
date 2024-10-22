import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import {initialTasks} from "./data/tasks.js";
import {useReducer, useState} from "react";
import taskReducer from "./reducers/taskReducer.js";

function App() {
    const [tasks, dispatch] = useReducer(taskReducer,initialTasks);

    const getNextId = (data) => {
        const maxId = data.reduce((prev,current) => prev && prev.id>current.id ? prev.id: current.id);
        return maxId + 1;
    }

    const handleAddTask = (text) => {
        dispatch({
            type: "added",
            text,
            id: getNextId(tasks)
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type:"changed",
            task
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type:"deleted",
            id: taskId
        })
    }



    // handlers
    // add
    // const handleAddTask = (text) => {
    //     setTasks([
    //         ...tasks,
    //         {
    //             id: getNextId(tasks),
    //             text: text,
    //             done: false
    //         }
    //     ])
    // }
    // // edit
    // const handleChangeTask = (task) => {
    //     const nextTasks = tasks.map(t => {
    //         if(t.id == task.id){
    //             return task;
    //         }
    //         return t;
    //     })
    //     setTasks(nextTasks);
    // }
    // //delete
    // const handleDeleteTask = (taskId) => {
    //     setTasks(tasks.filter(t=>t.id!==taskId)); // filter return new array that's why not using spread operator
    // }
    //isDone
    return (
    <>
        <h1>Prague itinerary</h1>
        <AddTask onAdd={handleAddTask}></AddTask>
        <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDelete={handleDeleteTask}></TaskList>
    </>
  )
}

export default App


