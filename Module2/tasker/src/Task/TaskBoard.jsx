import SearchTask from "./SearchTask.jsx";
import TaskAction from "./TaskAction.jsx";
import TaskList from "./TaskList.jsx";
import {useState} from "react";
import AddTaskModal from "./AddTaskModal.jsx";
const TaskBoard = () => {
    const defaultTask = {
        'id': crypto.randomUUID(),  //js default api which provide random uuid
        'title': 'Learn React',
        'description': 'I want to learn react so that I make it do whatever I want to do',
        'tags': ["web", "react", "js"],
        'priority': 'High',
        'isFavourite': false

    }
    const [tasks, setTasks] = useState([defaultTask]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState('');
    const handleAddTask = (newTask, isAdd) => {
        if(isAdd){
            setTasks([
                ...tasks,
                newTask
            ])
        }else{
            console.log('new task', newTask)
            setTasks(tasks.map(task => {
                if(task.id == newTask.id){
                    return newTask;
                }
                return task;
            }))
        }
        setShowAddModal(false);
        setTaskToUpdate(null)
    }
    const handleEditTask = (task) => {
        setTaskToUpdate(task)
        setShowAddModal(true);
        // tasks.map(task => {
        //
        // })
    }

    const handleDeleteTask = (taskId) => {
        const afterDeletionTasks = tasks.filter(task=> task.id!==taskId);
        setTasks(afterDeletionTasks);
    }
    const handleDeleteAllTask = () => {
        tasks.length = 0
        setTasks([...tasks]);
    }

    const handleCloseModal = () => {
        setShowAddModal(false)
        setTaskToUpdate(null)
    }

    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate} closeModal={handleCloseModal}/>}
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask></SearchTask>
                </div>
                <div
                    className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/*task actions*/}
                    <TaskAction onAddClick={()=>setShowAddModal(true)} handleDeleteAll = {handleDeleteAllTask}></TaskAction>
                    {/*task list*/}
                    <TaskList tasks={tasks} onEdit={handleEditTask} deleteTask={handleDeleteTask}></TaskList>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;
