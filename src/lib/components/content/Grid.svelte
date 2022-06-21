<script>
    export let block = false;
    export let title = "";
</script>

<section class="grid-container">
    {#if title.length > 0}
        <h2 class="grid-title">{title}</h2>
    {/if}

    <slot name="description"></slot>
    <div class="grid" class:block={block}>
        <slot></slot>
    </div>
</section>

<style lang="scss">
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;

    :global {
      * + .grid-container {
        margin-top: var.$scale--600 !important;
      }
    }

    .grid-container {
      background-color: var(--bg-offset);
      padding: var.$scale--800;
      margin-inline:-#{var.$scale--800};
      margin-bottom: var.$scale--800;
    }

    .grid {
      &:not(.block) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
          grid-gap: var.$scale--400;
      }

      &.block {
          :global {
            > * + * {
                margin-top: var.$scale--400;
            }
          }
      }
    }
</style>