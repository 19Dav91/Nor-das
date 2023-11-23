import React from 'react';
const Form = ({ setimput, todos, settodos, input, setstatus }) => {
    const inputTex = (e) => {
        setimput(e.target.value);
    };
    const submitTodo = (e) => {
        e.preventDefault();
        settodos([
            ...todos, { text: input, completed: false, id: Math.random() * 1000 },
        ]);
        setimput('');
        const statusHandler = (e) => {
            setstatus(e.target.value);
        };
        return (
            <form>
                <input value={input} onChange={inputTex} type='text' className='todo-input' />
                <button onClick={submitTodo} className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
                <div className='select'>
                    <select onChange={statusHandler} name='todos' className='filter-todo'>
                        <option value={'all'}>All</option>
                        <option value={'completed'}>Completed</option>
                        <option value={'uncompleted'}>Uncompleted</option>
                    </select>
                </div>
            </form>
        );
    };
}
export default Form;