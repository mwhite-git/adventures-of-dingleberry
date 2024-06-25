import React, { useEffect, useState } from 'react';
import ChoiceComponent from './ChoiceComponent';
import '../styles/SceneComponent.scss';

interface Choice {
  text: string;
  nextScene: number;
}

interface SceneProps {
  description: string;
  choices: Choice[];
  image: string;
  onChoiceSelect: (nextScene: number) => void;
}

const SceneComponent: React.FC<SceneProps> = ({ description, choices, image, onChoiceSelect }) => {
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    setFadeState('fade-in');
  }, [description]);

  const handleChoiceClick = (nextScene: number) => {
    setFadeState('fade-out');
    setTimeout(() => {
      onChoiceSelect(nextScene);
    }, 500); 
  };

  return (
    <div className={`scene ${fadeState}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="scene-overlay">
        <p>{description}</p>
        <div className="choices">
          {choices.map((choice, index) => (
            <ChoiceComponent key={index} text={choice.text} onSelect={() => handleChoiceClick(choice.nextScene)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SceneComponent;
