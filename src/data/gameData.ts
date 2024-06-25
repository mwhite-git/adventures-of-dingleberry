interface Choice {
    text: string;
    nextScene: number;
  }
  
  interface Scene {
    id: number;
    description: string;
    choices: Choice[];
    image: string; 
  }
  
  export const gameData: Scene[] = [
    {
      id: 1,
      description: "You are Dingleberry, a simple and unassuming space dweller. Tonight, you find yourself at your favorite spot in a cozy, dimly lit space tavern. The hum of distant engines and the murmur of patrons fill the air, accompanied by the scent of roasted alien delicacies and exotic brews. As you relax, you overhear a group of travelers discussing the sudden appearance of a notorious bounty hunter in the sector. Little do you know, this is just the beginning of your unexpected adventure.",
      choices: [
        { text: "Eavesdrop on the travelers' conversation", nextScene: 2 },
        { text: "Order a drink and relax", nextScene: 3 },
        { text: "Leave the tavern and head home", nextScene: 4 }
      ],
      image: '/images/scene-one.jpeg' 
    },
    {
      id: 2,
      description: "You lean closer to the travelers' table, trying to catch more details. The conversation reveals that the bounty hunter is searching for someone who witnessed a critical event. As you realize they might be talking about you, panic sets in. You need to decide your next move quickly.",
      choices: [
        { text: "Sneak out the back door", nextScene: 5 },
        { text: "Confront the travelers", nextScene: 6 },
        { text: "Hide in the restroom", nextScene: 7 }
      ],
      image: '/images/scene-two.jpeg'
    },
    {
      id: 3,
      description: "You decide to order a drink and relax. The bartender serves you a glass of the finest brew, but as you take a sip, you notice a shadowy figure entering the tavern. Your heart races as you recognize the notorious bounty hunter from the stories.",
      choices: [
        { text: "Stay calm and observe", nextScene: 8 },
        { text: "Try to blend in with the crowd", nextScene: 9 },
        { text: "Make a quick exit", nextScene: 10 }
      ],
      image: '/images/scene-three.jpeg'
    },
    {
      id: 4,
      description: "Deciding it's best to leave, you exit the tavern and head towards your home. The streets are quiet, and the stars twinkle above. As you walk, you can't shake the feeling that you're being followed.",
      choices: [
        { text: "Take a detour through the alley", nextScene: 11 },
        { text: "Pick up the pace and head straight home", nextScene: 12 },
        { text: "Hide and see who's following you", nextScene: 13 }
      ],
      image: '/images/scene-four.jpeg'
    },
  
  ];
  