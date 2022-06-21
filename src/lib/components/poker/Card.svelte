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

    @mixin card-theme($clr, $clr-hover: var.$clr--light) {
      border: .262rem solid $clr;
      transition: background-color .2s ease-out;
      background-color: var(--bg-card);
      .card-value {
        color: $clr;
      }

      &:hover,
      &.selected {
        background-color: $clr;
        .card-value {
          color: $clr-hover;
        }
      }
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

        &[data-suit*="c"]:hover,
        &[data-suit*="c"].selected {
            svg g,
            svg path,
            svg polygon {
              fill: var(--clubs-contents-hover);
            }
        }

        &[data-suit*="d"]:hover,
        &[data-suit*="d"].selected {
          svg g,
          svg path,
          svg polygon {
            fill: var(--diamonds-contents-hover);
          }
        }

        &[data-suit*="h"]:hover,
        &[data-suit*="h"].selected {
          svg g,
          svg path,
          svg polygon {
            fill: var(--hearts-contents-hover);
          }
        }

        &[data-suit*="s"]:hover,
        &[data-suit*="s"].selected {
          svg g,
          svg path,
          svg polygon {
            fill: var(--spades-contents-hover);
          }
        }
      }
    }

    .card.full[data-suit*="c"] { @include card-theme(var(--clubs-color), var(--clubs-contents-hover)); }
    .card.full[data-suit*="s"] { @include card-theme(var(--spades-color), var(--spades-contents-hover)); }
    .card.full[data-suit*="d"] { @include card-theme(var(--diamonds-color), var(--diamonds-contents-hover)); }
    .card.full[data-suit*="h"] { @include card-theme(var(--hearts-color), var(--hearts-contents-hover)); }

    .card.simple {
        display: flex;
        align-items: center;

        .card-value {
          margin-right: math.div(var.$scale--100, 2);
        }

        &[data-suit*="c"] {
          .card-value {
            color: var(--simple-card-clubs-color);
          }
        }

        &[data-suit*="s"] {
          .card-value {
            color: var(--simple-card-spades-color);
          }
        }

        &[data-suit*="d"] {
          .card-value {
            color: var(--simple-card-diamonds-color);
          }
        }

        &[data-suit*="h"] {
          .card-value {
            color: var(--simple-card-hearts-color);
          }
        }
    }
</style>
