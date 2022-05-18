<script>
    import {createEventDispatcher, onMount} from "svelte";

    export let uid;
    export let key;
    export let event = 'check';
    export let data = {};

    let checkboxRef;

    onMount(() => {
        if (Object.keys(data).length > 0) {
            for (const [key, value] of Object.entries(data)) {
                checkboxRef.setAttribute(`data-${key}`, value);
            }
        }
    });

    const dispatch = createEventDispatcher();
</script>

<div class="checkbox">
    <input bind:this={checkboxRef} on:change={
        ({ target }) => {
            dispatch(event, { key, value: target.checked ? 1 : 0, target });
        }
    } type="checkbox" name="{uid}" id="{uid}" />
    <label for="{uid}">
        <slot></slot>
    </label>
</div>

<style lang="scss">
    @use '../../styles/variables' as var;

    .checkbox {
      display: flex;
      align-items: center;
    }

    input[type="checkbox"] {
      display: none;
      & + label {
        $box-size: var.$scale--500;

        display: flex;
        align-items: center;
        position: relative;
        color: var.$clr--red;
        font-family: var.$font--sans-serif;
        font-size: var.$font-size--lead;
        transition: font-weight .2s ease;
        padding-inline-start: $box-size + 1rem;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          height: $box-size;
          width: $box-size;
          border: .125rem solid var.$clr--red;
          border-radius: .125rem;
          transition: background-color .2s ease;
        }

        &::after {
          content: '';
          position: absolute;
          left: $box-size * .5;
          top: $box-size * .5;
          height: $box-size * .75;
          width: $box-size * .4;
          border: 3px solid var.$clr--light;
          border-top-width: 0;
          border-left-width: 0;
          transform-origin: center;
          transform: rotate(30deg) translate(-85%, -24%);
        }
      }

      &:checked + label {
        font-weight: 900;

        &::before {
          background-color: var.$clr--red;
        }
      }
    }
</style>