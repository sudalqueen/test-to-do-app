import React from 'react';
import styled from 'styled-components';
import { ITodo } from '../models/ITodo';
import TodoItem from './TodoItem';

const Ul = styled.ul`
    padding-inline-start: 0;
`;

interface TodoListProps {
    todos: ITodo[];
    checkTodo(id: number);
    deleteTodo(id: number);
}

function TodoList(props: TodoListProps) {
    const { todos, checkTodo, deleteTodo } = props;

    return (
        <Ul>
            {
                todos.map(todo => 
                    <TodoItem 
                        todo={todo}
                        checkTodo={checkTodo(todo.id)}
                        deleteTodo={deleteTodo(todo.id)}/>)
            }
        </Ul>
    )
}

export default TodoList;