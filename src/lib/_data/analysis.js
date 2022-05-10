const analysis = {
    high: {
        title: 'High Card',
        description: 'Your hand doesn\'t have any cards that go together, so it\'s value is simply based on the highest single card in the hand.',
        tie: 'If two or more players have a "High Card" hand, the hand with the card of the highest value wins, e.g. a hand with an Ace as its highest card beats a hand with a Jack as its highest card.',
    },
    pair: {
        title: 'Pair',
        description: 'Two of the cards in your hand are of the same value and therefore make a pair.',
        tie: 'If two or more players have a pair, the pair of the highest value wins, e.g. a pair of Queens beats a pair of sevens.',
    },
    'two-pair': {
        title: 'Two Pair',
        description: 'Your hand contains two sets of two cards that have the same value.',
        tie: 'If two or more players have a "Two Pair" hand, the hand with the highest value pair wins, e.g. pairs of Kings and Sixes beats pairs of Jacks and Nines.',
    }
}

export default analysis;
