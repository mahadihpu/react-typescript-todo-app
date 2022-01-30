import React from 'react';
import '../App.css'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
    return (
        <div className="todos">
            {
                todos.map((todo,index) => <SingleTodo todo={todo} key={index} todos={todos} setTodos={setTodos} />)
            }
        </div>
    );
};

export default TodoList;