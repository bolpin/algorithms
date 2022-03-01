// # Imagine your company is building a series of card games and you are responsible for
// # building the common library that the game developers will use to build their games.

// # The game developers will want to be able to:
// #  - Start with a new, full deck of cards
// #  - Shuffle the deck
// #  - Deal a card from the deck

// # The games will use a Standard 52-card deck which consists of:
// #  - 4 suits: Clubs, Diamonds, Hearts, Spades
// #  - 13 ranks for each suit: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King
// # (See here for a visual:
// # https://en.wikipedia.org/wiki/Standard_52-card_deck#Rank_and_color)

// # The implementation is up to you. Use any language you would like :)

class Card {
  static SUITS = [ 'Hearts', 'Clubs', 'Diamonds', 'Spades']

  constructor(val, suit) {
      this.val = val;
      this.suit = suit;
  }

  namedVal() {
      let result;
      switch (this.val) {
          case 1 : 
            result = 'Ace';
            break;
          case 11:
            result = 'Jack';
            break;
          case 12:
            result = 'Queen';
            break;
          case 13:
            result = 'King';
            break;
          default:
              result = `${this.val}`;
      }
      return result;
  }

  toString() {
      return `${this.namedVal()} of ${Card.SUITS[this.suit]}`
  }
}

class Deck {
  constructor() {
      this.cards  = [];
      for (let i = 1; i < 14; i++) {
          for ( let j = 0; j < 4; j++) {
              this.cards.push(new Card(i, j))
          }
      };
  }
  
  randIndex() {
      return Math.floor(Math.random() * this.cards.length);
  }
  
  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
        let r = this.randIndex();
        const tmp = this.cards[i];
        this.cards[i] = this.cards[r];
        this.cards[r] = tmp;
    }
  }
  
  count() {
      return this.cards.length;
  }
  
  dealTopCard() {
      const card = this.cards.shift();
      return card;
  }
  
  log() {
      for (const card of this.cards) {
        console.log(card.toString())
      }
  }
}

let cards = new Deck();

// cards.log()
console.log(` Dealing the ${cards.dealTopCard().toString()}`);
console.log(` Dealing the ${cards.dealTopCard().toString()}`);
console.log(` Dealing the ${cards.dealTopCard().toString()}`);

cards.shuffle();


console.log(` Dealing the ${cards.dealTopCard().toString()}`);
console.log(` Dealing the ${cards.dealTopCard().toString()}`);
console.log(` Dealing the ${cards.dealTopCard().toString()}`);
console.log(cards.count());