import Task from "./Task.jsx";

const TaskList = ({tasks, onChangeTask, onDelete}) => {
    return (
        <ul>
            {tasks.map(task =>  <Task
                key={task.id}
                task={task}
                onChangeTask={onChangeTask}
                onDelete={onDelete}
            ></Task>)}
        </ul>
    );
};

export default TaskList;
