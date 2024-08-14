import React, { useState } from 'react';
import styled from 'styled-components';
import { Flipped } from 'react-flip-toolkit';

interface CardProps {
    feeling: string;
    color: string;
    onClick: () => void;
}

const CardContainer = styled.div<{ color: string }>`
    width: 150px;
    height: 200px;
    background-color: ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    transform: rotateY(180deg);
`;

const FlippedCardContainer = styled(CardContainer)<{ isFlipped: boolean }>`
    transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)')};
`;

const Card: React.FC<CardProps> = ({ feeling, color, onClick }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        onClick();
    };

    return (
        <Flipped flipId="card">
            <FlippedCardContainer color={color} onClick={handleClick} isFlipped={isFlipped}>
                {isFlipped ? "Affirmation Text" : feeling}
            </FlippedCardContainer>
        </Flipped>
    );
};

export default Card;
