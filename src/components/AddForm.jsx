import React, { useContext, useState } from 'react';
import { TodoContext, useTodo } from '../context';

const AddForm = () => {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();
const handleSubmit = (e) =>{
    e.preventDefault()
addTodo(todo);
setTodo("")
}
    return (
        <div>
            <form onSubmit={handleSubmit} action="" className='flex items-center gap-2'>
                <input type="text" className="text-lg bg-gray-800 text-white p-3 rouded-lg outline-0" value={todo} onChange={e => setTodo(e.target.value)} />
                <button className="p-3 rounded-lg text-white bg-blue-500">Add</button>
            </form>
        </div>
    );
}

export default AddForm;
