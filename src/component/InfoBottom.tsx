import React from 'react';
import styled from 'styled-components';
import { IInfoItem } from '../models/IInfoItem';

const Infobottom = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    width: 85%;
    margin: 40px auto 0 auto;
`;

const InfoBottomItem = styled.div`
    color: #fff;
    #count {
        margin-top: 11px;
        font-size: 19px;
        font-weight: bold;
        text-align: center;
    },
    #tasks {
        font-weight: normal;
        font-size: 18px;
        margin-top: -2px;
    }
`;

interface InfoBottomProps {
    infoItems: IInfoItem[];
}

function InfoBottom(props: InfoBottomProps) {
    const { infoItems } = props;

    return (
        <Infobottom>
            {
                infoItems.map(item => 
                    <InfoBottomItem>
                        <p id="count">{item.count}</p>
                        <p id="tasks">{item.title}</p>
                    </InfoBottomItem>)
            }
        </Infobottom>
    )
}

export default InfoBottom;