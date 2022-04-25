<script>
    import { createEventDispatcher } from 'svelte';
    import SuitIcon from "$lib/components/media/SuitIcon.svelte";

    export let id = "";
    export let selected = false;

    const [value, suit] = id.split('-');
    const dispatch = createEventDispatcher();
</script>

<div on:click={() => {
    selected = !selected;
    if (selected) dispatch('selected', { id });
}} class="card" class:selected={selected} {id}>
    <p class="card-value">{value}</p>
    <SuitIcon key="{suit}" />
</div>

<style lang="scss">
    @use '../../styles/variables' as var;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
      padding: var.$scale--100 var.$scale--300;
      cursor: pointer;

      .card-value {
        font-size: var.$scale--700;
        font-family: var.$font--serif;
        font-weight: 900;
        transition: color .2s ease-out;
        line-height: 1.2;
      }

      &:hover,
      &.selected {
        .card-value {
          color: var.$clr--light !important;
        }
      }
    }

    :global {
      .card {
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

    .card[id*="c"] {
      border: .262rem solid var.$clr--dark;
      transition: background-color .2s ease-out;
      background-color: var.$clr--light;
      &:hover,
      &.selected {
        background-color: var.$clr--dark;
      }
      .card-value {
        color: var.$clr--dark;
      }
    }

    .card[id*="d"] {
      border: .262rem solid var.$clr--red;
      transition: background-color .2s ease-out;
      background-color: var.$clr--light;
      &:hover,
      &.selected {
        background-color: var.$clr--red;
      }
      .card-value {
        color: var.$clr--red;
      }
    }

    .card[id*="h"] {
      border: .262rem solid var.$clr--red;
      transition: background-color .2s ease-out;
      background-color: var.$clr--light;
      &:hover,
      &.selected {
        background-color: var.$clr--red;
      }
      .card-value {
        color: var.$clr--red;
      }
    }

    .card[id*="s"] {
      border: .262rem solid var.$clr--dark;
      transition: background-color .2s ease-out;
      background-color: var.$clr--light;
      &:hover,
      &.selected {
        background-color: var.$clr--dark;
      }
      .card-value {
        color: var.$clr--dark;
      }
    }
</style>
