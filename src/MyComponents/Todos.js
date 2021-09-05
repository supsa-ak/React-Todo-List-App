import React from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todo List</h3>
            {props.todos.map((todo)=>{                
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>             
            })}
        </div>
    )
}
