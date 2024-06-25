import React from 'react';
import '../styles/ChoiceComponent.scss';

interface ChoiceProps {
  text: string;
  onSelect: () => void;
}

const ChoiceComponent: React.FC<ChoiceProps> = ({ text, onSelect }) => (
  <button className="choice" onClick={onSelect}>
    {text}
  </button>
);

export default ChoiceComponent;
