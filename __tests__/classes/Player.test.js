const Item = require("../../classes/Item");
const Player = require("../../classes/Player");
describe('Player', () => {
  it('should add an item to a player inventory', () => {
    // arrange
    let player1 = new Player('John', 'rogue', [8, 2], 'duct tape');
    let item1 = new Item('potion', 2);

    // act
    player1.addItem(item1); 
    
    // assert
    expect(player1.inventory).toContain(item1);
  });

  it('should not add an item if it is already in the inventory', () => {
    // arrange
    let item2 = new Item('potion', 2);
    let player2 = new Player('John', 'rogue', [8, 2], 'duct tape');
    player2.addItem(item2);
    
    // act
    // player2.addItem(item2);
    
    // assert
    expect(player2.inventory).toHaveLength(1);
    expect(() => {player2.addItem(item2)}).toThrow('Already in inventory.');
  })
})