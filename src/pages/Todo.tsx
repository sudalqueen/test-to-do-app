import React, { useState } from 'react';
import styled from 'styled-components';

import TodoList from '../component/TodoList';
import { ITodo } from '../models/ITodo';
import Info from '../container/Info';
import AppBottom from '../container/AppBottom';

const App = styled.div`
    width: 375px;
    min-height: 200px;
    margin: 30px auto;
    border-radius: 22px;
    background: #fff;
    text-align: center;
    letter-spacing: -1px;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    #title {
        font-size: 18px;
        color: #636363;
    }
`;

function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<ITodo[]>([{
        id: 1,
        content: "리액트 to do app 만들기",
        done: true,
    }, {
        id: 2,
        content: "css 적용하기",
        done: false,
    }, {
        id: 3,
        content: "테스트 코드 작성하기",
        done: false,
    }]);

    const changeInput = (event: React.FormEvent<HTMLInputElement>) => {
        setInput(event.currentTarget.value);
    };

    const addTodo = () => {
        const newTodo: ITodo = {
            id: todos.length + 1,
            content: input,
            done: false,
        };
        const newTodos = todos.concat(newTodo);
        setTodos(newTodos);
        setInput("");
    };

    const checkTodo = (id: number) => () => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            done: !todo.done,
        } : todo))
    };

    const deleteTodo = (id: number) => () => {
        const deleteIndex = todos.findIndex(todo => todo.id === id);

        setTodos([...todos.slice(0, deleteIndex), ...todos.slice(deleteIndex + 1, todos.length)]);
    };

    return (
        <App>
            <Info todos={todos} />
            <p id="title">
                <strong>Tasks</strong> for today
            </p>
            <TodoList
                todos={todos}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo} />
            <AppBottom input={input} changeInput={changeInput} addTodo={addTodo} />
        </App>
    )
}

export default Todo;