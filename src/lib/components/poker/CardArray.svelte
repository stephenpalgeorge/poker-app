<script>
    import Card from "$lib/components/poker/Card.svelte";

    export let cards = [];
    export let selection = [];
</script>

{#if cards.length > 0}
    <div class="card-array">
        {#each cards as card}
            <Card on:selected id={card} selected={selection.includes(card)} />
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
        }
      }
    }
</style>