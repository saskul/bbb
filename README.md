# Basic Blackjack Bot
> Simple console terminal for facilitating decision making in Blackjack game based on the Basic Strategy.

![Learn more: https://search.brave.com/search?q=Basic+Strategy&source=desktop](https://m.media-amazon.com/images/I/816DFf5i0EL._AC_UF1000,1000_QL80_.jpg)

## Blackjack
1. You get two cards. You play against the House.
2. You want to get the number of points as close to 21 as possible, but not greater than 21 (then you lose), and closer than the Dealer.
3. 2-10 are worth as much as is the number on them. 
4. J,Q,K is worth 10. 
5. Ace is worth 1 or 11, whichever suits you better.
6. You are shown one dealer's card - the **Dealer's Upcard**.
7. Calculate it's value the same way you would for your own card.
8. You can make one of three decisions - to **Hit**, **Stand** or **Double**. 
9. If you need more cards, you can **Hit** to get one another card.
10. If you feel you are as close to 21 as you can possibly get without overshooting it, you should **Stand** and freeze your hand.
11. If you feel like **one more card** would end this in your favor, **Double** your stake. It's favorable especially when your starting hand is worth 11 points - there is a high probability then, that the next card will be worth 10 points and give you the winning 21.
12. After you **Stand** or **Double**, dealer can **Hit** as many cards as he can without overshooting 21. If he does, you win. If he gets closer than you, you lose. If you both get the same value, you play again.


## Development
Feel free to fork & if you just want the strategy, import the **getVerdict(hasAces: boolean, playersTotal: number, dealersUpcard: number)** function from the `blackjack.js` module.

## Strategy:
1. First check when to **stand**.
2. Then check when to **double**.
3. If not, then **hit**.

### Glossary:
- `HT` - *Hard Total*, the number of points from two cards if no aces are present in the player's hand.
- `ST` - *Soft Total*, the number of points from two cards if an ace is present in the player's hand.
- `DU` - *Dealer's Upcard*, the number of points from the one dealer's card revealed at the beginning of the round.

#### **Stand** when:
1. `ST == 8 && DU <= 8`
2. `ST == 9-10`
3. `HT == 12 && DU !== 4-6`
4. `HT == 13-16 && DU <= 6`
5. `HT >= 17`

#### **Double** when:
1. `ST == 3-4 && DU 5-6`
2. `ST == 5-6 && DU 4-6`
3. `ST == 7 && DU 3-6`
4. `HT == 9 && DU == 3-6`
5. `HT == 10 && DU !== 10-A`
6. `HT == 11`