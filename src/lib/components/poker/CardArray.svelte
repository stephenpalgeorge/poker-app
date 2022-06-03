<script>
    import {onMount} from "svelte";
    import Card from "$lib/components/poker/Card.svelte";

    export let cards = [];
    export let selection = [];
    export let id = cards.join('_');

    let cardArrayRef;
    onMount(() => {
        const cardArray = Array.from(document.querySelectorAll(`.card-array#${id} div.card`));
        cardArray.forEach((c, i) => {
            const delay = i * (1000 / cards.length);
            c.style.animationDelay = `${delay}ms`;
            c.classList.add('reveal');
        });
    });
</script>

{#if cards.length > 0}
    <div class="card-array" bind:this={cardArrayRef} {id}>
        {#each cards as card}
            <Card on:selected on:unselected id={card} selected={selection.includes(card)} />
        {/each}
    </div>
{/if}

<style lang="scss">
    @use '../../styles/variables' as var;
    .card-array {
      $gap: .5rem;

      display: flex;
      flex-flow: row wrap;
      margin-inline: -$gap;
      padding-block: var.$scale--400;

      :global {
        .card {
          margin-inline: $gap;
          margin-block: $gap;

          // initial state for animation:
          opacity: 0;
          transform: translateX(1rem);

          &.reveal {
            animation: card-reveal .4s forwards;
          }
        }
      }
    }

    @keyframes card-reveal {
      from {
        opacity: 0;
        transform: translateX(1rem);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
</style>