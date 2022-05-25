<script>
    import Checkbox from "$lib/components/content/Checkbox.svelte";

    export let type;
    export let value;

    const valueLookup = {
        '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '10': '10', 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace',
    }

    const suitLookup = {
        c: 'Clubs',
        d: 'Diamonds',
        h: 'Hearts',
        s: 'Spades',
    }

    function formatFeature(type, value) {
        let sentence = '';
        switch (type) {
            case 'high':
                sentence = `A high card of value "${valueLookup[value]}"`;
                break;
            case 'pair':
                sentence = `A pair of ${valueLookup[value]}s`;
                break;
            case 'three':
                sentence = `A set of three ${valueLookup[value]}s`;
                break;
            case 'straight':
                sentence = `A straight that's ${valueLookup[Object.keys(valueLookup)[value - 1]]} high`;
                break;
            case 'flush':
                sentence = `A flush of ${suitLookup[value]}`;
                break;
            case 'four':
                sentence = `All four ${valueLookup[value]}s`;
                break;
        }

        return sentence;
    }
</script>

<Checkbox on:check uid="feature--{type}-{value}" key={value} data={{ 'feature-type': type }}>
    {formatFeature(type, value)}
</Checkbox>
