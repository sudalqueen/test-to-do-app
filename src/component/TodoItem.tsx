import React from 'react';
import styled from 'styled-components';
import { ITodo } from '../models/ITodo';

const Li = styled.li`
    display: flex;
    list-style: none;
    margin-left: 6%;
    &.done p {
        color: #b3b3b3;
        text-decoration-line: line-through;
        font-style: italic
    }
`;

const ContentWrapper = styled.div`
    display: inline-block;
    width: 80%;
    position: relative;
    text-align: left;
    margin-left: 10px;
    margin-top: -18px;
`;

const DeleteBtn = styled.span`
    cursor: pointer;
`;

interface TodoItemProps {
    todo: ITodo;
    checkTodo(): void;
    deleteTodo(): void;
}

function TodoItem(props: TodoItemProps) {
    const { todo, checkTodo, deleteTodo } = props;

    return (
        <Li className={todo.done ? "done" : ""}>
            <input type="checkbox" onChange={checkTodo} checked={todo.done}/>
            <ContentWrapper>
                <p>{todo.content}</p>
            </ContentWrapper>
            <DeleteBtn onClick={deleteTodo}>X</DeleteBtn>
        </Li>
    )
}

export default TodoItem;