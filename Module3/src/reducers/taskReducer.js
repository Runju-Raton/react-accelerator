const TaskReducer = (tasks, action) => {
    switch(action.type) {
        case 'added':
            // array return
            return[
                ...tasks,
                {
                    id:action.id,
                    text: action.text,
                    done:false
                }
            ]
        case 'changed':
            // array return
            return tasks.map(t => {
                    if(t.id == action.task.id){
                        return action.task;
                    }
                    return t;
            })
        case 'deleted':
            // array return 
            return tasks.filter(t=>t.id!==action.id);
        default:
            throw Error (`No action matched with ${action.type}`)
    }
};

export default TaskReducer;
