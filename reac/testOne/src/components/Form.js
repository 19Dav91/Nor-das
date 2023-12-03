import React from 'react';
import '../App.css';
const Form = ({ inputText, setinputText, notes, setnotes }) => {
    const inputTextHandler = (e) => {
        setinputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            setnotes([
                ...notes, { text: inputText, completed: false, id: Math.random() * 1000 }
            ]);
            setinputText('')
        }
    }
    return <>
        <form className='todo-container'>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    </>
}
export default Form;
// onChange={statusHandler}