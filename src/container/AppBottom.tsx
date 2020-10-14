import React, { useState } from 'react';
import styled from 'styled-components';

const Appbottom = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    width: auto;
    -webkit-transition: all ease-in-out 0.4s;
    transition: all ease-in-out 0.4s;
`;

const Input = styled.input`
height: 34px;
border-radius: 3px;
border: 1px solid #bbb;
`;

const AddButton = styled.a`
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 18px;
    background: linear-gradient(135deg, rgba(158, 15, 184, 0.9) -20%, rgba(5, 232, 255, 0.9) 165%);
    color: #fff;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    border: none;
    cursor: pointer;
    &:hover {
        background: linear-gradient(135deg, rgba(158, 15, 184, 0.8) -20%, rgba(5, 232, 255, 0.8) 165%);
    }
`
interface IAppBottom {
    input: string;
    changeInput(event: React.FormEvent<HTMLInputElement>): void;
    addTodo(): void;
}

function AppBottom(props: IAppBottom) {
    const { input, changeInput, addTodo } = props;

    return (
        <Appbottom>
            <Input value={input} onChange={changeInput} />
            <AddButton onClick={addTodo}>Add new to do</AddButton>
        </Appbottom>
    )
}

export default AppBottom;
