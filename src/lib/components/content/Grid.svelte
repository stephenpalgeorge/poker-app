<script>
    export let block = false;
</script>

<section class="grid" class:block={block}>
    <slot></slot>
</section>

<style lang="scss">
    @use '../../styles/variables' as var;

    .grid {
      margin: var.$scale--800 -#{var.$scale--800};
      padding: var.$scale--800;
      background-color: var.$clr--light-grey;

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