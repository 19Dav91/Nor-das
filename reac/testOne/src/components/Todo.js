import React from 'react';
import '../App.css';
import { styles } from "../styles";
import { Icon } from '@iconify/react';

const Todo = ({ todos, status, settodos }) => {
    const deleteTodo = (index) => {
        const newTodo = [...todos];
        newTodo.splice(index, 1);
        settodos(newTodo);
    };
    const toggleCompletion = (index) => {
        const newTodo = [...todos];
        newTodo[index].completed = !newTodo[index].completed;
        newTodo[index].backgroundColor = newTodo[index].completed ? 'green' : 'red';
        settodos(newTodo);
    };
    const filterTodos = todos.filter((todo) => {
        if (status === 'All') return true;
        if (status === 'Completed') return todo.completed;
        if (status === 'Uncompleted') return !todo.completed;
        return true;
    });
    const res = filterTodos.map((todo, index) => (
        <div className='todo-container bg' style={{ ...styles.class1, backgroundColor: todo.backgroundColor }} key={index}>
            <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
            <form>
                <button style={styles.class2} onClick={() => toggleCompletion(index)}>
                    <Icon className='button todo ' icon="flat-color-icons:plus" />
                </button>
                <button style={styles.class2} onClick={() => deleteTodo(index)}>
                    <Icon className='button todo' icon="material-symbols:delete-outline" />
                </button>
            </form>
        </div>
    ));
    return <>
        <div className="todo-list">{res}</div>
    </>
};
export default Todo;
