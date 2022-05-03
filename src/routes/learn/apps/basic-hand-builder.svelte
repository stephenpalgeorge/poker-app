<script>
    import Meta from "$lib/components/global/Meta.svelte";
    import CardArray from '$lib/components/poker/CardArray.svelte';
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";
    import deck from "$lib/_data/deck.js";

    const title = "Hand Builder (Basic)";
    const description = "Learn the different hands in poker. Build your hand by selecting any five cards and our API will tell you what you’ve got.";
    let cards = deck;

    $: suits = [
        cards.filter(c => c.includes('s')).reverse(),
        cards.filter(c => c.includes('h')).reverse(),
        cards.filter(c => c.includes('c')).reverse(),
        cards.filter(c => c.includes('d')).reverse(),
    ];

    let hand = [];
    let filters = [];
    function onSelected(e) {
        hand = [...hand, e.detail.id];
    }

    function handleClear() {
        const selection = Array.from(document.querySelectorAll('.card.selected'));
        const selectedFilters = Array.from(document.querySelectorAll('.filter input:checked + label'));
        selection.forEach(c => c.classList.remove('selected'));
        selectedFilters.forEach(f => {
            document.querySelector(`input[id=${f.getAttribute('for')}]`).checked = false;
        });
        cards = deck;
        hand = [];
        filters = [];
    }

    function handleFilter({ target }) {
        cards = deck;
        const targetId = target.id.split('--')[1];
        if (target.checked) filters = [...filters, targetId];
        else {
            const index = filters.indexOf(targetId);
            filters = [...filters.slice(0, index), ...filters.slice(index + 1)];
        }

        let filtered = [];
        if (filters.length === 0) {
            filtered = deck;
        } else {
            filters.forEach(f => {
                filtered = [...filtered, ...cards.filter(c => c.includes(f) && filtered.indexOf(c) === -1)];
            });
            cards = filtered;
        }
    }
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<h1 class="hidden">{title}</h1>

<div class="controls">
    <div class="filter" id="suit-filter">
        <p>Filter by suit</p>
        <div class="options">
            {#each ['s', 'h', 'd', 'c'] as suit}
                <input on:change={handleFilter} class="hidden" type="checkbox" name="filter-{suit}" id="suit-filter--{suit}" />
                <label for="suit-filter--{suit}">
                    <SuitIcon key={suit} size="sm" />
                </label>
            {/each}
        </div>
    </div>

    <button id="clear-selected" on:click={handleClear}>Clear selection</button>
</div>

{#each suits as suit}
    <CardArray on:selected={onSelected} cards={suit} bind:selection={hand} />
{/each}

<style lang="scss">
    @use '../../../lib/styles/variables' as var;
    @use '../../../lib/styles/mixins' as m;

    .controls {
      padding-block: var.$scale--400;
      display: flex;
      justify-content: space-between;
      width: 100%;
      border-block: 1px solid var.$clr--light-grey;

      :global {
        + * {
            margin-top: var.$scale--600;
        }
      }
    }

    .filter {
      display: flex;
      .options {
        display: flex;
        align-items: center;
        margin-left: var.$scale--900;

        > label[for*="suit-filter"]:not(:first-of-type) {
          margin-left: var.$scale--400;
        }
      }

      p {
        font-family: var.$font--sans-serif;
        font-size: var.$font-size--lead;
        text-transform: uppercase;
      }

      label {
        cursor: pointer;
        transition: transform .2s ease-out;
      }

      input:checked + label {
        transform: scale(1.4);
      }
    }

    button#clear-selected {
      cursor: pointer;
      background: none;
      border: none;
      font-family: var.$font--serif;
      font-size: var.$scale--500;
      font-weight: 900;
      text-decoration: underline;

      @include m.link-focus(var.$clr--dark);
    }
</style>