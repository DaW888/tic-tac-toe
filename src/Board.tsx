import React from 'react';
import styled from 'styled-components';
import Field from './Field';

const genTab = (row: number, col: number): Array<Array<boolean | null>> => {
    const tab: Array<Array<boolean | null>> = [];
    for (let i = 0; i < row; i++) {
        tab.push([]);
        for (let j = 0; j < col; j++) {
            tab[i].push(null);
        }
    }
    return tab;
};

const genRenderTab = (tab: Array<Array<boolean | null>>) =>
    tab.map((ar: Array<boolean | null>, i: number) =>
        ar.map((el, j: number) => <Field key={`${i} ${j}`} poses={{ x: i, y: i }} ownField={el} />),
    );

const Board: React.FC = () => {
    const tab: Array<Array<boolean | null>> = genTab(3, 3);
    const rendTab = genRenderTab(tab);
    console.log(rendTab);

    const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 150px 150px 150px;
    `;

    return <Wrapper>{rendTab}</Wrapper>;
};

export default Board;
