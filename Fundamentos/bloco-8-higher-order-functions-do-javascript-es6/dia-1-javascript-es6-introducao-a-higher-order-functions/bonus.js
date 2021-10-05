// Bonus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15) + 15);

const warriorDamage = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

const mageAtribute = () => {
  let damage = Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  mage.mana = mage.mana - 15;

  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
  }

  return {
    damage,
    mana: mage.mana,
  };
};

// console.log(mageAtribute(), mageAtribute(), mageAtribute());

const gameActions = {
  warriorShift: (warriorDamage) => {
    dragon.healthPoints = dragon.healthPoints - warriorDamage();
    warrior.damage = warriorDamage();
  },
  mageShift: () => {

  },
};
