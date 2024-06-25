import React from 'react';
import '../styles/Menu.scss';

interface MenuProps {
  onStartGame: () => void;
}

const Menu: React.FC<MenuProps> = ({ onStartGame }) => {
  return (
    <div className="menu">
      <div className="menu-overlay">
        <h1>The Adventures Of Dingleberry</h1>
        <p>
          In the vast expanse of the cosmos, where danger lurks in every shadow and heroes are forged in the fires of adversity, one unlikely figure will rise. Meet Dingleberry, an unassuming space dweller with a knack for stumbling into trouble. Living a quiet life on a remote space station, Dingleberry's days of mundane tasks and simple pleasures are about to be shattered.
        </p>
        <p>
          When a chance encounter thrusts him into the crosshairs of a ruthless bounty hunting syndicate, Dingleberry must summon courage he never knew he had. Hunted by relentless bounty hunters and armed with nothing but wit and sheer luck, he embarks on a thrilling journey across the galaxy. Along the way, he will meet a cast of unforgettable characters, uncover hidden talents, and unravel a conspiracy that threatens the very fabric of space society.
        </p>
        <p>
          Will you help Dingleberry evade his pursuers and transform from an accidental fugitive into the hero the galaxy needs? Your choices will shape his destiny in this epic space adventure. Prepare for a journey filled with danger, intrigue, and unexpected heroism in "The Adventures of Dingleberry."
        </p>
        <div className="button-container">
          <button onClick={onStartGame}>Start Game</button>
          <button className="devblog-button" onClick={() => window.location.href = 'https://your-devblog-url.com'}>Dev Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
