<script>
    import {createEventDispatcher} from 'svelte';
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";

    export let id = "";
    export let selected = false;
    export let layout = 'full';
    const size = 'md';

    const dispatch = createEventDispatcher();
</script>

<div on:click={() => {
    selected = !selected;
    if (selected) dispatch('selected', { id });
    else dispatch('unselected', { id });
}} class="card {layout}" class:selected={selected} data-suit="{id.substring(id.length - 1)}">
    <p class="card-value">{id.substring(0, id.indexOf('-'))}</p>
    <SuitIcon key="{id.substring(id.length - 1)}" {size} />
</div>

<style lang="scss">
    @use 'sass:math';
    @use '../../styles/variables' as var;
    @use '../../styles/mixins' as m;

    @mixin card-theme($clr) {
      border: .262rem solid $clr;
      transition: background-color .2s ease-out;
      background-color: var.$clr--light;
      &:hover,
      &.selected { background-color: $clr; }
      .card-value { color: $clr; }
    }

    .card-value {
      font-size: var.$scale--700;
      font-family: var.$font--serif;
      font-weight: 900;
      transition: color .2s ease-out;
      line-height: 1.2;
    }

    .card.full {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      padding: var.$scale--100 var.$scale--300;
      cursor: pointer;

      .card-value {
        text-align: center;
      }

      &:hover,
      &.selected {
        .card-value {
          color: var.$clr--light !important;
        }
      }

      @include m.break(var.$breakpoint-sm) {
        padding: var.$scale--300 var.$scale--400;
      }
    }

    :global {
      .card.full {
        svg g,
        svg path,
        svg polygon {
          transition: fill .2s ease-out;
        }

        &:hover,
        &.selected {
            svg g,
            svg path,
            svg polygon {
              fill: var.$clr--light;
            }
        }
      }
    }

    .card.full[data-suit*="c"] { @include card-theme(var.$clr--clubs); }
    .card.full[data-suit*="s"] { @include card-theme(var.$clr--spades); }
    .card.full[data-suit*="d"] { @include card-theme(var.$clr--diamonds); }
    .card.full[data-suit*="h"] { @include card-theme(var.$clr--hearts); }

    .card.simple {
        display: flex;
        align-items: center;

        .card-value {
          margin-right: math.div(var.$scale--100, 2);
        }

        &[data-suit*="c"] {
          .card-value {
            color: var.$clr--clubs;
          }
        }

        &[data-suit*="s"] {
          .card-value {
            color: var.$clr--spades;
          }
        }

        &[data-suit*="d"] {
          .card-value {
            color: var.$clr--diamonds;
          }
        }

        &[data-suit*="h"] {
          .card-value {
            color: var.$clr--hearts;
          }
        }
    }
</style>
