<script>
    import Card from "$lib/components/poker/Card.svelte";

    export let cards = [];
</script>

{#if cards.length > 0}
    <div class="suit">
        {#each cards as card}
            <Card id={card} />
        {/each}
    </div>
{/if}

<style lang="scss">
    @use '../../styles/variables' as var;
    .suit {
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