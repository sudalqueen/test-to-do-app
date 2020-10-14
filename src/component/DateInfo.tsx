import React from 'react';
import styled from 'styled-components';

const Dateinfo = styled.div`
    width: 100%;
    padding: 11px 0 5px 0;
    color: #fff;
    #day {
        text-align: center;
        font-size: 26px;
    }
    #today {
        font-weight: bold;
    }
    #month {
        font-size: 16px;
    }
`;

interface DateInfoProps {
    day: number;
    dayOfWeek: string;
    month: string;
}

function DateInfo(props: DateInfoProps) {
    const { day, dayOfWeek, month } = props;
    return (
        <Dateinfo>
            <p id="day">
                <span id="today">{`${dayOfWeek}, `}</span>
                <span id="daymonth">{day}th</span>
            </p>
            <p id="month">
                {month}
            </p>
        </Dateinfo>
    )
}

export default DateInfo;