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
    },
    three: {
        title: 'Three of a kind',
        description: 'Your hand contains a set of three cards that all have the same value.',
        tie: 'If two or more players have a "Three of a kind" hand, the hand with the highest value set wins, e.g. three 9s beats three 4s',
    },
    straight: {
        title: 'Straight',
        description: 'Your hand contains a run of 5 cards that are in sequential order.',
        tie: 'If two or more players have a "Straight" hand, the hand with the highest value straight wins, e.g. a straight that goes up to Queen beats a straight that goes up to 10.',
    },
    flush: {
        title: 'Flush',
        description: 'Your hand contains five cards that are all of the same suit.',
        tie: 'If two or more players have a "Flush" hand, the hand with the highest card in it wins, e.g. a flush with an King as its highest card beats a flush with a 7 as its highest.',
    },
    'full-house': {
        title: 'Full House',
        description: 'Your hand contains a set of three cards of the same value, and a pair of two cards that have the same value.',
        tie: 'If two or more players have a "Full house", the hand with the highest set of three wins, e.g. Three 9s with two 10s beats three 5s with two Aces.',
    },
    four: {
        title: 'Four of a kind',
        description: 'Your hand contains four cards that all have the same value.',
        tie: 'If two or more players have "Four of a kind", the hand with the highest value group wins, e.g. Four Jacks beats four 8s.',
    },
    'straight-flush': {
        title: 'Straight Flush',
        description: 'Your hand contains a run of 5 cards is sequential order, that are also all of the same suit.',
        tie: 'If two or more players have a "Straight Flush", the hand with the highest value straight wins, e.g. a straight flush with a high card of Queen beats a straight flush with high card 10.',
    },
    'royal-flush': {
        title: 'Royal Flush',
        description: 'Your hand contains a run of 5 cards is sequential order that is Ace high. All of the cards are of the same suit.',
        tie: '',
    }
}

export default analysis;
