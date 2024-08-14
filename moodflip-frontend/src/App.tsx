import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import styled from 'styled-components';
const feelings = [
  { feeling: 'anxious', color: '#ff0000' },
  { feeling: 'self-conscious', color: '#ff7f50' },
  { feeling: 'insecure', color: '#ffd700' },
  { feeling: 'depressed', color: '#8a2be2' },
  { feeling: 'bored', color: '#00ff00' },
  { feeling: 'lonely', color: '#00ced1' },
  { feeling: 'panic', color: '#ff1493' },
  { feeling: 'rumination', color: '#4682b4' }
];

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px;
`;

const App: React.FC = () => {
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);

  const handleCardClick = (feeling: string) => {
      setSelectedFeeling(feeling);
  };

  return (
      <div>
          <h1>MoodFlip</h1>
          <CardGrid>
              {feelings.map(({ feeling, color }) => (
                  <Card key={feeling} feeling={feeling} color={color} onClick={() => handleCardClick(feeling)} />
              ))}
          </CardGrid>
          {selectedFeeling && <p>Selected Feeling: {selectedFeeling}</p>}
      </div>
  );
};

export default App;