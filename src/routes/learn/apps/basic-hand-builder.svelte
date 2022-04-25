<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import Suit from '$lib/components/poker/CardArray.svelte';
    import deck from "$lib/_data/deck.js";

    const title = "Basic hand builder";
    const description = "Learn the different hands in poker. Build your hand by selecting any five cards and our API will tell you what you’ve got.";

    const suits = [
        deck.filter(c => c.includes('s')).reverse(),
        deck.filter(c => c.includes('h')).reverse(),
        deck.filter(c => c.includes('c')).reverse(),
        deck.filter(c => c.includes('d')).reverse(),
    ];

    function handleClear() {
        const cards = Array.from(document.querySelectorAll('.card.selected'));
        cards.forEach(c => c.classList.remove('selected'));
    }
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1 class="hidden">{title}</h1>

<button id="clear-selected" on:click={handleClear}>Clear selection</button>
{#each suits as suit}
    <Suit cards={suit} />
{/each}

<style lang="scss">
    @use '../../../lib/styles/variables' as var;
    @use '../../../lib/styles/mixins' as m;

    button#clear-selected {
      background: none;
      border: none;
      font-family: var.$font--serif;
      font-size: var.$scale--500;
      font-weight: 900;
      text-decoration: underline;

      @include m.link-focus(var.$clr--dark);
    }
</style>