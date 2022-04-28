export const spells = [
  {
    name: 'Blizzard',
    castType:'Channeled',
    manaCost: '6 mana per turn',
    effects: {
      damage: '5',
      status: 'frost'
    }
  },
  {
    name: 'Firestorm',
    castType:'Instant',
    manaCost: '2',
    effects: {
      damage: '2',
      status: 'burn'
    }
  },
  {
    name: 'Thunder Strike',
    castType:'Instant',
    manaCost: '1',
    effects: {
      damage: '1',
      status: 'stun'
    }
  },
  {
    name: 'Poison Cloud',
    castType:'channeled',
    manaCost: '3 mana per turn',
    effects: {
      damage: '2 per turn',
      status: 'damage over time'
    }
  },
];
