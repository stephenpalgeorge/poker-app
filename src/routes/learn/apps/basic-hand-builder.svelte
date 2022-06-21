<script>
    import {onMount} from "svelte";
    // component imports
    import Meta from "$lib/components/global/Meta.svelte";
    import CardArray from '$lib/components/poker/CardArray.svelte';
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";
    import deck from "$lib/_data/deck.js";
    import Card from "$lib/components/poker/Card.svelte";
    import Breadcrumbs from "$lib/components/global/Breadcrumbs.svelte";

    const title = "Hand Builder (Basic)";
    const description = "Learn the different hands in poker. Build your hand by selecting any five cards and our API will tell you what you’ve got.";
    let handForm;
    let handValue;
    let cards = deck;

    $: suits = [
        cards.filter(c => c.includes('s')).reverse(),
        cards.filter(c => c.includes('h')).reverse(),
        cards.filter(c => c.includes('c')).reverse(),
        cards.filter(c => c.includes('d')).reverse(),
    ];

    let hand = [];
    let filters = [];
    function handleHandValue(handValue) {
        const hand = handValue.split(',');
        if (hand.length === 5) {
            handForm.submit();
        }
    }

    function onSelected(e) {
        hand = [...hand, e.detail.id];
        handValue.value = hand;
        handleHandValue(handValue.value);
    }

    function onUnselected(e) {
        const index = hand.indexOf(e.detail.id);
        if (index >= 0) {
            hand = [...hand.slice(0, index), ...hand.slice(index + 1)];
            handValue.value = hand;
            handleHandValue(handValue.value);
        }
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

    onMount(() => {
        // make sure none of the filters are selected when the page loads.
        Array.from(document.querySelectorAll('input:checked')).map(box => box.checked = false);
        Array.from(document.querySelectorAll('input:checked + label')).map(l => l.classList.remove('selected'));
    });
</script>

<svelte:head>
    <Meta {title} {description} />
</svelte:head>

<Breadcrumbs />
<h1 class="hidden">{title}</h1>
<p class="intro">
    Select cards from the grid below to build your hand. Once you've chosen 5 cards,
    you'll be forwarded on to a page that breaks down the value of your hand.
</p>

{#if hand.length > 0}
    <div class="hand">
        <p>{hand.length}/5:</p>
        <div class="cards">
            {#each hand as card}
                <Card id={card} layout="simple" />
            {/each}
        </div>
    </div>
{/if}

<div class="controls">
    <div class="filter" id="suit-filter">
        <p>Filter by suit</p>
        <div class="options">
            {#each ['s', 'h', 'd', 'c'] as suit}
                <input on:change={handleFilter} class="hidden" type="checkbox" name="filter-{suit}" id="suit-filter--{suit}" />
                <label for="suit-filter--{suit}">
                    <SuitIcon key={suit} size="sm" color="#fff" />
                </label>
            {/each}
        </div>
    </div>

    <button id="clear-selected" on:click={handleClear}>Clear selection</button>
</div>

<form bind:this={handForm} action="/learn/apps/hand-analysis" method="post">
    <input bind:this={handValue} type="hidden" name="hand-list" id="hand-list" />
</form>
{#each suits as suit}
    <CardArray on:selected={onSelected} on:unselected={onUnselected} cards={suit} bind:selection={hand} />
{/each}

<style lang="scss">
    @use '../../../lib/styles/variables' as var;
    @use '../../../lib/styles/mixins' as m;

    .intro {
      font-size: var.$scale--500;
      font-style: italic;
      font-weight: 300;
      margin-bottom: var.$scale--600;
    }

    .hand {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: var.$navigation-height * 1.5;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg);
      font-size: var.$scale--600;
      font-weight: 200;
      box-shadow: 0 -1px .125rem 1px var(--shadow-color);
      z-index: 1;

      p {
        margin-right: var.$scale--400;
        width: max-content;
      }

      .cards {
        display: flex;
        :global {
          .card + .card {
            margin-left: var.$scale--600;
          }
        }
      }
    }

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

      input:checked + label,
      input:focus + label {
        transform: scale(1.4);
      }

      @include m.break(var.$breakpoint-sm) {
        p {
          display: none;
        }

        .options {
          margin-left: 0;
        }
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