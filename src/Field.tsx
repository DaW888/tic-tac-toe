import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    ownField: boolean | null;
    poses: { x: number; y: number };
}

const Field: React.FC<Props> = ({ poses, ownField }) => {
    const [player, setPlayer] = useState<boolean | null>(ownField);
    const Wrapper = styled.div`
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        color: ${player ? '#1dc0db' : '#e86123'};
        font-size: 100px;
        cursor: pointer;
        border: 1px solid white;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const handleClick = () => {
        setPlayer(!player);
        console.log(poses);
    };

    if (player == null) return <Wrapper onClick={() => handleClick()}>{''}</Wrapper>;
    else return <Wrapper onClick={() => handleClick()}>{player ? 'X' : 'O'}</Wrapper>;
};

export default Field;
