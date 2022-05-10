<script>
    export let type;
    export let value;

    const valueLookup = {
        '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '10': '10', 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace',
    }

    function formatFeature(type, value) {
        let sentence = '';
        switch (type) {
            case 'pair':
                sentence = `A pair of ${valueLookup[value]}s`;
                break;
        }

        return sentence;
    }
</script>

<p>{formatFeature(type, value)}</p>