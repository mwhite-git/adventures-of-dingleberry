import React, { useState, useEffect } from 'react';
import SceneComponent from './SceneComponent';
import Loading from './Loading';
import Menu from './Menu';
import { gameData } from '../data/gameData';
import '../styles/Game.scss';

const Game: React.FC = () => {
  const [currentSceneId, setCurrentSceneId] = useState(1);
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const loadingTime = 5000; 

    const timeout = setTimeout(() => {
      setLoading(false);
      setMenu(true); 
    }, loadingTime);

    return () => clearTimeout(timeout);
  }, []);

  const handleStartGame = () => {
    setMenu(false); 
  };

  const handleChoiceSelect = (nextScene: number) => {
    setCurrentSceneId(nextScene);
  };

  if (loading) {
    return <Loading />;
  }

  if (menu) {
    return <Menu onStartGame={handleStartGame} />;
  }

  const currentScene = gameData.find(scene => scene.id === currentSceneId);

  return (
    <div className="game">
      {currentScene && (
        <SceneComponent
          description={currentScene.description}
          choices={currentScene.choices}
          image={currentScene.image}
          onChoiceSelect={handleChoiceSelect}
        />
      )}
    </div>
  );
};

export default Game;
