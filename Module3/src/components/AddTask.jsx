import {useState} from "react";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <input placeholder="Add Task" value={text} onChange={handleChange}/>
            <button onClick={()=>{
                onAdd(text);
                setText('');
            }}>Add</button>
        </>
    );
};

export default AddTask;
