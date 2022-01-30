import React, { useState } from 'react';
import { Todo } from '../model';
import '../App.css'
import {BsPencilSquare} from 'react-icons/bs';
import {AiFillDelete} from 'react-icons/ai';
import {MdDoneOutline} from 'react-icons/md'
type Props =  {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo);
    const handleDone = (id:number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo,isDone:!todo.isDone} : todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleEdit = (e:React.FormEvent,id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? {...todo,todo: editTodo} : todo))
        setEdit(false)
    }
    return (
        <form className="single-todo" onSubmit={(e) => handleEdit(e,todo.id)}>
            {
               edit ? (
                   <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
               ): (
                todo.isDone === true ? (
                    <s className="single-todo-title">{todo.todo}</s>
                ): (
                    <span className="single-todo-title">{todo.todo}</span>
                )
               )
            }
            <div className="icons-container">
                <BsPencilSquare className="icon" onClick={() => {
                    if(!edit && !todo.isDone){
                        setEdit(!edit);
                    }
                }} />
                <AiFillDelete className="icon" onClick={() => handleDelete(todo.id)}  />
                <MdDoneOutline className="icon" onClick={() => handleDone(todo.id)} />
            </div>
        </form>
    );
};

export default SingleTodo;