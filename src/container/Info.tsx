import React from 'react';
import styled from 'styled-components';

import DateInfo from '../component/DateInfo';
import InfoBottom from '../component/InfoBottom';
import { IInfoItem } from '../models/IInfoItem';
import { ITodo } from '../models/ITodo';

const InfoWapper = styled.div`
    height: 170px;
    width: auto;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    background: linear-gradient(135deg, rgba(158, 15, 184, 0.7) -10%, rgba(5, 232, 255, 0.8) 180%), url(https://static.vecteezy.com/system/resources/previews/000/101/253/non_2x/vector-free-abstract-background-1.jpg);
    background-size: cover;
    p {
        margin-block-start: 0;
        margin-block-end: 0;
    }
`;

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

interface InfoProps {
    todos: ITodo[];
}

function Info(props: InfoProps) {
    const { todos } = props;

    const infoItems: IInfoItem[] = [{
        title: "Total",
        count: todos.length,
    }, {
        title: "Remain",
        count: todos.filter(todo => todo.done === false).length,
    }, {
        title: "Done",
        count: todos.filter(todo => todo.done).length,
    }]

    const today = new Date();
    const day = today.getUTCDate();
    const dayOfWeek = dayNames[today.getDay()];
    const month = monthNames[today.getMonth()];

    return (
        <InfoWapper>
            <DateInfo day={day} dayOfWeek={dayOfWeek} month={month} />
            <InfoBottom infoItems={infoItems}/>
        </InfoWapper>
    )
}

export default Info;