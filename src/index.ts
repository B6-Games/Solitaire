export type Card = { rank: number; suit: '♠'|'♥'|'♦'|'♣' };
export type Deck = Card[];

export function makeDeck(): Deck {
  const suits = ['♠','♥','♦','♣'] as const;
  const deck: Deck = [];
  for (const s of suits) for (let r = 1; r <= 13; r++) deck.push({ rank: r, suit: s });
  return deck;
}

export function shuffle<T>(arr: T[], rnd = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Example: start a Klondike deal (very simplified)
export function dealKlondike(deck: Deck) {
  const piles: Deck[] = Array.from({ length: 7 }, () => []);
  let idx = 0;
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row <= col; row++) piles[col].push(deck[idx++]);
  }
  const stock = deck.slice(idx);
  return { piles, stock };
}
